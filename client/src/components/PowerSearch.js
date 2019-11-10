import React, { Component } from 'react'
import { PowerSelectMultiple } from 'react-power-select'
 
export default class PowerSearch extends Component {
  state = {};
 
  handleChange = ({ option }) => {
    this.setState({
      selectedOption: option
    })
  }
 
  render() {
    return (
      <PowerSelectMultiple
        options={this.props.options}
        selected={this.state.selectedOption}
        onChange={this.handleChange}
      />
    )
  }
}