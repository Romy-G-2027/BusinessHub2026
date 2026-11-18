import './Payment';
import {ChevronLeft,ChevronDown, X, Earth, BuildingComplex } from "lucide-react"; 

function Payment() {
    return (
        <div className="payment">
            <h2 id="PaymentTitle">Payment</h2>
            <ChevronLeft size={12} />
            <X size={12} />

            <div id="applePay">
                <img src= "public/Images/Apple.png" alt="applePay" width="50" height="30" />
            </div>

            <div id="googlePay">
                <img src= "public/Images/Google.png" alt="googlePay" width="65" height="65" />
            </div>

            <p id="PaymentInfo">Billing Information*</p>
            <p className="email">Email*</p>
            <input className="emailB" type="search"  placeholder="| TYPE TEXT HERE" />
            <p className="firstname">First Name*</p>
            <input className="firstNameB" type="search"  placeholder="| TYPE TEXT HERE" />
            <p className="lastName">Last Name</p>
            <input className="lastNameB" type="search"  placeholder="| TYPE TEXT HERE" />
            <br/>

            {/* The next lines are a dropdown menu, however when it runs the selction area is too small so it doesn't 
            actually show the country names as choices */}

            <label htmlFor="category">Country*</label>
            <select id="category" >
                <option value="Select an option" />
                <option value="Egypt" />
                <option value="Spain" />
                <option value="England" />
                <option value="United States" />
            </select>

            <br/>

            <label htmlFor="category">City*</label>
            <select id="category" >
                <option value="Select an option" />
                <option value="Union City" />
                <option value="Los Angles" />
                <option value="other city" />
                <option value="other city" />
            </select>

            <p className="PhoneNumber">Phone Number*</p>
            <input className="phoneNumberB" type="text"  placeholder="| TYPE PHONE NUMBER HERE" />
            <br/>

            <div className="PaymentCard">
                <p className="codeNumber">Code Number*</p>
                <input className="codeNunberB" type="text"  placeholder="0000 0000 0000 0000" />
                <br/>
                <p className="ExpirationDate">ExpirationDate*</p>
                <input className="ExpirationDate" type="date"  placeholder="0000 0000 0000 0000" />
                <p className="CVVcode">CVV Code*</p>
                <input className="cvvCodeinput" type="text"  placeholder="***" />
                <br/>
                <p className="BillingAdress">Billing Adress*</p>
                <input className="billingAdressInput" type="text"  placeholder="| TYPE BILLING ADRESS INPUT" />
            </div>
            
            <br/>
            <img src="public/Images/Visa.png" alt="Visa&MasterCard" width="170" height="50" />
        </div>
    );
}

export default Payment;