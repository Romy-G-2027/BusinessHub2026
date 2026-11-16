import { useState } from "react";
import "./Popup.css";

function Popup() {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="popup_overlay">
            <div className="popup_container">

                <button
                    className="popup_close"
                    onClick={() => setIsOpen(false)}
                >
                    X
                </button>

                <h3 className= "howit_works">How It Works</h3>

                <div className="popup_steps">

                    <div className="popup_step">
                        <div className="popup_number">1</div>
                        <h2>Submit your information</h2>
                        
                        <p>
                            Fill out the form with your company
                            details and investment opportunity.
                        </p>
                    </div>

                    <div className="popup_step">
                        <div className="popup_number">2</div>
                        <h2> Our Team Reviews</h2>
                       
                        <p>
                            We check your information for
                            alignment with our platform standards.
                        </p>
                    </div>

                    <div className="popup_step">
                        <div className="popup_number">3</div>
                        <h2>Go Live on Our Website</h2>
                        <p>
                            In approximately 1–2 business days
                            your company will be reviewed.
                        
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Popup;