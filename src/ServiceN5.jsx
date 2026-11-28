import "./ServiceN1.css"
import {Clock, Crown, Check, ShieldAlert, SendHorizontal, Package, DollarSign, X, CalendarClock, ClipboardList, Square, ShoppingCartPlus } from "lucide-react";

function ServiceNumber5() {
    /*const [showBox, setShowBox] = usestate(false);*/
    return (
        <div className="Services">
            <p className="tinyMarketplace">Marketplace</p>
            <h2 className="ST">10 Printable Flyers</h2> 
            <span className="PriceN">$16.99</span>
            <img src="public/Images/Service5.png" alt="LogoDesign" className="ServiceImage" />
            <p className="ServiceName">10 Printable Flyers</p>
            <Clock className="time" size={24} />
            <span className="weeks">5-10 Days</span>
            <span className="rates"><span className="stars2">★★★★★ </span><span className="NumberOfRates2">(25)</span></span>
            <p className="Tag">Advertisements</p>
            <p className="Tag">Printable Flyers</p>

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
            <p className="Descriptioni">Ten Custom Flyer Designs: Ten professionally designed flyers tailored to your business, event, 
            campaign, or special offer, each organized to communicate the intended message through a clear and visually appealing layout.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Promotional Layout and Composition: Carefully arranged headlines, supporting text, imagery, and graphic
             elements that establish a clear visual hierarchy and make important information easy to locate.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Branding and Visual Customization: Customized colors, typography, logos, and supporting graphics
             that align each flyer with your company's identity and the specific purpose of the promotion.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Print-Ready File Preparation: High-resolution flyer files prepared for printing
             with appropriate dimensions and layout formatting, subject to the printing specifications agreed upon for the project.</p>

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
                    <p className="feedbackText">The flyers presented our event information clearly and 
                    professionally, with layouts that made the important details easy to find.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback1.jpg" alt="NathanWilsonn" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Nathan Wilson</p>
                    <p className="FeedbackStars">★★★★★</p>

                </div>

                <div className="Feedback">
                    
                    <div className="SmallBlackSquare"/>
                    <div className="SmallWhiteSquare"/>
                    <p className="quotationMarksP1">"</p>
                    <p className="feedbackText">The designs were attractive, well organized, and aligned with our
                     branding, making them suitable for our promotional materials.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback2.jpg" alt="LaylaOsman" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Layla Osman</p>
                    <p className="FeedbackStars">★★★★★</p>

                </div>

                <div className="Feedback">
                    
                    <div className="SmallBlackSquare"/>
                    <div className="SmallWhiteSquare"/>
                    <p className="quotationMarksP1">"</p>
                    <p className="feedbackText">I appreciated the clear layouts and attention to detail, 
                    especially how the essential information stood out without overcrowding the design.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback3.jpg" alt="SophiaBennett" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Ryan Cooper</p>
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

export default ServiceNumber5;