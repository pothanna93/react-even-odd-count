import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  randomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNum = this.randomNumber()

    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="even-bg-container">
        <div className="even-odd-container">
          <h1 className="heading"> count {count}</h1>
          <p className="title">Count is {displayText}</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="description">
            *Increase by Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
