import '../Home/Home.css'
import { FaCreditCard, FaBox } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import products from '../../Products';


function Home() {
    return (
        <>
        <header className='hero'>
            <div className="hero-content">
                <h2>Welcome to Candly</h2>
                <h1>Light a candle, calm your mind,< br /> and soften the world.</h1>
                <button>Shop Now</button>
            </div>
        </header>
        <div className="advantages-section">
            <div className="icon-box">
                <FaCreditCard className='icon-box-el'/>
                <h2>Secure Payment</h2>
                <h3>Easy and secure payment</h3>
            </div>
            <div className="icon-box">
                <TbTruckDelivery className='icon-box-el'/>
                <h2>Free Shipping</h2>
                <h3>For $50 or bigger order</h3>
                </div>
            <div className="icon-box">
                <FaBox className='icon-box-el'/>
                <h2>Delivered with Care</h2>
                <h3>Delivered to your home with care</h3>
                </div>
            <div className="icon-box">
                <CiHeart className='icon-box-el'/>
                <h2>Excellent Service</h2>
                <h3>Excellent service from our team</h3>
                </div>
        </div>

        <div className="trending-products-section">
            <h2>Trending Products</h2>
            <div className="products-row">
                {products.slice(0, 5).map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Home