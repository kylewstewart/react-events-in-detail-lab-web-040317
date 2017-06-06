import React from 'react'
import ReactDOM from 'react-dom'

export default class DelayedButton extends React.Component {
  constructor(props) {
    super(props)
    this.tina = this.tina.bind(this)
  }

  tina(event) {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.tina}> </button>
    )
  }


}
