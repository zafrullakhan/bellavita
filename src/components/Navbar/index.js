import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <h1>hello this navbar</h1>
            <div>
                <Link to="/Signup">Signup</Link>
            </div>
        </>
    )
}
export default Navbar;