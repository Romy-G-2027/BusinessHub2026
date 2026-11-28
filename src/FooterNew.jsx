import './FooterNew.css';
import { SendHorizontal } from "lucide-react";

function FooterNew() {
 return (
   <footer className="footer-new">
     <div className="footer-new-content">


       <div className="footer-new-logo">
         <img src="public/images/Logo1.png" alt="Business Hub Logo" />
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
         <div className= "logos">
          <a href ="https://www.remove.bg/upload"><img src="public/images/instalogo.png" alt="Insta Logo" /></a>
          <a href ="https://www.remove.bg/upload"><img src="public/images/tiktok2.png" alt="Tiktok Logo" /></a>
          <a href ="https://www.remove.bg/upload"><img src="public/images/facebook4.png" alt="Facebook Logo" /></a>

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