import './MyCart.css';
import {X, Package,TvMinimalPlay, PencilRuler, ShoppingBag} from "lucide-react"; 

function MyCart() {
    return (
        <div className="myCart">
            <h2 id="cartTitle">My Cart</h2>
            <div className="ItemBox">
                <Package size={24} />
                <span className="ItemTitle">The Golden Package</span>
                <span className="ItemPrice">$499.99</span>
                <br/>
                <TvMinimalPlay size={24} />
                <span className="ItemTitle">How to Manage My Company?</span>
                <span className="ItemPrice">$14.99</span>
                <X size={12} />
                <br/>
                <PencilRuler size={24} />
                <span className="ItemTitle">5 Video Advertisements</span>
                <span className="ItemPrice">$19.99</span>
                <X size={12} />
                <br/>
                <button className="makeOrder">Make Order <ShoppingBag size={24}/></button>
                <span className="ItemsNumber"> Total: 3 items</span>
                <br/>
                <span className="TotalOrderCost"> Cost: $534.97 </span>
            </div>

        </div> 
    );
}

export default MyCart