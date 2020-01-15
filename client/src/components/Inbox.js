import React from 'react'
import { Grid, Paper, Button } from '@material-ui/core'

const styles = {
  Paper: {
    padding: 20,
    marginTop: 50,
    marginBottom: 10
  }
}

export default function Inbox(props) {

  const handleSubmit = (e) => {
    e.preventDefault()
    let message = {
      receiver_id: 5,
      title: e.target.title.value,
      body: e.target.body.value,
      message_date: '12-03-2019'
    }
    props.sendMessage(message)
  }

  // const getUserMessages = () => {
  //   { console.log("user in inbox?", props.user) }
  //   { console.log("inside inbox", props.getMessages(props.user)) }
  //   props.getMessages(props.user)
  //   .then(r => r.json())
  //   .then(data => console.log("data", data))
  // }

  return(
    <div>
      { console.log("user messages:", props.messages) }

      <h1> New Message </h1>
      <form onSubmit={ handleSubmit }>
        <input type='text' name='title' placeholder='Subject line...' />
        <input type='text' name='body' placeholder='Write your message here...' />
        <input type='submit' value='Send message' />
      </form>
    </div>
  )
}
