import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Component = React.Component;
class About extends Component {
    render() {
        return (<div>about</div>);
    }
}

class InboxComponent extends Component {
    constructor(props){
        super(props);
        console.log(props)
    }
    render() {
        console.log("inbox rendered")
        if(this.props.curUser.isLogined)
            return (<Route path="/inbox" component={()=><h1>已登录</h1>}></Route>)
        else
            return (<Route path="/inbox" component={()=><h1>未登录</h1>}></Route>)
    }
}

const InboxContainer = connect(state=>state)(InboxComponent);

class Home extends Component {
    render() {
        return (<div>Home</div>);
    }
}


export default class App extends Component {

    render() {
        return (
                <div>
    				<h1>App</h1>
    				<ul>
    					<li>
    						<Link to='/about'>about</Link>
    					</li>
    					<li>
    						<Link to='/inbox'>inbox</Link>
    					</li>
     				</ul> 
     				<Route path="/about" render={()=>{
                        return(
                            <div>
                                <h2>about</h2>
                                <Route path="/about/1" render={()=> <h3>about/1</h3>}>
                                   
                                </Route>
                            </div>   
                        )
                    }}>
                       
                    </Route>

                    <InboxContainer></InboxContainer>
    			</div>
        );
    }
}
