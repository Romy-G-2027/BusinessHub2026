import './InvestAgreement.css'

function InvestAgreement () {
    return(
        <main>
            <h1>Agreement Form </h1>
            <p>Please review all of our following terms before
            proceeding with an investment through Business Hub.</p>
       
            <div className="agreement_rectangle">
 
 
 
 
 
 
                <div className="rectangle_item">
                    <div className= "rectangle_number"> 1 </div>
                    <div className="rectangle_text">
                        <h3>Investment Terms</h3>
                        <p>The investor acknowledges that they are purchasing ownership in the selected
                        company under the specific terms of the investmeny. </p>
                    </div>
                </div>
 
 
 
 
 
 
                <div className="rectangle_item">
                    <div className= "rectangle_number"> 2 </div>
                    <div className="rectangle_text">
                        <h3>Business Hubs Fee</h3>
                        <p>Business Hubs applicable fees and how they are
                        calculated will be disclosed before the investor proceeds.</p>
                    </div>
                </div>
 
 
 
 
                <div className="rectangle_item">
                    <div className= "rectangle_number"> 3 </div>
                    <div className="rectangle_text">
                        <h3>Investment Risks </h3>
                        <p>Investments involve financial risk. Business Hub
                        does not guarantee profits, business success or a return on investment.</p>
                    </div>
                </div>
 
 
 
 
 
 
                <div className="rectangle_item">
                    <div className= "rectangle_number"> 4 </div>
                    <div className="rectangle_text">
                        <h3>Accuracy of Information </h3>
                        <p>Investors are responsible for reviewing the available company
                        information and making informed decisions. </p>
                    </div>
                </div>
 
 
 
 
                <div className="rectangle_item">
                    <div className= "rectangle_number"> 5</div>
                    <div className="rectangle_text">
                        <h3>Final Investment Agreement </h3>
                        <p>Each investment is subject to a separate agreement specifying
                        the investment amount, ownership percentage, payment terms, and applicable rights. </p>
                    </div>
                </div>
 
 
 
 
 
 
 
 
 
 
            </div>
 
 
            <div className="agreement_confirmation">
                <label className="agree_label">
                    <input type="checkbox" className= "checkbox"/>
                    <span>
                        I have read and agree to Business Hub's
                        investment terms and conditions.
                    </span>
                </label>
 
 
                <button className="continue_button">
                    Agree &amp; Continue
 
 
                </button>
            </div>
       
        </main>
 
 
    );
 
 
 }
 
 
 export default InvestAgreement;
 
 
 