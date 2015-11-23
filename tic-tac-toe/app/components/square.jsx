import React, { Component } from 'react'

export default class Square extends Component {
  handleClick () {
    if (this.props.children === '') {
      this.props.clickCb(this.props.index)
    }
  }

  render () {
    let mark = this.props.children
    let status = (mark === '') ? 'empty' : 'player-${mark}'

    return <div className={status}
      onClick={this.handleClick.bind(this)}>{this.props.children}</div>
  }
}
