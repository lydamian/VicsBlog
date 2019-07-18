import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Pages/Landing';
import EmployeeLanding from './Employee/Landing';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Default from './Pages/Default';

// handles routes
function Router(){
	return ( 
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/employees" component={EmployeeLanding} />
				<Route path="" component={Default} />;
			</Switch>
		</BrowserRouter>
	)
}


ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();