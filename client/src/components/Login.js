import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from 'reactstrap'
import { withRouter } from "react-router";
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

class Login extends Component {
  state = {
    modal: false,
    email: '',
    password: '',
    msg: null
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
        children: nextProps.children
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();

    // DO I NEED A LOCAL STATE?
    const { email, password } = this.state;
    // console.log(email)
    let info = { email, password }
    this.props.getUser(info)
    // browserHistory.push('/search')
    // this.props.history.push("/search")

    // this.props.login(returningUser)
    // if(localStorage.token !== null) {
    //   history.push('/search')
    // }

    this.props.success()
  }

  render() {
    return (
      <div>
        <h1>Log in</h1>
            {this.state.msg ? (
              <Alert color='danger'>{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
              <Label for='email'>Email</Label>
                <Input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  className='mb-3'
                  onChange={this.onChange}
                />
              <br />
              <Label for='password'>Password</Label>
                <Input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  className='mb-3'
                  onChange={this.onChange}
                />
                <br />
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  <a href='/search'>Log in</a>
                </Button>
              </FormGroup>
            </Form>
      </div>
    );
  }
}
export default Login
