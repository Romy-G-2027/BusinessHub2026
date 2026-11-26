import './FooterNew.css';


function FooterNew() {
 return (
   <footer className="footer-new">
     <div className="footer-new-content">


       <div className="footer-new-logo">
         <img src="public/Images/logo.png" alt="Business Hub Logo" />
       </div>


       <div className="footer-new-link">
         <a href="/">Home</a>
         <a href="/marketplace">Marketplace</a>
         <a href="/investments">Investments</a>
         <a href="/forms">Forms</a>
       </div>


       <div className="footer-new-links">
         <a href="/cart">Cart</a>
         <a href="/contact">Contact Us</a>
         <a href="/login">Sign Up/Log In</a>
       </div>


       <div className="footer-new-social">
         <p>Follow Us On:</p>
         <div className="footer-new-icons">
           {/* Add Instagram, TikTok, and Facebook icons here */}
         </div>
       </div>


     </div>


     <div className="footer-new-bottom">
       <p>2026 Business Hub. All rights reserved</p>
     </div>
   </footer>
 );
}


export default FooterNew;
