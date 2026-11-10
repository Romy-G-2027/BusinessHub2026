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

                <h2>How It Works</h2>

                <div className="popup_steps">

                    <div className="popup_step">
                        <div className="popup_number">1</div>
                        <h3>Ownership Offered</h3>
                        <p>Submit your information</p>
                        <p>
                            Fill out the form with your company
                            details and investment opportunity.
                        </p>
                    </div>

                    <div className="popup_step">
                        <div className="popup_number">2</div>
                        <h3>Use of Funds</h3>
                        <p>Our Team Reviews</p>
                        <p>
                            We check your information for
                            alignment with our platform standards.
                        </p>
                    </div>

                    <div className="popup_step">
                        <div className="popup_number">3</div>
                        <h3>Go Live on Our Website</h3>
                        <p>
                            In approximately 1–2 business days
                            your company will be reviewed.
                        </p>
                        <p>
                            If accepted, your company will be
                            featured on our platform and visible
                            to verified investors and partners.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Popup;