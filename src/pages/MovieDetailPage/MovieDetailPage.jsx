import { useParams } from "react-router-dom"


function MovieDetailPage({ movieData }) {

let { movieName } = useParams();

let movie = movieData.find(movie => movie.title === movieName)
    return (
        <div className="flex">
        <div>
          <h1>{movie.title}</h1>
          <h4>Released: {new Date(movie.releaseDate).toLocaleDateString()}</h4>
          <h3>Cast Members:</h3>
          <ul>
            {
              movie.cast.map(actor => {
                return <li key={actor}>{actor}</li>
              })
            }
          </ul>
        </div>
        <img src={`${movie.poster_path}`} alt=""/>
      </div>
    );
}


export default MovieDetailPage