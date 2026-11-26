import "./ServiceN1.css"
import {Clock, Crown, Check, ShieldAlert, SendHorizontal, Package, DollarSign, X, CalendarClock, ClipboardList, Square, ShoppingCartPlus } from "lucide-react";

function ServiceNumber9() {
    /*const [showBox, setShowBox] = usestate(false);*/
    return (
        <div className="Services">
            <p className="tinyMarketplace">Marketplace</p>
            <h2 className="ST">Access & acceptance for investments </h2> 
            <span className="PriceN">$14.99</span>
            <img src="public/Images/Service9.png" alt="access&acceptanceforinvestments " className="ServiceImage" />
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
            <p className="Descriptioni">Investor Pitch Deck Design: A professional presentation 
            outlining your business concept, value proposition, target market, business model, and growth strategy.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Company Profile Presentation: A branded company overview highlighting 
            your mission, services, market positioning, business objectives, and essential company information.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Investment Proposal Materials: Professionally formatted documents
             presenting the funding opportunity, intended use of funds, business milestones, and proposed investment terms.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Financial Visualizations: Clear charts, graphs, and supporting graphics that
             present financial figures, market information, and business projections in an organized format.</p>

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
                    <p className="feedbackText">The presentation organized our business opportunity into a clear,
                     professional format. The layouts helped present our ideas effectively.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback1.jpg" alt="AlexanderBrooks" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Alexander Brooks</p>
                    <p className="FeedbackStars">★★★★★</p>

                </div>

                <div className="Feedback">
                    
                    <div className="SmallBlackSquare"/>
                    <div className="SmallWhiteSquare"/>
                    <p className="quotationMarksP1">"</p>
                    <p className="feedbackText">The pitch deck combined structured information with professional visuals.
                     I appreciated how clearly the important details were organized.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback2.jpg" alt="IsabellaCarter" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Isabella Carter</p>
                    <p className="FeedbackStars">★★★★★</p>

                </div>

                <div className="Feedback">
                    
                    <div className="SmallBlackSquare"/>
                    <div className="SmallWhiteSquare"/>
                    <p className="quotationMarksP1">"</p>
                    <p className="feedbackText">The charts and layouts made our business 
                    information easier to follow. The finished materials looked polished and professional.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback3.jpg" alt="RyanAnderson" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Ryan Anderson</p>
                    <p className="FeedbackStars">★★★★☆</p>
                    
                </div>
            </div>

            <input type="search" placeholder="| GIVE FEEDBACK HERE" className="typeF"/>
            <span className="urate">☆☆☆☆☆</span>
            <SendHorizontal className="send"size={24} />

        </div>
    );
}

export default ServiceNumber9;