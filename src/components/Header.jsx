import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>This is header.</h2>
            <Link to={'/'}>Home</Link>
            <Link to={'/googlelogin'}>Google Login</Link>
            
        </div>
    );
};

export default Header;