import { useState, useEffect } from "react";
import Card from "./Card";
import Loading from "./Loading";
import Pagination from "./Pagination";

export default function Home ({ page, setPage, pages, setPages }) {
	const [movieCard, setMovieCard] = useState([]);
	const [isLoading, setLoading] = useState(true);

	async function getData() {
		try {
			const url =
				`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`;

			const response = await fetch(url);
			const data = await response.json();
			const movieList = data.results;
			setMovieCard(movieList);
		} catch (err) {
			console.log(err);
		}
	}

	async function callGetData () {
		setLoading(true);
		await getData();
		setLoading(false);
	}

	useEffect(() => {
		callGetData();
		// eslint-disable-next-line
	}, [page]);

	return isLoading ? (
		<Loading />
	) : (
		<div className="container">
			<h1>The Movie Hub</h1>
			<div className="movies-wrapper">
				{movieCard && movieCard.map((movie, index) => (
					<Card info={movie} key={index} />
				))}
			</div>
			<Pagination
				currentPage={page}
				setCurrentPage={setPage}
				pages={pages}
				setPages={setPages}
			/>
		</div>
	);
}
