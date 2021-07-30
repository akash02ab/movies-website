import { useState, useEffect } from "react";
import Loading from "./Loading";

export default function Movie(prop) {
	const id = prop.match.params.id;
	let [info, setInfo] = useState({});
    let [key, setKey] = useState('');
    let [isLoading, setLoading] = useState(true);
	const imageURL = "https://image.tmdb.org/t/p/original/";

	async function getMovieInfo() {
		const url = `https://api.themoviedb.org/3/movie/${id}?api_key=e5a35d50cfe6741326956a29bed1256a&language=en-US&append_to_response=videos`;

		const response = await fetch(url);
		const data = await response.json();
        
        let key = data['videos']['results'][0] ? data['videos']['results'][0].key : '';
        setKey(key);
        setInfo(data);
        setLoading(false);
	}

	useEffect(() => {
		getMovieInfo();
        // eslint-disable-next-line
	}, []);

    console.log(info.original_title);
	return (
        isLoading ? <Loading/> : 
            <div className="movie">
                <img
                    src={imageURL + info.backdrop_path}
                    alt="background-img"
                />
                <div className="movie-detail">
                    <div className="movie-poster">
                        <img src={imageURL + info.poster_path} alt="poster" />
                    </div>
                    <div className="movie-info">
                        <h1>{info.original_title}</h1>
                        <p>{info.tagline}</p>
                        <p>{info.overview}</p>
                        <div className="genres">
                            {info.genres.map(({id, name}) => 
                                <div className="genre" key={id}>{name}</div>
                            )}
                        </div>
                        <div className="trailer">
                            <a href={`https://www.youtube.com/watch?v=${key}`}>Watch Trailer</a>
                        </div>
                    </div>
                </div>
            </div>
	);
}