/*import React, {useState} from "react";*/
import {Clock, Crown, Check, ShieldAlert, SendHorizontal, Package, DollarSign, X, CalendarClock, ClipboardList, Square, ShoppingCartPlus } from "lucide-react";
import "./MarketplacePOP.css";
import { useEffect, useState } from "react";

function MakeOrder({ isOpen, closeMakeOrder, onAddToCart }) {

    return (
        <div>

            {isOpen && (
                <div className="order-overlay">
                    <div className="order-content">

                        <button
                        className="order-close"
                        onClick={closeMakeOrder}
                        >
                            <X size={30}/>
                        </button>

                <h2 className="title">Make Order</h2>
                <Package size={24} className="iconI"/>
                <span className="orderinfo">The Golden package</span>
                <div className="lightLine"></div>
                <div className="LineT"></div>
                <DollarSign size={24} className="iconI"/>
                <span className="orderinfo">$499.99</span>
                <CalendarClock size={24} className="iconI"/>
                <span className="orderinfo">3-5 weeks</span>
                <div className="dividing line 1"></div>
                <ClipboardList size={24} className="details" />
                <span className="OrderItems">Order Items:</span>

                <Check size={24} className="checkD" />
                <p className="ItemsOffered">Professional Website with 2 integrations and 7 pages limit</p>
                
                <Check size={24} className="checkD"/>
                <p className="ItemsOffered">Professional Website with 2 integrations and 7 pages limit</p>
                
                <Check size={24} className="checkD"/>
                <p className="ItemsOffered">Professional Website with 2 integrations and 7 pages limit</p>
                
                <Check size={24} className="checkD"/>
                <p className="ItemsOffered">Professional Website with 2 integrations and 7 pages limit</p>
                
                <Check size={24} className="checkD"/>
                <p className="ItemsOffered">Professional Website with 2 integrations and 7 pages limit</p>
                
                <Check size={24} className="checkD" />
                <p className="ItemsOffered">Professional Website with 2 integrations and 7 pages limit</p>
                
                <div className="dividingLine2"></div>
                {/*<p className="Coupon">Coupon Code</p>
                <input type="search" placeholder="eg:businessHub2026" />
                <button className="Redeem">Redeem</button>
            <div className="dividingLine3"></div>*/}
                
                <label className="checkbox1" >
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <p className="agree"><span className="boldText">I agree </span> that Business Hub may have an agreed upon
                percentage of equity in my company if I purchased a website with more functionalities and technology </p>
                </label>
                <label className="checkbox1" >
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <p className="agree"><span className="boldText">I already </span> filled my company information form in 
                business hub earlier (We CAN NOT provide you with the service unless you fill it first ) </p>
                </label>
                <div className="lineF" />
                <button className="AddToCart" onClick={() => {
                    closeMakeOrder();
                    onAddToCart();
                }}>ADD TO CART <ShoppingCartPlus className="carti" size={24} /> </button>
                <p className="PriceButton">$499.99</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MakeOrder;