import { Link } from "react-router-dom";

export default function Card(prop) {
    let imageURL = "https://image.tmdb.org/t/p/w500/";
    
    return(
        <Link to={`/movie/${prop.info.id}`}>
            <div className="card">
                <img src={imageURL + prop.info.poster_path} alt="poster"/>
                <div className="info">
                    <h1>{prop.info.original_title}</h1>
                    <div className="about">
                        <div className="three-dot">
                            <p>{prop.info.overview}</p>
                        </div>
                        <div className="rating">
                            <p>{prop.info.vote_average}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}