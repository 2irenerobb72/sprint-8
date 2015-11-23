import React, { Component } from 'react'

import Game from './game.jsx!'

export default class App extends Component {
  render () {
    return<div className="app">
      <header>
        <h1>
          TicTacToe
        </h1>
      </header>
      <Game/>
    </div>
  }
}
