
import './Navigation.css';

import { ShoppingCart, Bell } from 'lucide-react';

import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <header className="Navigation">

      <Link to="/">
        <img
          src="/Images/Logo.png"
          alt="Logo"
          id="Logo"
        />
      </Link>

      <nav className="LinksNav">

        <Link to="/" id="Home">Home</Link>

        <Link to="/Marketplace" className="Marketplace">
          Marketplace
        </Link>

        <Link to="/Investments" className="Investments">
          Investments
        </Link>

        <Link to="/Forms" className="Forms">
          Forms
        </Link>

        <Link to="/Contact" className="ContactUs">
          Contact Us
        </Link>

      </nav>

      <div className="NavR">

        <Link to="/MyCart" className="nI">
          <ShoppingCart size={24} />
        </Link>

        <Link to="/Notifications" className="nI">
          <Bell size={24} />
        </Link>

        <Link to="/Signin">
          <button>Sign Up</button>
        </Link>

        <Link to="/Login">
          <button>Log In</button>
        </Link>

      </div>

    </header>
  );
}

export default NavigationBar;



/*import './Navigation.css';
import {ShoppingCart, Bell} from "lucide-react"; 
// Line #2 is for all icons on page LIST ABOVE

function NavigationBar() {
    return (
        <header className= "Navigation">
           <img src="public/Images/Logo.png" alt="Logo" id="Logo"/> 
           <nav className="LinksNav">
            <a href="#home" id="Home">Home</a> 
            <a href="#Marketplace" className="Marketplace">Marketplace</a>
            <a href="#investments" className="Investments">Investments</a>
            <a href="#forms" className="Forms">Forms</a>
            <a href="#contact" className="ContactUs">Contact Us</a>
           </nav>
           <div className="NavR">
           <a href="#MyCart" className="nI"><ShoppingCart size={24} /> </a>
           <a href="#Notifications" className="nI"> <Bell size={24} /> </a>
           <button>Sign Up</button>
           <button>Log In</button>
           </div>
        </header>   
    );
}

export default NavigationBar */

/*import './Navigation.css';
import {ShoppingCart, Bell} from "lucide-react"; 
// Line #2 is for all icons on page LIST ABOVE

function NavigationBar() {
    return (
        <header className= "Navigation">
        <img src="public/Images/Logo.png" alt="Logo" id="Logo"/> 
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/Marketplace">Marketplace</Link>
            <Link to="/Investments">Investments</Link>
            <Link to="/Forms">Forms</Link>
            <Link to="/Contact Us">Contact Us</Link>
        </nav>
        </header>   
    );
}

export default NavigationBar */


/*<nav className="LinksNav">
            <a href="#home" id="Home">Home</a> 
            <a href="#Marketplace" className="Marketplace">Marketplace</a>
            <a href="#investments" className="Investments">Investments</a>
            <a href="#forms" className="Forms">Forms</a>
            <a href="#contact" className="ContactUs">Contact Us</a>
           </nav>
           <div className="NavR">
           <a href="#MyCart" className="nI"><ShoppingCart size={24} /> </a>
           <a href="#Notifications" className="nI"> <Bell size={24} /> </a>
           <button>Sign Up</button>
           <button>Log In</button>*/