import "./ServiceN1.css"
import {Clock, Crown, Check, ShieldAlert, SendHorizontal, Package, DollarSign, X, CalendarClock, ClipboardList, Square, ShoppingCartPlus } from "lucide-react";

function ServiceNumber2() {
    /*const [showBox, setShowBox] = usestate(false);*/
    return (
        <div className="Services">
            <p className="tinyMarketplace">Marketplace</p>
            <h2 className="ST">Logo Design</h2> 
            <span className="PriceN">$7.99</span>
            <img src="public/Images/Service2.png" alt="LogoDesign" className="ServiceImage" />
            <p className="ServiceName">Logo Design</p>
            <Clock className="time" size={24} />
            <span className="weeks">1 - 3 Days</span>
            <span className="rates"><span className="stars2">★★★★★ </span><span className="NumberOfRates2">(25)</span></span>
            <p className="Tag">Logo Design</p>

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
            <p className="Descriptioni">Custom Logo Creation: 
            A unique logo developed around your company's name, industry, audience,
             and personality, with a distinctive design that helps establish a recognizable brand identity.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Typography and Color Selection: Carefully chosen fonts and colors
             that communicate your brand's character while maintaining a professional appearance and visual consistency</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Icon and Symbol Development: Custom visual symbols 
            or graphic elements designed to represent your business concept and 
            complement the overall logo composition.</p>
            <Check className="check" size={24} />
            <p className="Descriptioni">Digital Logo Deliverables: High-quality logo files 
            prepared for common digital applications, with suitable versions for websites,
            social media profiles, and other branded materials.</p>

            <hr className="Divider"/> {/* Line */}

            <ShieldAlert className="alert" size={24} />
            <span className="Notice">Important Notice</span>
            <p className="NoticeText">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <hr className="DividerTw" /> {/* Line */}
            <hr className="DividerTH" />
            <p className="DescriptionT">Feedback</p>

            <div className="allfeedback">
                <div className="Feedback">
                    
                    <div className="SmallBlackSquare"/>
                    <div className="SmallWhiteSquare"/>
                    <p className="quotationMarksP1">"</p>
                    <p className="feedbackText">The logo captured the personality of my business
                     perfectly, with a clean design that looks professional and memorable.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback1.jpg" alt="DanielBrooks" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Daniel Brooks</p>
                    <p className="FeedbackStars">★★★★★</p>

                </div>

                <div className="Feedback">
                    
                    <div className="SmallBlackSquare"/>
                    <div className="SmallWhiteSquare"/>
                    <p className="quotationMarksP1">"</p>
                    <p className="feedbackText">I appreciated the thoughtful use of typography and color, 
                    which helped give my brand a distinctive and polished identity.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback2.jpg" alt="AmiraHassan" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Amira Hassan</p>
                    <p className="FeedbackStars">★★★★★</p>

                </div>

                <div className="Feedback">
                    
                    <div className="SmallBlackSquare"/>
                    <div className="SmallWhiteSquare"/>
                    <p className="quotationMarksP1">"</p>
                    <p className="feedbackText">The final logo was versatile, easy to recognize, and suitable
                     for the different platforms where I present my business.</p>
                    <p className="quotationMarksP2">"</p>
                    <img src="public/Images/Feedback3.jpg" alt="EthanMitchell" width="200" height="200" className="avatar"/>
                    <p className="FeedbackWriter">Ethan Mitchell</p>
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

            




            </div>
    );
}

export default ServiceNumber2;