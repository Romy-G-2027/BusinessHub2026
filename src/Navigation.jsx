import './Navigation.css';
import {ShoppingCart, Bell} from "lucide-react"; 
// Line #2 is for all icons on page LIST ABOVE

function NavigationBar() {
    return (
        <header className= "Navigation">
           <img src="public/Images/Logo.png" alt="Logo" /> 
           <nav>
            <a href="#home">Home</a> 
            <a href="#marketplace">Marketplace</a>
            <a href="#investments">Investments</a>
            <a href="#forms">Forms</a>
            <a href="#contact">Contact Us</a>
           </nav>
           <ShoppingCart size={24} />
           <Bell size={24} />
           <button>Sign Up</button>
           <button>Log In</button>
        </header>   
    );
}

export default NavigationBar 