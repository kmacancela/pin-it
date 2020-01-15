import React, { Component } from 'react'
import Header from '../components/Header'
import TailorSpecs from '../components/TailorSpecs'

export default function DisplayTailorSpecs(props) {

  return (
    <>
      <Header xprops={props.xprops} />
      <TailorSpecs resetSpecs={props.resetSpecs} specs={props.specs} showSpecs={props.showSpecs} />
    </>
  )
}
