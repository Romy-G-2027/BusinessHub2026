import "./ServiceN1.css"
import {Clock, Crown, Check, ShieldAlert, SendHorizontal, Package, DollarSign, X, CalendarClock, ChevronLeft, ClipboardList, Square, ShoppingCartPlus } from "lucide-react";
import React, { useState } from "react";
import MakeOrder from "./MarketplacePOP";

function ServiceNumber3({ onAddToCart }) {
    /*const [showBox, setShowBox] = usestate(false);*/
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="Services">
            <p className="tinyMarketplace">Marketplace</p>
            <h2 className="ST">Business Card + 2 Social Media Posts</h2> 
            <span className="PriceN">$9.99</span>
            <img src="public/Images/Service3.png" alt="BusinessCard+2SocialMediaPosts" className="ServiceImage" />
            <p className="ServiceName">Business Card + 2 Social Media Posts</p>
            <Clock className="time" size={24} />
            <span className="weeks">3-7 Days</span>
            <span className="rates"><span className="stars2">★★★★★ </span><span className="NumberOfRates2">(25)</span></span>
            <p className="Tag">Business Card</p>
            <p className="Tag">Social Media</p>
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
            <p className="Descriptioni">Professional Business Card: A customized business card featuring
             your logo, company name, contact details, and relevant business information, arranged in a
             refined layout that reflects your brand identity.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Front and Back Layout Design: A coordinated two-sided card 
            design that organizes essential information clearly while using the available space
             effectively for branding and contact details.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Two Custom Social Media Graphics: Two professionally designed posts
             tailored to your brand, featuring suitable typography, imagery, promotional messaging,
              and platform-appropriate dimensions.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Consistent Brand Styling: Matching colors, fonts, graphic 
            elements, and visual treatments across all three deliverables to create a unified appearance
             for online communication and in-person networking.</p>

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
                    <p className="feedbackText">My business card and social media posts looked
                     coordinated and professional, giving my brand a much more consistent presentation.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback1.jpg" alt="OliviaCarter" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Olivia Carter</p>
                    <p className="FeedbackStars">★★★★★</p>

                </div>

                <div className="Feedback">
                    
                    <div className="SmallBlackSquare"/>
                    <div className="SmallWhiteSquare"/>
                    <p className="quotationMarksP1">"</p>
                    <p className="feedbackText">The layouts were clean and well organized, and the 
                    designs reflected the style I wanted for my company.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback2.jpg" alt="YusufIbrahim" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Yusuf Ibrahim</p>
                    <p className="FeedbackStars">★★★★★</p>

                </div>

                <div className="Feedback">
                    
                    <div className="SmallBlackSquare"/>
                    <div className="SmallWhiteSquare"/>
                    <p className="quotationMarksP1">"</p>
                    <p className="feedbackText">The designs made it easy to maintain a recognizable visual 
                    identity between my printed materials and social media.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback3.jpg" alt="SophiaBennett" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Sophia Bennett</p>
                    <p className="FeedbackStars">★★★★☆</p>
                    
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

export default ServiceNumber3;