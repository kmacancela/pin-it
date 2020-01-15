import React, { Component } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'

export default class DisplaySearch extends Component {
  render() {
    console.log("inside display search", this.props)
    return (
      <>
        <Header xprops={this.props.xprops} user={ this.props.user } />
        <Search xprops={this.props.xprops} tailors={ this.props.tailors } success={ this.props.success } revert={ this.props.revert } resetSpecs={this.props.resetSpecs} specs={this.props.specs} showSpecs={this.props.showSpecs} />
      </>
    )
  }
}
