import MovieCard from '../../components/MovieCard/MovieCard.jsx';
import './MoviesListPage.css'


function MoviesListPage({ movieData }) {
    

    const movieCards = movieData.map((m, index) => (
            <MovieCard movie={m} key={index} />)
        );

    return (
<div className="container">
        {movieCards}
        </div>
    );
};

export default MoviesListPage;
