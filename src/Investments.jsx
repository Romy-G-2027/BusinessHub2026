import './Investments.css';
import {Search} from "lucide-react";

function InvestmentsSearch () {
    return (
        <div id="InvestmentsGeneral">

            <h2 id="investmentTitle"> Investments </h2>
            <input type="search" placeholder="search"></input>
            <Search size={24}/>


            {/* From now on is the cards :*/}

            <div className="iCard">
                <div className="BlackSquare" />
                <div className="WhiteSquare" />
                <h2 className="TerraYeild">TerraYeild</h2>
                <p className="CompanyDescription"> "Sustainable Farming. A Healthier Future." TerraYeild connects people with sustainable farms and eco-friendly projects, so you can invest in a greener tomorrow. </p>
                <img></img>
                <button className="LearnMore"> Learn More </button>
            </div>
           
            <div className="iCard">
                <div className="BlackSquare" />
                <div className="WhiteSquare" />
                <h2 className="NeuroNest"> NeuroNest </h2>
                <p className="CompanyDescription"> "Better Brains. Brighter Futures."NeuroNest offers science-backed learning tools and brain wellness products to help you focus, feel balaned and reach your full potential. </p>
                <img></img>
                <button className="LearnMore"> Learn More </button>
            </div>

            <div className="iCard">
                <div className="BlackSquare" />
                <div className="WhiteSquare" />
                <h2 className="ReThread"> ReThread </h2>
                <p className="CompanyDescription"> "Give Clothes a Second Story." ReThread is a circular fashion marketplace where you can buy, sell and invest in pre-loved clothing and recycled textiles. Less waste. More style. A bigger tomorrow. </p>
                <img></img>
                <button className="LearnMore"> Learn More </button>
            </div>

            <div className="iCard">
                <div className="BlackSquare" />
                <div className="WhiteSquare" />
                <h2 className="MindfulMe"> MindfulMe </h2>
                <p className="CompanyDescription"> "A healthier mind, a brighter you." MindfulMe is a mental wellness platform that offers guided meditations, journaling tools, and self-care resources to help you feel more balanced and present. </p>
                <img></img>
                <button className="LearnMore"> Learn More </button>
            </div>

            <div className="iCard">
                <div className="BlackSquare" />
                <div className="WhiteSquare" />
                <h2 className="AquaPure"> AquaPure </h2>
                <p className="CompanyDescription"> "Cleaner water. Healthier tomorrows." AquaPure provides innovative water filtration solutions for homes and communities, mkaing clean, safe drinking water accessible to everyone. </p>
                <img></img>
                <button className="LearnMore"> Learn More </button>
            </div>

            <div className="iCard">
                <div className="BlackSquare" />
                <div className="WhiteSquare" />
                <h2 className="PawPal"> PawPal </h2>
                <p className="CompanyDescription"> "Happier pets. Brighter days." PawlPal is a pet care brand that offers high-quality, eco-friendly products and services to keep your furry friends healthy, happy, and well-loved. </p>
                <img></img>
                <button className="LearnMore"> Learn More </button>
            </div>

            <div className="iCard">
                <div className="BlackSquare" />
                <div className="WhiteSquare" />
                <h2 className="SolarTide"> SolarTide </h2>
                <p className="CompanyDescription"> "Clean energy. A brighter future." SolarTide designs and installs affordable solar energy systems for homes and businesses, helping people save money while reducimg their carbon footprints </p>
                <img></img>
                <button className="LearnMore"> Learn More </button>
            </div>

            <div className="iCard">
                <div className="BlackSquare" />
                <div className="WhiteSquare" />
                <h2 className="EcoBite"> EcoBite </h2>
                <p className="CompanyDescription"> "Good for you. Good for the Planet." EcoBite offers plant-based snacks and meals made from natural, sustainable ingredients. Delicious, nutritious, and better for the earth. </p>
                <img></img>
                <button className="LearnMore"> Learn More </button>
            </div>

            <div className="iCard">
                <div className="BlackSquare" />
                <div className="WhiteSquare" />
                <h2 className="SummitLearn"> SummitLearn </h2>
                <p className="CompanyDescription"> "Real skills. Bigger dreams." SummitLearn is an online education platform that offers flexible courses in technology, business, and creative skills to help you reach your goals and build your future. </p>
                <img></img>
                <button className="LearnMore"> Learn More </button>
            </div>
        </div>
    );
}
 
export default InvestmentsSearch