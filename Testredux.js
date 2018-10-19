const {createStore} = require('redux');
const defaulState = {value:0};
const reducer = (state =defaulState,action) => {
      if(action.type ==="up") return {value: state.value +1};
      if(action.type ==="down") return {value:state.value -1};
      return state;
};
const store = createStore(reducer);
console.log("truoc khi dispatch" + store.getState().value);
store.dispatch({ type: "up"});
console.log("sau khi dispath" + store.getState().value);
