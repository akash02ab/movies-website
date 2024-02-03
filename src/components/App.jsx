import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Home from "./Home";
import Movie from "./Movie";
import Error from "./Error";

export default function App () {
	const [page, setPage] = useState(1);
	const [pages, setPages] = useState([1, 2, 3, 4, 5]);

	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home
						page={page}
						setPage={setPage}
						pages={pages}
						setPages={setPages}
					/>
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
