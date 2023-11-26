import { Link } from "react-router-dom";


function NavBar({ user }) {
    
    if (user==null) {
        return;
    }

    return (
  
        <nav>
            <Link to="/">Movies</Link>
            &nbsp; | &nbsp;
            <Link to="/actors">Actors</Link>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span>Welcome, {user}!</span>

        </nav>
    )
}

export default NavBar;