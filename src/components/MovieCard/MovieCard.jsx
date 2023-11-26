import { Link } from "react-router-dom"

function MovieCard ({ movie }) {
    return (
        <div className="card">      
         <Link to={`/movies/${movie.title}`} className="movie-link">
            <div className="card-banner">
                <div style={{
                    "background": `url(${movie.posterPath}) no-repeat center center`, 
                    "WebkitBackgroundSize": "cover"
                    }} 
                    className="item-card">
                    <div className="title"><h3>{movie.title}</h3>
                    <h4>Released: {movie.releaseDate}</h4>
                    </div>
                </div>
            </div>
        </Link>
        </div>
    );
};



export default MovieCard;


