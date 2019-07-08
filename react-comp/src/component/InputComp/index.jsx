import React, { Component } from 'react';
import {inject, observer} from "mobx-react";
import './index.less';

@inject('UI')
@observer
class InputComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = (e) => {
    this.props.UI.setInputValue(e.target.value)
    this.setState({ value: e.target.value});
  }


  render() {
    const placeholder = this.props.placeholder || '';
    const { value } = this.state;
    const {inputValue} = this.props.UI


    return (
      <div className="input-comp">
          <input
            value={value}
            placeholder={placeholder}
            onChange={this.handleChange}
          />
          <div>value change to {this.state.value}</div>
          <div>value from mobx store {inputValue}</div>
      </div>
    );
  }
}

export default InputComp;
