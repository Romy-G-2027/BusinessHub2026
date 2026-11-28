import "./ServiceN1.css"
import {Clock, Crown, Check, ShieldAlert, SendHorizontal, Package, DollarSign, X, CalendarClock, ChevronLeft, ClipboardList, Square, ShoppingCartPlus } from "lucide-react";
import React, { useState } from "react";
import MakeOrder from "./MarketplacePOP";

function ServiceNumber6({ onAddToCart }) {
    /*const [showBox, setShowBox] = usestate(false);*/
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="Services">
            <p className="tinyMarketplace">Marketplace</p>
            <h2 className="ST">5 Video Advertisements</h2> 
            <span className="PriceN">$19.99</span>
            <img src="public/Images/Service6.png" alt="VideoAdvertisements" className="ServiceImage" />
            <p className="ServiceName">5 Video Advertisements</p>
            <Clock className="time" size={24} />
            <span className="weeks">5-10 Days</span>
            <span className="rates"><span className="stars2">★★★★★ </span><span className="NumberOfRates2">(25)</span></span>
            <p className="Tag">Advertisements</p>
            <p className="Tag">Printable Flyers</p>

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
            <p className="Descriptioni">Five Custom Video Advertisements: Five professionally edited promotional videos created
             to present your products, services, or business offerings through carefully arranged visuals and a clear advertising message.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Branded Motion Graphics: Animated text, transitions, and graphic elements 
            that incorporate your brand identity and create a cohesive visual presentation throughout each video.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Promotional Storytelling and Editing: Structured video sequences that organize footage, 
            imagery, and messaging into engaging advertisements designed around your campaign objectives and target audience.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Digital Advertising Deliverables: Exported video files prepared for your selected digital platforms,
             with appropriate aspect ratios, resolution, and formatting based on the agreed distribution requirements.</p>

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
                    <p className="feedbackText">The videos presented our products in a polished, 
                    professional format, and the editing created a consistent look across the campaign.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback1.jpg" alt="GabrielScott" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Gabriel Scott</p>
                    <p className="FeedbackStars">★★★★★</p>

                </div>

                <div className="Feedback">
                    
                    <div className="SmallBlackSquare"/>
                    <div className="SmallWhiteSquare"/>
                    <p className="quotationMarksP1">"</p>
                    <p className="feedbackText">The motion graphics, transitions, and branded elements helped bring our
                     advertising concept together in a visually cohesive way.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback2.jpg" alt="LaylaOsman" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Nour El-Sayed</p>
                    <p className="FeedbackStars">★★★★★</p>

                </div>

                <div className="Feedback">
                    
                    <div className="SmallBlackSquare"/>
                    <div className="SmallWhiteSquare"/>
                    <p className="quotationMarksP1">"</p>
                    <p className="feedbackText">The finished videos were professionally presented and formatted
                     for our intended platforms, making them convenient to incorporate into our marketing materials.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback3.jpg" alt="SophiaBennett" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Lucas Bennett</p>
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

export default ServiceNumber6;