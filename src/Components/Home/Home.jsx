import '../Home/Home.css'
import { FaCreditCard, FaBox } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import products from '../../Products';
import infoPhoto from "../../Media/info-photo.jpg"


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
                <h2>Best Delivery</h2>
                <h3>Fast delivery to your home</h3>
                </div>
            <div className="icon-box">
                <CiHeart className='icon-box-el'/>
                <h2>Excellent Service</h2>
                <h3>Excellent service team</h3>
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

        <div className="discount-section">
            <div className="discount-content">
                <h2>Sale Now: Up to 40% Off every item</h2>
                <h4>Dont miss out on our sale! For a limited time all items are at 40% discount!</h4>
                <button>Shop Now</button>
            </div>
        </div>

        <div className="info-section">
            <div className="image-el">
            <img src={infoPhoto} alt="CandlePhoto" />
            </div>
            <div className="text-el">
            <h2>Lighting the Way to Calm,<br /> Naturally.</h2>
            <p>
  At Candly, we believe that the simple act of lighting a candle<br />
  can transform your space—and your state of mind.<br />
  In a world that moves fast and feels loud,<br />
  our mission is to slow things down.<br />
  Every candle we pour is designed with intention:<br />
  clean-burning, nature-inspired,<br />
  and hand-poured using sustainable ingredients<br />
  that are gentle on you and the planet.<br />
  <br />
  From soothing lavender fields<br />
  to cozy amber woods,<br />
  our fragrances are curated<br />
  to ground you in the present moment.<br />

</p>
                </div>
        </div>

        <div className="newsletter-section">
            <div className="newsletter-text">
            <h2>Newsletter Signup</h2>
            <p>If you want to stay connected with our work subscribe to our newsletter!</p>
            </div>
            <div className="newsletter-btn">
            <button>Get Updates</button>
            </div>
        </div>
        </>
    )
}

export default Home