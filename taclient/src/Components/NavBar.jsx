
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import { useContext } from 'react';
import { AdminContext } from '../Context/AdminProvider';
import { UserContext } from '../Context/AuthUserProvider';

export default function NavBar() {

 const {isAdmin,getRidofAdmin} = useContext(AdminContext)
 const {isUserLogged,logOut} = useContext(UserContext)
  
  return (
    <div className="navbar">
      <div className="nav-logo">Travel App</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
       {
          isAdmin ? (
            <>
              <li><Link to="/home/admin/add">Add</Link></li>
              <li>
                <Link to="/home/login" onClick={getRidofAdmin}>Logout</Link>
              </li>
            </>
          ) : isUserLogged ? (
              <li>
                <Link to="/home/login" onClick={logOut}>Logout</Link>
              </li>
          ) : (
              <li><Link to="/home/login">Login</Link></li>
          )
        }

      </ul>
    </div>
  );
}
