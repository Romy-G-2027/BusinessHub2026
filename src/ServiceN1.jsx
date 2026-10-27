import "./ServiceN1.css"
import {Clock, Crown, Check, ShieldAlert, SendHorizontal} from "lucide-react";

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

        </div>
    );
}

export default ServiceNumber1