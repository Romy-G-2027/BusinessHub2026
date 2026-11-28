import "./ServiceN1.css"
import {Clock, Crown, Check, ShieldAlert, SendHorizontal, Package, DollarSign, X, CalendarClock, ChevronLeft, ClipboardList, Square, ShoppingCartPlus } from "lucide-react";
import React, { useState } from "react";
import MakeOrder from "./MarketplacePOP";

function ServiceNumber4({ onAddToCart }) {
    /*const [showBox, setShowBox] = usestate(false);*/
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="Services">
            <p className="tinyMarketplace">Marketplace</p>
            <h2 className="ST">12 Social Media Posts</h2> 
            <span className="PriceN">$14.99</span>
            <img src="public/Images/Service4.png" alt="LogoDesign" className="ServiceImage" />
            <p className="ServiceName">12 Social Media Posts</p>
            <Clock className="time" size={24} />
            <span className="weeks">5-10 Days</span>
            <span className="rates"><span className="stars2">★★★★★ </span><span className="NumberOfRates2">(25)</span></span>
            <p className="Tag">Advertisements</p>
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
            <p className="Descriptioni">Twelve Custom Post Designs: A collection of twelve professionally
             designed social media graphics tailored to your business, with layouts suitable for promotions,
              announcements, product highlights, and service showcases.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Branded Promotional Content: Visually engaging compositions that 
            incorporate your brand colors, logo, typography, and relevant imagery to communicate
             your business message clearly.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Varied Content Layouts: A selection of visual formats designed to 
            accommodate different types of posts, helping your social media content maintain variety while 
            following a consistent design direction.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Platform-Ready Graphics: Digital designs prepared in suitable 
            dimensions for your selected social media platforms, with clear text placement and
             carefully balanced visual elements.</p>

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
                    <p className="feedbackText">The twelve designs gave my page a consistent visual style while allowing each post to communicate 
                    something different about my business</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback1.jpg" alt="ChloeMartin" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Chloe Martin</p>
                    <p className="FeedbackStars">★★★★★</p>

                </div>

                <div className="Feedback">
                    
                    <div className="SmallBlackSquare"/>
                    <div className="SmallWhiteSquare"/>
                    <p className="quotationMarksP1">"</p>
                    <p className="feedbackText">The graphics were polished, well structured, and ready to use, making it 
                    easier to organize my upcoming social media content.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback2.jpg" alt="AdamFarouk" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Adam Farouk</p>
                    <p className="FeedbackStars">★★★★★</p>

                </div>

                <div className="Feedback">
                    
                    <div className="SmallBlackSquare"/>
                    <div className="SmallWhiteSquare"/>
                    <p className="quotationMarksP1">"</p>
                    <p className="feedbackText">I liked how the designs balanced creativity with readability while keeping my 
                    business branding consistent throughout the collection.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback3.jpg" alt="SophiaBennett" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Isabella Reed</p>
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

export default ServiceNumber4;