import React, { Component } from 'react';
import {inject, observer} from "mobx-react";
import './index.less';
import zhangjiajie from '../static/img/zhangjiajie.jpg'

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
          <div style={{color:'red'}}>value change to {this.state.value}</div>
          <div className="testClass">value from mobx store {inputValue}</div>
          <img src={zhangjiajie} />
      </div>
    );
  }
}

export default InputComp;
