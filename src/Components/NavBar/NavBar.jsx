import logo from "../../Media/logo.png"
import "../NavBar/NavBar.css"
import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import {useState} from "react"




function NavBar() {

    const [isPanelOpen, setIsPanelOpen] = useState(false)

    return (
        <>
        <div className="navbar">
            <div className="logo-container">
                <img src={logo} alt="logo"/>
                <h2>Candley</h2>
            </div>
            <div className="links-container">
                <Link to="/" className="link-el">Home</Link>
                <Link to="/products" className="link-el">Products</Link>
                <Link to="/contact" className="link-el">Contact</Link>
                <Link to="/about" className="link-el">About</Link>
            </div>
            <div className="cart-container">
                <FaShoppingCart className="shop-icon"/>
                <MdAccountCircle className="shop-icon"/>
                <button onClick={() => setIsPanelOpen(!isPanelOpen)} className="bars-btn"><FaBars className="list-icon"/></button>
            </div>
        </div>
        <div className={`side-panel ${isPanelOpen ? 'open' : ''}`}>
            <Link to="/" className="link-el">Home</Link>
                <Link to="/products" className="link-el">Products</Link>
                <Link to="/contact" className="link-el">Contact</Link>
                <Link to="/about" className="link-el">About</Link>
        </div>
        </>
    )
}

export default NavBar