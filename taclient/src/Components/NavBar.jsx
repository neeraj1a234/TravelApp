
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

export default function NavBar() {
  
  return (
    <div className="navbar">
      <div className="nav-logo">Travel App</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/home/admin/add">Add</Link></li>
        <li><Link to="/home/login">Login</Link></li>
      </ul>
    </div>
  );
}
