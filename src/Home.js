import React from 'react';
import { Link } from 'react-router-dom';

const Component = React.Component;
export class About extends Component {
    render() {
        return (<div>about</div>);
    }
}

export class Inbox extends Component {
    render() {
        return (<div>Inbox</div>);
    }
}

export class Home extends Component {
    render() {
        return (<div>Home</div>);
    }
}


export class App extends Component {

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
 				{this.props.children}
			</div>
        );
    }
}
