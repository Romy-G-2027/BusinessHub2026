import "./ServiceN1.css"
import {Clock, Crown, Check, ShieldAlert, SendHorizontal, Package, DollarSign, X, CalendarClock, ClipboardList, Square, ShoppingCartPlus } from "lucide-react";

function ServiceNumber7() {
    /*const [showBox, setShowBox] = usestate(false);*/
    return (
        <div className="Services">
            <p className="tinyMarketplace">Marketplace</p>
            <h2 className="ST">From Scratch to Pro Package</h2> 
            <span className="PriceN">$19.99</span>
            <img src="public/Images/Service7.png" alt="FromScratchtoProPackage" className="ServiceImage" />
            <p className="ServiceName">From Scratch to Pro Package</p>
            <Clock className="time" size={24} />
            <span className="weeks">1 Day</span>
            <span className="rates"><span className="stars2">★★★★★ </span><span className="NumberOfRates2">(25)</span></span>
            <p className="Tag">Courses</p>
            <p className="Tag">Educational</p>

            {/*<div>*/}
            <button className="addToCart" /*onClick={() => setShowBox (!showBox)}*/>Add To Cart</button>
           {/* { showBox && (
                <div className="AddToCart">
                    <h2>Hello</h2>
                    <p>hi</p>
                    <button>Hey there</button>
                </div>
           )} */}
        {/*</div>*/}

            <hr className="Divider"/> {/* Line */}

            <h2 className="Description">Description</h2>
            <Check className="check"size={24} />
            <p className="Descriptioni">Starting Your Business from Zero: Learn how to turn an initial idea into a
             structured business by identifying a profitable niche, researching the market, defining your target 
             audience, choosing a business model, and developing a clear business plan.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Building Your Brand and Online Presence: Understand how to establish a professional company
             identity through logo creation, brand positioning, website development, social media accounts, and the essential digital tools needed to introduce your business to the market.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Marketing, Sales, and Customer Acquisition: Explore practical marketing strategies, including social media marketing, 
            content creation, advertising campaigns, customer engagement, lead generation, and sales techniques to attract potential customers and build a loyal audience.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Business Growth and Professional Development: Learn how to organize business operations, manage daily responsibilities, 
            use productivity and management tools, evaluate performance, and develop strategies that help transform a small startup into a more established company.</p>

            <hr className="Divider"/> {/* Line */}

            <ShieldAlert className="alert" size={24} />
            <span className="Notice">Important Notice</span>
            <p className="NoticeText">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <hr className="Divider" /> {/* Line */}
            <p className="Description">Feedback</p>

            <div className="allfeedback">
                <div className="Feedback">
                    
                    <div className="SmallBlackSquare"/>
                    <div className="SmallWhiteSquare"/>
                    <p className="quotationMarksP1">"</p>
                    <p className="feedbackText">This course helped me understand how to approach starting a business step by step. 
                    From choosing an idea to building a brand and learning marketing strategies, everything was explained in a practical way.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback1.jpg" alt="DanielFoster" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Daniel Foster</p>
                    <p className="FeedbackStars">★★★★★</p>

                </div>

                <div className="Feedback">
                    
                    <div className="SmallBlackSquare"/>
                    <div className="SmallWhiteSquare"/>
                    <p className="quotationMarksP1">"</p>
                    <p className="feedbackText">I learned about tools and strategies I had never considered before. 
                    The sections about branding, social media, and finding customers were especially useful for understanding how a business actually operates.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback2.jpg" alt="MayaThompson" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Maya Thompson</p>
                    <p className="FeedbackStars">★★★★★</p>

                </div>

                <div className="Feedback">
                    
                    <div className="SmallBlackSquare"/>
                    <div className="SmallWhiteSquare"/>
                    <p className="quotationMarksP1">"</p>
                    <p className="feedbackText">A great starting point for anyone who 
                    wants to build a company. It covers the important stages of business development and explains 
                    how to move from an idea toward a professional operation.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback3.jpg" alt="AdamRichardson" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Adam Richardson</p>
                    <p className="FeedbackStars">★★★★☆</p>
                    
                </div>
            </div>

            <input type="search" placeholder="| GIVE FEEDBACK HERE" className="typeF"/>
            <span className="urate">☆☆☆☆☆</span>
            <SendHorizontal className="send"size={24} />

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

export default ServiceNumber7;