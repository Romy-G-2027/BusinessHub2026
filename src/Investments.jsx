import './Investments.css';
import {Search} from "lucide-react";

function InvestmentsSearch () {
    return (
        <div className="InvestmentsGeneral">
        <h2 id="investmentTitle"> Investments </h2>
        <input type="search" placeholder="search"></input>
        <Search size={24}/>
        <div className="CompanyName">
        <div className="BlackSquare">
        <div className="WhiteSquare">
        <header className="CompanyName"> TerraYeild </header>
        <p className="CompanyDescription">"Sustainable Farming. A Healthier Future." TerraYield connects people with sustainable farms and eco-friendly projects, so you can invest in a greener tomorrow.</p>
        </div>
        <div className="BlackSquare">
        <div className="WhiteSquare">
        <header className="CompanyName"> NeuroNest </header>
        <p className="CompanyDescription"> "Better Brains. Brighter Futures." NeuroNest offers science-backed learning tools and brain wellness products to help you focus, feel balanced and reach your full potential.</p>
        <div className="BlackSquare">
        <div className="WhiteSquare">
        <header className="CompanyName"> ReThread </header>
        <p className="CompanyDescription">"Give Clothes a Second Story." ReThread is a circular fashion marketplace where you can buy, sell and invest in pre-loved clothing and recycle textiles. We make it easy to shop sustainably, reduce waste and give clothing a longer life. </p>
        <div className="BlackSquare">
        <div className="WhiteSquare">
        <header className="CompanyName"> AquaPure </header>
        <p className="CompanyDescription"> "Cleaner Water. Healthier tomorrows." AquaPure provides innovative water filtration solutions for homes and communities, making clean, safe drinking water accessible to everyone. </p>
        <div className="BlackSquare">
        <div className="WhiteSquare">
        <header className="CompanyName"> PawlPal </header>
        <p className="CompanyDescription">"Happier pets. Brighter days." PawPal is a pet care brand that offers high-quality, eco-friendly products and services to keep your furry friend healthy, happy, and well-loved.</p>
        <div className="BlackSquare">
        <div className="WhiteSquare">
        <header className="CompanyName">SolarTide</header>
        <p className="CompanyDescription">"Clean energy. A brighter future." SolarTide designs and installs affordable solar energy systems for homes and businesses, helping people save money while reducing their carbon footprint.</p>
        <div className="BlackSquare">
        <div className="WhiteSquare">
        <header className="CompanyName">EcoBite</header>
        <p className="CompanyDescription">"Good for you. Good for the planet." EcoBite offers plant-based snacks and meals from natural, sustainable ingredients. Delicious, nutritious, and better for the earth.</p>
        <div className="BlackSquare">
        <div className="WhiteSquare">
        <header className="CompanyName">SummitLearn</header>
        <p className="CompanyDescription">"Real Skills. Bigger dreams." SummitLearn is an online education platform that offers flexible courses in technology, business, and creative skills to help you reach your goals and build your future.</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
}
 
export default InvestmentsSearch
