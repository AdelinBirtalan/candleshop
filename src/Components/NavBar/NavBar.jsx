import logo from "../../Media/logo.png"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div className="navbar">
            <div className="logo-container">
                <img src={logo} alt="logo"/>
                <h2>Candley</h2>
            </div>
            <div className="links-container">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </div>
            <div className="cart-container">

            </div>
        </div>
    )
}

export default NavBar


