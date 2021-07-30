import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Home from "./Home";
import Movie from "./Movie";
import Error from "./Error";

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/movie/:id" component={Movie} />
				<Route path="/404">
					<Error />
				</Route>
				<Redirect to="/404" />
			</Switch>
		</Router>
	);
}
