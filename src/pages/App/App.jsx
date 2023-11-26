import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar'
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import ActorsListPage from '../ActorsListPage/ActorsListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import { movies } from "../../data.jsx";
import '../../App.css'


function App() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  
  const movieData = movies;
  
  function handleChange(event) {
    let username = event.target.value
   // newUsername(event.target.value);
    console.log('change being handled')
    setUsername(username);
    }

function handleSubmit (event) {
  event.preventDefault();
  setUser(username)
} 

  return (
    <main className='App'>
      <>
      <NavBar user={user} />
      { user ? 
      <Routes>
        <Route path="/" element={<MoviesListPage movieData={movieData} />} />
        <Route 
          path="/movies/:movieName" 
          element={<MovieDetailPage movieData={movieData} />} />
        <Route path="/actors" element={<ActorsListPage movieData={movieData} />} />
      </Routes>
      :
      <LoginPage handleChange={handleChange} handleSubmit={handleSubmit} username={username} setUser={setUser} />
      }
      </>
    </main>

  )
}

export default App
