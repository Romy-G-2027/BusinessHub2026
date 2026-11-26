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
        </div>
    );
}

export default ServiceNumber5;