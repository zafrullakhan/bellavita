import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
    return (
        <>
        <div className="navbar">
            <h1>BELLAVITA</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/Signup">Signup</Link>
                <Link to="/Login">Login</Link>
            </div>
        </div>
        </>
    )
}
export default Navbar;