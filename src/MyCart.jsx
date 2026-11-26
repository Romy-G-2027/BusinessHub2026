import './MyCart.css';
import {X, Package,TvMinimalPlay, PencilRuler, ShoppingBag} from "lucide-react"; 

function MyCart() {
    return (
        <div id="MyCart">
            <h2 id="cartTitle">My Cart</h2>
            <div className="ItemBox">
                <Package size={24} className="icon"/>
                <span className="ItemTitle">The Golden Package</span>
                <span className="ItemPrice">$499.99</span>
                <X size={12} className="x"/>
            </div>
                <br/>
            <div className="ItemBox">
                <TvMinimalPlay size={24} className="icon" />
                <span className="ItemTitle">How to Manage My Company?</span>
                <span className="ItemPrice">$14.99</span>
                <X size={12} className="x" />
            </div>
                <br/>
            <div className="ItemBox">
                <PencilRuler size={24} className="icon" />
                <span className="ItemTitle">5 Video Advertisements</span>
                <span className="ItemPrice">$19.99</span>
                <X size={12} className="x"/>
            </div>
                <br/>
            <p className="IT">Items 3</p>
            <p className="COst"> $534.97</p>
            <p className="Coupon">Coupon Code</p>
                <input type="search" placeholder="eg:businessHub2026" />
                <button className="Redeem">Redeem</button>
            <div className="divider" />
            <button className="Checkout">Checkout <ShoppingBag size={24}/></button>
        </div> 
    );
}

export default MyCart;