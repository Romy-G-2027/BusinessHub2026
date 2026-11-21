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
                <button className="makeOrder">Make Order <ShoppingBag size={24}/></button>
                <span className="ItemsNumber">| 3 Items  | $534.97</span>
                <br/>

        </div> 
    );
}

export default MyCart;