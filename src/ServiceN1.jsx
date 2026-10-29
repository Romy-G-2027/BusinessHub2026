import "./ServiceN1.css"
import {Clock, Crown, Check, ShieldAlert, SendHorizontal, Package, DollarSign, X, CalendarClock, ClipboardList, Square, ShoppingCartPlus } from "lucide-react";

function ServiceNumber1() {
    /*const [showBox, setShowBox] = usestate(false);*/
    return (
        <div className="Services">
            <p className="tinyMarketplace">Marketplace</p>
            <h2>The <span id="itemGolden">Golden</span> Package</h2> 
            <span className="PriceN">$499.99</span>
            <img src="public/Images/Service1.png" alt="TheGoldenPackage" />
            <Clock size={24} />
            <span>3 Weeks - 5 Weeks</span>
            <span className="rates"><span className="stars2">★★★★★ </span><span className="NumberOfRates2">(45)</span></span>
            <p id="MostOrdered2">Most Ordered</p>
            <Crown size={24} />

            {/*<div>*/}
            <button /*onClick={() => setShowBox (!showBox)}*/>Add To Cart</button>
           {/* { showBox && (
                <div className="AddToCart">
                    <h2>Hello</h2>
                    <p>hi</p>
                    <button>Hey there</button>
                </div>
           )} */}
        {/*</div>*/}

            <hr/> {/* Line */}

            <h2 className="Description">Description</h2>
            <Check size={24} />
            <span id="DescriptionT">Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</span>
            <br /> {/* Break/Enter/Seperates it from the next bullet*/}
            <Check size={24} />
            <span id="DescriptionT">Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</span>
            <br /> {/* Break/Enter/Seperates it from the next bullet*/}
            <Check size={24} />
            <span id="DescriptionT">Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</span>
            <br /> {/* Break/Enter/Seperates it from the next bullet*/}
            <Check size={24} />
            <span id="DescriptionT">Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</span>

            <hr/> {/* Line */}

            <ShieldAlert size={24} />
            <span className="Notice">Important Notice</span>
            <p className="NoticeText">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <hr /> {/* Line */}

            <div className="Feedback">
                
                <div className="SmallBlackSquare"/>
                <div className="SmallWhiteSquare"/>
                <p className="quotationMarksP1">"</p>
                <snap className="feedbackText">Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt ut</snap>
                <p className="quotationMarksP2">"</p>
                <img src="public/Images/Feedback1.jpg" alt="LilyDominguez" width="200" height="200" />
                <p className="FeedbackWriter">Lily Dominguez</p>
                <p className="FeedbackStars">★★★★★</p>

            </div>

            <div className="Feedback">
                
                <div className="SmallBlackSquare"/>
                <div className="SmallWhiteSquare"/>
                <p className="quotationMarksP1">"</p>
                <snap className="feedbackText">Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt ut</snap>
                <p className="quotationMarksP2">"</p>
                <img src="public/Images/Feedback2.jpg" alt="MohammedKhalid" width="200" height="200"/>
                <p className="FeedbackWriter">Mohammed Khalid</p>
                <p className="FeedbackStars">★★★★★</p>

            </div>

            <div className="Feedback">
                
                <div className="SmallBlackSquare"/>
                <div className="SmallWhiteSquare"/>
                <p className="quotationMarksP1">"</p>
                <snap className="feedbackText">Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt ut</snap>
                <p className="quotationMarksP2">"</p>
                <img src="public/Images/Feedback3.jpg" alt="Luna Sanchaz" width="200" height="200"/>
                <p className="FeedbackWriter">Luna Sanchaz</p>
                <p className="FeedbackStars">★★★★★</p>
                
            </div>

            <input type="search" placeholder="| GIVE FEEDBACK HERE" />
            <span id="giveFeedbackStar">☆☆☆☆☆</span>
            <SendHorizontal size={24} />

            {/* Question: The following lines under div id="MakeOrder" are supposed to be the make order
            or add to cart an item option, and we want it to pop when they click on the button 
            ADD TO CART, but I am not sure if I have to make a whole new page for it or if there 
            are lines within the same page to show this, because each item would need one of these 
            that's different in contnet? */}

            <div id="MakeOrder">

                <div className="boxBackground"></div>
                <X size={12} />
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
    );
}

export default ServiceNumber1