import "./ServiceN1.css"
import {Clock, Crown, Check, ShieldAlert, SendHorizontal, Package, DollarSign, X, CalendarClock, ChevronLeft, ClipboardList, Square, ShoppingCartPlus } from "lucide-react";
import React, { useState } from "react";
import MakeOrder from "./MarketplacePOP";

function ServiceNumber7({ onAddToCart }) {
    /*const [showBox, setShowBox] = usestate(false);*/
    const [isOpen, setIsOpen] = useState(false);
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
            <p className="Descriptioni">Complete Brand Identity: A custom logo, brand colors, typography, and visual elements
             designed to establish a recognizable and professional business identity.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Professional Business Stationery: Customized business card and stationery 
            designs that reflect your brand and maintain consistency across business communications.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Branded Digital Content: Custom social media graphics and promotional visuals designed 
            to showcase your services and maintain a consistent online presence.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Integrated Marketing Materials: A coordinated collection of branding and 
            promotional designs that create a polished visual presentation across print and digital platforms.</p>

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
                    <p className="feedbackText">The package brought our branding together beautifully and 
                    gave our business a professional appearance. Everything felt consistent and carefully designed.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback1.jpg" alt="DanielFoster" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Daniel Foster</p>
                    <p className="FeedbackStars">★★★★★</p>

                </div>

                <div className="Feedback">
                    
                    <div className="SmallBlackSquare"/>
                    <div className="SmallWhiteSquare"/>
                    <p className="quotationMarksP1">"</p>
                    <p className="feedbackText">I loved how every design worked together to create a cohesive brand
                     identity. The materials gave our company a polished presentation.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback2.jpg" alt="MayaThompson" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Maya Thompson</p>
                    <p className="FeedbackStars">★★★★★</p>

                </div>

                <div className="Feedback">
                    
                    <div className="SmallBlackSquare"/>
                    <div className="SmallWhiteSquare"/>
                    <p className="quotationMarksP1">"</p>
                    <p className="feedbackText">The designs were clean, professional, and consistent across all materials. 
                    I appreciated the attention to detail and overall quality.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback3.jpg" alt="AdamRichardson" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Adam Richardson</p>
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

export default ServiceNumber7;