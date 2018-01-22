import React from 'react'
import ReactDOM from 'react-dom'

import { createStore ,applyMiddleware} from 'redux'
import { connect, Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import {Route, withRouter} from 'react-router-dom'
import {ConnectedRouter,routerMiddleware,push } from 'react-router-redux'


import app from './reducer.js'

import AuthExample from './AuthExample.js'
import AuthExample2 from './AuthExample2.js'
import RouteConfigExample from './RouteConfigExample.js'
import App from './Home.js'
import ModalGallery from './ModalGallery.js'

const history = createHistory()
const middleware = routerMiddleware(history)

let store = createStore( 
  app ,
  applyMiddleware(middleware)
  );

/*console.log(store.getState());
store.dispatch({
  type:'login',
  value:{
    isLogined: true,
    userInfo: "whn"
  }
})
console.log(store.getState());*/
class Test extends React.Component {
    constructor(props) {
        super( props );
        console.log( props );
    }
    componentDidUpdate(prevProps) {
        console.log( prevProps );
        console.log( this.props );
    }
    render() {
        console.log( this.props );
        return <h1>Test</h1>;
    }
}

const MyApp = connect( state => {
    return {
        state: state
    };
} )( AuthExample );

const Appp = connect(state=>state)(App)

/*const TestWithRouter = connect( state => ({
    state
}) )( withRouter( Test ) );
*/

//store.dispatch(push('/foo'))
/*ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <MyApp />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById( 'root' )
);*/

/*ReactDOM.render(
  
      <div>
        <AuthExample2 />
      </div>,
  document.getElementById( 'root' )
);
*/

/*ReactDOM.render(
    <Provider store={store}>
        <MyApp />
    </Provider>,
  document.getElementById( 'root' )
);
*/

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MyApp />
    </ConnectedRouter>
  </Provider>,
  document.getElementById( 'root' )
);
