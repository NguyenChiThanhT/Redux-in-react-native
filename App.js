import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Haapp from 'ReduxBT1/src/Haapp';
//import thu vien redux
import {createStore} from 'redux';
//import thu vien tich hop rect-redux
import {Provider} from 'react-redux';
//khoi tao diem bat dau
const defaulState = {value:0};
//khoi tao reducer
const reducer = (state = defaulState, action) => {
      if(action.type ==="up") return {value: state.value +1};
      if(action.type ==="dow") return {value: state.value -1};
      return state;
}
//tao ra cai store
const store = createStore(reducer);
//tich hop redux store vao react app
export default class App extends Component<Props> {
  render() {
    return (
       <Provider store={store}>
           <Haapp />
       </Provider>

    );
  }
}
