import React, { Component } from 'react';
import {Provider} from 'mobx-react'
import InputComp from './component/InputComp'
import store from './component/store'
import './ReactComp.less';

class ReactComp extends Component {

  render() {
    const placeholder = this.props.placeholder || '';
    return (
      <Provider {...store}>
        <div className="react-comp">
            <InputComp placeholder={placeholder} />
        </div>
      </Provider>
    );
  }
}

export default ReactComp;
