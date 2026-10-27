import './Marketplace.css';
import {Search, SlidersHorizontal, ShoppingCartPlus} from "lucide-react"; 

function Marketplace () {

    return (

        <div className="marketplace" id="marketplace">

            <h2>Marketplace</h2>
            <input type="search" placeholder="Search" />
            <Search size={24} />
            <SlidersHorizontal size={24} />

            {/*From now down is going to be the service cards */}

            <div className="cards">

                <div className="blackSquare"/>
                <div className="whiteSquare"/>
                <img src="public/Images/Service1.png" alt= "GoldenPackageImage"  />
                <p className="CardTitle">The <span className="golden">Golden</span> Package </p>
                <p className="price">$499.99</p>
                <p className="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore Lorem ipsumdolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore </p>
            <p className="rating"><span className="stars">★★★★★ </span><span className="NumberOfRates">(45)</span></p>
                <p id="mostOrdered"> Most Ordered</p>
                <button>Learn More</button>
                <ShoppingCartPlus size={24} />

            </div>

            <div className="card">
                
                <div className="blackSquare"/>
                <div className="whiteSquare"/>
                <img src="public/Images/Service2.png" alt= "Logo Design"  />
                <p className="CardTitle">Logo Design</p>
                <p className="price">$7.99</p>
                <p className="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore Lorem ipsumdolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore </p>
            <p className="rating"><span className="stars">★★★★★ </span><span className="NumberOfRates">(25)</span></p>
                <p id="logodesign"> Logo Design </p>
                <button>Learn More</button>
                <ShoppingCartPlus size={24} />

            </div>

            <div className="card">
                
                <div className="blackSquare"/>
                <div className="whiteSquare"/>
                <img src="public/Images/Service3.png" alt= "BusinessCard&2ScoialMediaPosts"  />
                <p id="service3">Business Card <span>+ 2</span> Social Media Posts </p> {/* This has an id because of it's text space*/}
                <p className="price">$9.99</p>
                <p className="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore Lorem ipsumdolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore </p>
            <p className="rating"><span className="stars">★★★★★ </span><span className="NumberOfRates">(25)</span></p>
                <p id="BusinessCard"> Business Card </p>
                <p id="SocialMedia"> Social Media </p>
                <button>Learn More</button>
                <ShoppingCartPlus size={24} />

            </div>

            <div className="card">
                
                <div className="blackSquare"/>
                <div className="whiteSquare"/>
                <img src="public/Images/Service4.png" alt= "SocialMediaPosts"  />
                <p className="CardTitle">12 Social Media Posts</p>
                <p className="price">$14.99</p>
                <p className="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore Lorem ipsumdolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore </p>
            <p className="rating"><span className="stars">★★★★★ </span><span className="NumberOfRates">(25)</span></p>
                <p id="socialmedia"> Social Media </p>
                <p id="advertisements"> Advertisements </p>
                <button>Learn More</button>
                <ShoppingCartPlus size={24} />

            </div>
 
            <div className="card">
                
                <div className="blackSquare"/>
                <div className="whiteSquare"/>
                <img src="public/Images/Service5.png" alt= "flyers"  />
                <p className="CardTitle">10 Printable Flyers</p>
                <p className="price">$16.99</p>
                <p className="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore Lorem ipsumdolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore </p>
            <p className="rating"><span className="stars">★★★★★ </span><span className="NumberOfRates">(25)</span></p>
                <p id="flyersDesign"> Flyers Design </p>
                <p id="advertisements2"> Advertisements </p>
                <button>Learn More</button>
                <ShoppingCartPlus size={24} />

            </div>

            <div className="card">
                
                <div className="blackSquare"/>
                <div className="whiteSquare"/>
                <img src="public/Images/Service6.png" alt= "flyers"  />
                <p className="CardTitle">5 Video Advertisements</p>
                <p className="price">$19.99</p>
                <p className="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore Lorem ipsumdolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore </p>
            <p className="rating"><span className="stars">★★★★★ </span><span className="NumberOfRates">(25)</span></p>
                <p id="videoAdvertisements"> Video Advertisements </p>
                <button>Learn More</button>
                <ShoppingCartPlus size={24} />

            </div>

            <div className="card">
                
                <div className="blackSquare"/>
                <div className="whiteSquare"/>
                <img src="public/Images/Service7.png" alt= "FromScratchToProPackage"  />
                <p className="CardTitle">From <span id="scratch">Scratch</span> To <span id="pro">Pro</span> Package</p>
                <p className="price">$19.99</p>
                <p className="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore Lorem ipsumdolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore </p>
            <p className="rating"><span className="stars">★★★★★ </span><span className="NumberOfRates">(25)</span></p>
                <p id="courses"> Courses </p>
                <p id="educational"> Educational </p>
                <button>Learn More</button>
                <ShoppingCartPlus size={24} />

            </div>

            <div className="card">
                
                <div className="blackSquare"/>
                <div className="whiteSquare"/>
                <img src="public/Images/Service8.png" alt= "HowToManageMyCompany"  />
                <p className="CardTitle">How to Manage My Company</p>
                <p className="price">$14.99</p>
                <p className="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore Lorem ipsumdolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore </p>
            <p className="rating"><span className="stars">★★★★★ </span><span className="NumberOfRates">(25)</span></p>
                <p className="courses"> Courses </p>
                <p className="educational"> Educational </p>
                <button>Learn More</button>
                <ShoppingCartPlus size={24} />

            </div>

            <div className="card">
                
                <div className="blackSquare"/>
                <div className="whiteSquare"/>
                <img src="public/Images/Service9.png" alt= "Access&AcceptanceForInvestments"  />
                <p id="service9">Access & Acceptance For Investments</p> {/* This has an id because of it's text space*/}
                <p className="price">$19.99</p>
                <p className="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore Lorem ipsumdolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore </p>
                <p className="rating"><span className="stars">★★★★★ </span><span className="NumberOfRates">(25)</span></p>
                <p className="courses"> Courses </p>
                <p className="educational"> Educational </p>
                <button>Learn More</button>
                <ShoppingCartPlus size={24} />

            </div>
        </div>
    );
}

export default Marketplace;