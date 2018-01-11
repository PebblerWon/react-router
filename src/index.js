import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {connect,Provider} from 'react-redux';
import  app from './reducer.js'

import AuthExample from './AuthExample.js';
import RouteConfigExample from './RouteConfigExample.js';

let store = createStore(app);
/*console.log(store.getState());
store.dispatch({
  type:'login',
  value:{
    isLogined: true,
    userInfo: "whn"
  }
})
console.log(store.getState());*/

const MyApp = connect(state=>{return {state:state}})(AuthExample);

ReactDOM.render(
  <Provider store={store}>
    <RouteConfigExample />
  </Provider>
    
    , document.getElementById( 'root' ) );
