import {observable, configure, action, runInAction} from 'mobx'

configure({enforceActions: 'observed'});

class UI {
  @observable inputValue = '测试一下';
  
  @action setInputValue = (val) => {
      this.inputValue = val
  } 
}

const ui = new UI();

export default ui
