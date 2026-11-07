import './Marketplace.css';
import {Search, SlidersHorizontal, ShoppingCartPlus} from "lucide-react"; 

function Marketplace () {

    return (

        <div id="Marketplace">

            <p className="MarketplaceTitle">Marketplace</p>
            <input type="search" placeholder="Search" className="SearchB"/>
            <Search size={24} className="icons"/>
            <SlidersHorizontal size={24} className="icons"/>

            {/*From now down is going to be the service cards */}
        <div className="allCards">
            <div className="card">

                <div className="blackSquare"/>
                <div className="whiteSquare"/>
                <img src="public/Images/Service1.png" alt= "GoldenPackageImage"  className="CardImage"/>
                <p className="CardTitle">The <span className="golden">Golden</span> Package </p>
                <p className="price">$499.99</p>
                <p className="description"> Elevate your brand with a complete design package 
                featuring premium visuals and professional branding. Perfect for businesses 
                looking to make a lasting first impression. </p>
                <p className="rating"><span className="stars">★★★★★ </span><span className="NumberOfRates">(45)</span></p>
                <p className="label"> Most Ordered</p>
                <a href="#GoldenPackage" className="lButton">Learn More</a>
                <ShoppingCartPlus size={24} className="CartP" />

            </div>

            <div className="card">
                
                <div className="blackSquare"/>
                <div className="whiteSquare"/>
                <img src="public/Images/Service2.png" alt= "Logo Design"  className="CardImage"/>
                <p className="CardTitle">Logo Design</p>
                <p className="price">$7.99</p>
                <p className="description"> Make your brand unforgettable with a unique, professionally 
                designed logo that reflects your business identity. We create clean, timeless designs 
                that help your brand stand out.</p>
                <p className="rating"><span className="stars">★★★★★ </span><span className="NumberOfRates">(25)</span></p>
                <p className="label"> Logo Design</p>
                <a href="#LogoDesign" className="lButton">Learn More</a>
                <ShoppingCartPlus size={24} className="CartP" />

            </div>

            <div className="card">
                
                <div className="blackSquare"/>
                <div className="whiteSquare"/>
                <img src="public/Images/Service3.png" alt= "BusinessCard&2ScoialMediaPosts" className="CardImage" />
                <p id="service3">Business Card <span id="PT">+2</span> Social Media Posts </p> {/* This has an id because of it's text space*/}
                <p className="price">$9.99</p>
                <p className="description"> Make a strong first impression with a professionally designed business card 
                and two eye-catching social media posts. Perfect for building brand recognition both online and offline. </p>
                <p className="rating"><span className="stars">★★★★★ </span><span className="NumberOfRates">(25)</span></p>
                <p className="label"> Business Card</p>
                <p className="labelT"> Social media</p>
                <a href="#cardSocial" className="lButton">Learn More</a>
                <ShoppingCartPlus size={24} className="CartP"/>

            </div>

            <div className="card">
                
                <div className="blackSquare"/>
                <div className="whiteSquare"/>
                <img src="public/Images/Service4.png" alt= "SocialMediaPosts" className="CardImage" />
                <p className="CardTitle">12 Social Media Posts</p>
                <p className="price">$14.99</p>
                <p className="description"> Keep your audience engaged with 12 professionally designed 
                social media posts tailored to your brand. Build a consistent online presence with 
                creative visuals that capture attention. </p>
                <p className="rating"><span className="stars">★★★★★ </span><span className="NumberOfRates">(25)</span></p>
                <p className="label"> Social media</p>
                <p className="labelT"> Advertisements</p>
                <a href="#SocialMedia" className="lButton">Learn More</a>
                <ShoppingCartPlus size={24} className="CartP"/>

            </div>
 
            <div className="card">
                
                <div className="blackSquare"/>
                <div className="whiteSquare"/>
                <img src="public/Images/Service5.png" alt= "flyers"  className="CardImage"/>
                <p className="CardTitle">10 Printable Flyers</p>
                <p className="price">$16.99</p>
                <p className="description"> Promote your business, event, or special offer with 10 
                professionally designed, print-ready flyers. Our designs help you communicate your
                 message clearly and attract more attention. </p>
                <p className="rating"><span className="stars">★★★★★ </span><span className="NumberOfRates">(25)</span></p>
                <p className="label"> Flyers Design</p>
                <p className="labelT"> Advertisements</p>
                <a href="#FlyersP" className="lButton">Learn More</a>
                <ShoppingCartPlus size={24} className="CartP" />

            </div>

            <div className="card">
                
                <div className="blackSquare"/>
                <div className="whiteSquare"/>
                <img src="public/Images/Service6.png" alt= "flyers" className="CardImage" />
                <p className="CardTitle">5 Video Advertisements</p>
                <p className="price">$19.99</p>
                <p className="description"> Bring your brand to life with five engaging video 
                advertisements designed to capture attention and showcase your products or services.
                 Create memorable content that connects with your audience.</p>
                <p className="rating"><span className="stars">★★★★★ </span><span className="NumberOfRates">(25)</span></p>
                <p id="vI"> Video Advertisements</p>
                <a href="#Vadvertisement" className="lButton">Learn More</a>
                <ShoppingCartPlus size={24} className="CartP" />

            </div>

            <div className="card">
                
                <div className="blackSquare"/>
                <div className="whiteSquare"/>
                <img src="public/Images/Service7.png" alt= "FromScratchToProPackage" className="CardImage" />
                <p className="CardTitle">From <span id="scratch">Scratch</span> To <span id="pro">Pro</span> Package</p>
                <p className="price">$19.99</p>
                <p className="description"> Take your brand to the next level with a complete design solution 
                built to give your business a polished, professional look. From branding to digital content, 
                everything is designed to help you stand out. </p>
                <p className="rating"><span className="stars">★★★★★ </span><span className="NumberOfRates">(25)</span></p>
                <p className="label"> Courses </p>
                <p className="labelT"> Educational </p>
                <a href="#CourseOne" className="lButton">Learn More</a>
                <ShoppingCartPlus size={24} className="CartP" />

            </div>

            <div className="card">
                
                <div className="blackSquare"/>
                <div className="whiteSquare"/>
                <img src="public/Images/Service8.png" alt= "HowToManageMyCompany" className="CardImage" />
                <p className="CardTitle">How to Manage My Company</p>
                <p className="price">$14.99</p>
                <p className="description"> Build a stronger business with practical guidance on organization, 
                planning, and daily management. Learn how to streamline your operations, make smarter decisions, 
                and grow with confidence. </p>
                <p className="rating"><span className="stars">★★★★★ </span><span className="NumberOfRates">(25)</span></p>
                <p className="label"> Courses </p>
                <p className="labelT"> Educational </p>
                <a href="#CourseTwo" className="lButton">Learn More</a>
                <ShoppingCartPlus size={24} className="CartP" />

            </div>

            <div className="card">
                
                <div className="blackSquare"/>
                <div className="whiteSquare"/>
                <img src="public/Images/Service9.png" alt= "Access&AcceptanceForInvestments" className="CardImage" />
                <p id="service9">Access & Acceptance For Investments</p> {/* This has an id because of it's text space*/}
                <p className="price">$19.99</p>
                <p className="description"> Present your business professionally with polished investment-focused materials 
                designed to communicate your vision and opportunities. Make a strong impression on potential investors with
                 clear, compelling branding and presentation. </p>
                <p className="rating"><span className="stars">★★★★★ </span><span className="NumberOfRates">(25)</span></p>
                <p className="label"> Courses </p>
                <p className="labelT"> Educational </p>
                <a href="#CourseThree" className="lButton">Learn More</a>
                <ShoppingCartPlus size={24} className="CartP" />
        </div>
            </div>
        </div>
    );
}

export default Marketplace;