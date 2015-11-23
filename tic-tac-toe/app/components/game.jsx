import React, { Component } from 'react'
import superagent from 'superagent'

import Square from './square.jsx!'

export default class Game extends Component {
  constructor (props) {
    super(props)

    this.state = {
      history: []
    }
  }
}

getBoard () {
  return this.state.history.reduce((memo, square, idx) => {
    memo[square] = (idx % 2 === 0) ? 'x' : 'o'
    return memo
  }, new Array(9).fill(''))
}

makeMove (square) {
  this.setState({
    history: this.state.history.contact(square)
  })
}

render () {
  console.log(this.state)
  
  let board = this.getBoard().map((mark, idx) => {
    return <Square key={idx} index={idx}
      clickCb={this.makeMove.bind(this)}>{mark}</Square>
  })

    return <div className='board'>{board}</div>
  }
}

componentWillMount () {
  superagent
    .post('http://localhost:3000/games')
    .type('application/json')
    .accept('application/json')
    .send({history: []})
    .end((err, res) => {
      if (err) {
        console.log('Oh, noes!', err)
      } else {
        this.setSate(res.body)
      }
    })
}
