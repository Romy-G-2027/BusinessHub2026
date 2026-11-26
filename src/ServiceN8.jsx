import "./ServiceN1.css"
import {Clock, Crown, Check, ShieldAlert, SendHorizontal, Package, DollarSign, X, CalendarClock, ClipboardList, Square, ShoppingCartPlus } from "lucide-react";

function ServiceNumber8() {
    /*const [showBox, setShowBox] = usestate(false);*/
    return (
        <div className="Services">
            <p className="tinyMarketplace">Marketplace</p>
            <h2 className="ST">How to manage my company</h2> 
            <span className="PriceN">$14.99</span>
            <img src="public/Images/Service8.png" alt="FromScratchtoProPackage" className="ServiceImage" />
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
            <p className="Descriptioni">Business Planning and Organization: Practical guidance on goal setting,
             task prioritization, business planning, and organizing daily responsibilities to manage your company effectively.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Daily Operations Management: Strategies for creating workflows,
             coordinating responsibilities, organizing business processes, and managing routine company activities.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Business Decision-Making: Educational guidance on problem-solving,
             resource allocation, evaluating opportunities, and making informed business management decisions.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Performance and Growth Planning: Frameworks for reviewing business goals,
             monitoring performance, identifying challenges, and planning future business improvements.</p>

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
                    <p className="feedbackText">The material explained business management clearly,
                     making the topics easier to understand. I found the planning guidance especially useful.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback1.jpg" alt="JamesMitchell" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">James Mitchell</p>
                    <p className="FeedbackStars">★★★★★</p>

                </div>

                <div className="Feedback">
                    
                    <div className="SmallBlackSquare"/>
                    <div className="SmallWhiteSquare"/>
                    <p className="quotationMarksP1">"</p>
                    <p className="feedbackText">The topics were well organized and provided helpful 
                    insights into managing business operations. The material made concepts easier to follow.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback2.jpg" alt="SophiaWilliams" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Sophia Williams</p>
                    <p className="FeedbackStars">★★★★★</p>

                </div>

                <div className="Feedback">
                    
                    <div className="SmallBlackSquare"/>
                    <div className="SmallWhiteSquare"/>
                    <p className="quotationMarksP1">"</p>
                    <p className="feedbackText">The resources offered a useful approach to organizing business
                     activities and decisions. I appreciated the simple, professional presentation.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback3.jpg" alt="OmarBennett" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Omar Bennett</p>
                    <p className="FeedbackStars">★★★★☆</p>
                    
                </div>
            </div>

            <input type="search" placeholder="| GIVE FEEDBACK HERE" className="typeF"/>
            <span className="urate">☆☆☆☆☆</span>
            <SendHorizontal className="send"size={24} />
        </div>
    );
}

export default ServiceNumber8;