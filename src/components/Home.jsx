import { useState, useEffect } from "react";
import Card from "./Card";
import Loading from "./Loading";

export default function Home() {
	let [movieCard, setMovieCard] = useState([]);
	let [isLoading, setLoading] = useState(true);

	async function getData() {
		try {
			let url =
				"https://api.themoviedb.org/3/discover/movie?api_key=e5a35d50cfe6741326956a29bed1256a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

			let response = await fetch(url);
			let data = await response.json();
            let movieList = data.results;
            setMovieCard(movieList);
			setLoading(false);
		} 
        catch (err) {
			console.log(err);
		}
	}

    useEffect(() => {
        getData();
		// eslint-disable-next-line
    }, []);

	return isLoading ? <Loading /> : <div className="container">{ movieCard.map((movie, index) => <Card info={movie} key={index}/>) }</div>;
}
