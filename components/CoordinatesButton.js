import React from 'react';
import ReactDOM from 'react-dom'

export default class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(event) {
    this.props.onReceiveCoordinates([event.screenX, event.screenY])
  }

    render() {
      return(
        <button onClick={this.handleClick}></button>
      )
    }
}
