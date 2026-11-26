/*import React, {useState} from "react";*/
import {Clock, Crown, Check, ShieldAlert, SendHorizontal, Package, DollarSign, X, CalendarClock, ClipboardList, Square, ShoppingCartPlus } from "lucide-react";
import "./MarketplacePOP.css";

function MakeOrder ({isOpen, closeMakeOrder}) {

    return (
        <div>

            {isOpen && (
                <div className="order-overlay">
                    <div className="order-content">

                        <button
                        className="order-close"
                        onClick={closeMakeOrder}
                        >
                            X
                        </button>

                        <h2 className="make order">Make Order</h2>
                <Package size={24} />
                <span className="orderName">The Golden package</span>
                <br/>
                <div className="lightLine"></div>
                <DollarSign size={24} />
                <span className="orderPrice">$499.99</span>
                <br/>
                <CalendarClock size={24} />
                <span className="orderTime">3-5 weeks</span>
                <div className="dividing line 1"></div>
                <ClipboardList size={24} />
                <span className="Order Items">Order Items</span>
                <br/>
                <Check size={24} />
                <span className="ItemsOffered1">Professional Website with 2 integrations and 7 pages limit</span>
                <br/>
                <Check size={24} />
                <span className="ItemsOffered2">Professional Website with 2 integrations and 7 pages limit</span>
                <Check size={24} />
                <span className="ItemsOffered3">Professional Website with 2 integrations and 7 pages limit</span>
                <br/>
                <Check size={24} />
                <span className="ItemsOffered4">Professional Website with 2 integrations and 7 pages limit</span>
                <br/>
                <Check size={24} />
                <span className="ItemsOffered5">Professional Website with 2 integrations and 7 pages limit</span>
                <br/>
                <Check size={24} />
                <span className="ItemsOffered6">Professional Website with 2 integrations and 7 pages limit</span>
                <br/>
                <div className="dividingLine2"></div>
                <p className="Coupon">Coupon Code</p>
                <input type="search" placeholder="eg:businessHub2026" />
                <button className="Redeem">Redeem</button>
                <div className="dividingLine3"></div>
                
                <label>
                    <input type="checkbox" />
                    <span className="boldText">I agree </span> that Business Hub may have an agreed upon
                percentage of equity in my company if I purchased a website with more functionalities and technology
                </label>
                <br/>
                <label>
                    <input type="checkbox" />
                    <span className="boldText">I already </span> filled my company information form in 
                business hub earlier (We CAN NOT provide you with the service unless you fill it first )
                </label>
                {/*<Square size={24} />
                <span className="Agreement1"><span className="boldText">I agree </span> that Business Hub may have an agreed upon
                percentage of equity in my company if I purchased a website with more functionalities and technology</span>
                <Square size={24} />
                <span className="Agreement2"><span className="boldText">I already </span> filled my company information form in 
                business hub earlier (We CAN NOT provide you with the service unless you fill it first )</span>*/}
                <button id="AddToCart">ADD TO CART <ShoppingCartPlus size={24} /> </button>
                <button className="PriceButton">$499.99</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MakeOrder;

/*import "./MarketplacePOP.css";

function MakeOrder({ onClose }) {
    return (
        <div className="Order_overlay" onClick={onClose}>
            <div
                className="Order_container"
                onClick={(e) => e.stopPropagation()}
            >

            </div>
        </div>
            
    );
}

export default MakeOrder;*/