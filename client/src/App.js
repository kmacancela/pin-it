import React, { Component } from 'react'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import Welcome from './components/Welcome'
import Search from './components/Search'
import Login from './components/Login'
import Signup from './components/Signup'
import Inbox from './components/Inbox'
import Header from './components/Header'
import DisplaySearch from './containers/DisplaySearch'
import TailorSpecs from './components/TailorSpecs'
import DisplayTailorSpecs from './containers/DisplayTailorSpecs'
import DisplayInbox from './containers/DisplayInbox'

class App extends Component {
  state = {
    user: null,
    user_id: null,
    token: null,
    error: null,
    tailors: [],
    success: false,
    page: 'Welcome',
    specs: null,
    messages: null
  }

  abortController = new AbortController()

  // Whenever app is re-rendered, we will be...
  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    if (localStorage.token){
      this.setState({
        token: localStorage.token,
        user_id: localStorage.user_id,
        user
      })
      fetch('http://localhost:3000/users')
      .then(r => r.json())
      .then(data => {
        let tailors = data.filter(d => {
          return d.tailor === true
        })
        this.setState({tailors})
      })
      this.getMessages(this.state.user)
    }
  }

  // When we want to register a new user
  newUser = info => {
    let first_name = info.first_name
    let last_name = info.last_name
    let email = info.email
    let password = info.password
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ first_name, last_name, email, password })
    })
    .then(r => r.json())
    .then(data => console.log("data", data))
  }

  // When we have a returning user
  getUser = info => {
    let email = info.email
    let password = info.password
    return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
    .then(r => r.json())
    .then(res => {
      console.log("res?: ", res)
      let token = res.token
      let user_id = parseInt(res.user_id)
      localStorage.token = token
      localStorage.user_id = user_id
      fetch(`http://localhost:3000/users/${res.user_id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': token
        }
      })
      .then(r => r.json())
      .then(user => {
        console.log(user, "userrrrr")
        localStorage.setItem('user', JSON.stringify(user))
        this.setState({user, user_id, token})
      })
    })
  }

  // When a user logs out
  logout = () => {
    console.log("logged out")
    localStorage.token = null
    localStorage.user_id = null
    localStorage.user = null
    this.setState({
      token: null,
      user_id: '',
      user: null,
      error: null
    })
  }

  successLogin = () => {
    this.setState({success: true})
  }

  revertSuccess = () => {
    this.setState({success: false})
  }

  getMessages = (user) => {
    fetch('http://localhost:3000/messages')
    .then(r => r.json())
    .then(messages => {
      console.log("messages", messages)
      console.log("user", user)
      console.log("user_id", this.state.user_id)
      let user_messages = messages.filter(message => {
        return message.receiver_id === this.state.user_id
      })
      console.log("user messages in app", user_messages)
      // return user_messages
      this.setState({messages: user_messages})
    })
  }

  sendMessage = (message) => {
    console.log("message?", message)
    let sender_id = this.state.user_id
    let receiver_id = message.receiver_id
    let title = message.title
    let body = message.body
    let message_date = message.message_date
    fetch('http://localhost:3000/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({sender_id, receiver_id, title, body, message_date})
    })
    .then(r => r.json())
    .then(res => console.log(res, "res"))
  }

  showSpecs = (tailor) => {
    this.setState({
      specs: tailor
    })
  }

  resetSpecs = () => {
    this.setState({
      specs: null
    })
  }

  render() {
    console.log("user in state?", this.state.user)
    return (
      <>
      <Switch>
        <Route exact path='/' render={ (props) => <Welcome logout={ this.logout } user={ this.state.user } /> } />
        <Route path='/search' render={ (xprops) => <DisplaySearch xprops={xprops} user={ this.state.user } tailors={ this.state.tailors } success={ this.state.success } revert={ this.revertSuccess } resetSpecs={this.resetSpecs} specs={this.state.specs} showSpecs={this.showSpecs} /> } />
        <Route path='/login' render={ (props) => <Login getUser={ this.getUser } success={this.successLogin} /> } />
        <Route path='/signup' render={ (xprops) => <Signup xprops={xprops} newUser={ this.newUser } /> } />
        <Route path='/inbox' render={ (xprops) => <DisplayInbox xprops={xprops} user={ this.state.user } messages={ this.state.messages } sendMessage={ this.sendMessage } /> } />
        <Route path='/tailor' render={ (xprops) => <DisplayTailorSpecs xprops={xprops} resetSpecs={this.resetSpecs} specs={this.state.specs} showSpecs={this.showSpecs} /> } />
      </Switch>

      { this.state.success ?
        <Redirect to='/search' />
        :
        null
      }

      { this.state.specs ?
        <Redirect to='tailor' />
        :
        null
      }

      </>
    )
  }
}
export default withRouter(App)
