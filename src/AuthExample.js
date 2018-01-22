import React from 'react';
//import {Switch} from 'react-router';
import createHistory from 'history/createBrowserHistory'
import {Switch,Router, Route, Link, Redirect} from 'react-router-dom';
import {ConnectedRouter,push} from 'react-router-redux'
import { connect } from 'react-redux';

const history = createHistory()

class AuthExample extends React.Component {
    constructor(props) {
        super( props );
        console.log( props );
    }
    render() {
        console.log("rendered");
        return (
            <ConnectedRouter history={history}>
                <div>
                  <AuthButton />
                  <ul>
                    <li>
                      <Link to='/public'>Public Page</Link>
                    </li>
                    <li>
                      <Link to='/protected'>Protected Page</Link>
                    </li>
                  </ul>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path='/public' component={Public}></Route>
                    <Route exact path='/login' component={Login}></Route>
                    <Route exact path="/test" component={Test}></Route>
                    <PrivateRoute path='/protected' component={Protected}></PrivateRoute>
                </div>
            </ConnectedRouter>
        );
    }
}



class AuthButtonComponent extends React.Component {
    render() {
        const isAuthenticated = this.props.isLogined;
        let res;
        isAuthenticated ? res = <p>
      Welcome! <button onClick={() => {
        }}>Sign out</button>
    </p>
            : res = <p>You are not logined</p>;
        return res;
    }
}
const AuthButton = connect( state => {
    return {
        ...state.curUser
    };
} )( AuthButtonComponent );

class PrivateRouteComponent extends React.Component {
    constructor(props) {
        super( props );
        console.log(props);
    }
    render() {
        console.log("PrivateRoute render");
        const {component:Component, ...rest} = this.props;
        let res;
        let isLogined = this.props.isLogined;
        /*isLogined ? 
        res = <Route exact path={rest.path} component={Protected}/>:
        res = <Route exat path={rest.path} render={(props)=>{
          console.log(props);
          return(<Redirect to={{
                  pathname: '/login',
                  state: {
                      from: props.location
                  }
                }}></Redirect>)
        }
            
          }>
                
              </Route>;*/
       
        //res = <Route {...rest} render={(props)=><Protected {...props}/>}/>
        if(isLogined)
            return <Route exact path="/public" component={HasLogined}></Route>
        else
            return <Route exact path="/public" component={NotLogin}></Route>
    }
}
const PrivateRoute = connect( state => {
    return {
        ...state.curUser
    };
} )( PrivateRouteComponent );

const Test = (props) => {
    return (
      <h3>Test</h3>
    );
};

const NotLogin = ()=><h1>未登录</h1>
const HasLogined = ()=><h1>已登录</h1>

const Home = ({match}) => {
    console.log( match );
    return (<h3>Home</h3>);
};

const Public = (props) => {
    console.log( props );
    return (<h3>Public</h3>);
};
const Protected = () => <h3>Protected</h3>;

class LoginComponent extends React.Component {

    login=() => {
        this.props.dispatch( {
            type: 'login',
            value: {
                isLogined: true,
                userInfo: 'whn'
            }
        } );
    }
    render() {
        console.log( this.props );
        const location = this.props.location;
        const from = location.state.from?location.state.from:{pathname:"/"}
        
        console.log(from);
        const redirectToReferrer = this.props.isLogined;

        if (redirectToReferrer) {
            let res = <Redirect to={from}></Redirect>;
            //let res = <p>123</p>
            return res;
        }

        return (
            <div>
              <p>You must log in to view the page at {from.pathname}</p>
              <button onClick={this.login}>Log in</button>
            </div>
        );
    }
}
const Login = connect( state => {
    return {
        ...state.curUser
    };
} )( LoginComponent );

export default AuthExample;

