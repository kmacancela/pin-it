import React, { Component } from 'react'
import Header from '../components/Header'
import Inbox from '../components/Inbox'

export default function DisplayInbox(props) {

  return (
    <>
      <Header xprops={props.xprops} />
      <Inbox sendMessage={ props.sendMessage } user={ props.user } messages={props.messages} />
    </>
  )
}
