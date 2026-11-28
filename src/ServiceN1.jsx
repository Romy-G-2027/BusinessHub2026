import "./ServiceN1.css"
import {Clock, Crown, Check, ShieldAlert, SendHorizontal, Package, DollarSign, X, CalendarClock, ChevronLeft, ClipboardList, Square, ShoppingCartPlus } from "lucide-react";
import React, { useState } from "react";
import MakeOrder from "./MarketplacePOP";

function ServiceNumber1({ onAddToCart }) {
    /*const [showBox, setShowBox] = usestate(false);*/
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="Services">
            <p className="tinyMarketplace">Marketplace</p>
            <h2 className="ST">The <span id="itemGolden">Golden</span> Package</h2> 
            <span className="PriceN">$499.99</span>
            <img src="public/Images/Service1.png" alt="TheGoldenPackage" className="ServiceImage" />
            <p className="ServiceName">The <span id="GI">Golden</span> Package</p>
            <Clock className="time" size={24} />
            <span className="weeks">3 Weeks - 5 Weeks</span>
            <span className="rates"><span className="stars2">★★★★★ </span><span className="NumberOfRates2">(45)</span></span>
            <p className="Tag">Most Ordered</p>
            <Crown id="crown" size={24} />
            <a href="./Marketplace"><ChevronLeft className="back" size={24}/></a>

            <button onClick={() => setIsOpen(true)} className="addToCart">
               Add To Cart
            </button>
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
            <p className="Descriptioni">Custom Logo Design: A professionally crafted logo 
            tailored to your business identity, incorporating carefully selected typography, colors, and visual elements to create a 
            distinctive and memorable brand.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Business Card Design: A polished business card featuring your company name, logo, contact
             information, and brand styling in a clean layout suitable for professional networking.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Two Social Media Posts: Two custom-designed promotional graphics that reflect your 
            brand identity and are formatted to showcase your services, announcements, or business offerings online.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Complete Visual Branding: A coordinated design style that brings your logo, business 
            card, and social media graphics together through consistent colors, typography, and visual elements.</p>

            <hr className="DividerTw"/> {/* Line */}

            <ShieldAlert className="alert" size={24} />
            <span className="Notice">Important Notice</span>
            <p className="NoticeText">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <hr className="DividerTH" /> {/* Line */}
            <p className="DescriptionT">Feedback</p>

            <div className="allfeedback">
                <div className="Feedback">
                    
                    <div className="SmallBlackSquare"/>
                    <div className="SmallWhiteSquare"/>
                    <p className="quotationMarksP1">"</p>
                    <p className="feedbackText">The complete package gave my business
                    a polished and consistent identity, and every design felt carefully tailored to my brand.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback1.jpg" alt="LilyDominguez" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Lily Dominguez</p>
                    <p className="FeedbackStars">★★★★★</p>

                </div>

                <div className="Feedback">
                    
                    <div className="SmallBlackSquare"/>
                    <div className="SmallWhiteSquare"/>
                    <p className="quotationMarksP1">"</p>
                    <p className="feedbackText">I received a cohesive collection 
                    of designs that made my business look more professional across both print and social media.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback2.jpg" alt="MohammedKhalid" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Mohammed Khalid</p>
                    <p className="FeedbackStars">★★★★★</p>

                </div>

                <div className="Feedback">
                    
                    <div className="SmallBlackSquare"/>
                    <div className="SmallWhiteSquare"/>
                    <p className="quotationMarksP1">"</p>
                    <p className="feedbackText">The attention to
                    detail across every deliverable was impressive, and the final designs worked beautifully together.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback3.jpg" alt="Luna Sanchaz" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Luna Sanchaz</p>
                    <p className="FeedbackStars">★★★★★</p>
                    
                </div>
            </div>

            <input type="search" placeholder="| GIVE FEEDBACK HERE" className="typeF"/>
            <span className="urate">☆☆☆☆☆</span>
            <SendHorizontal className="send"size={24} />

            <MakeOrder
                isOpen={isOpen}
                closeMakeOrder={() => setIsOpen(false)}
                onAddToCart={onAddToCart}
            />

        </div>
    );
}

export default ServiceNumber1