import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavigationBar from './Navigation';
import Home from './Home';
import FooterNew from './FooterNew';
import Forgotpassword from './Forgotpassword';
import Signin from './Signin';
import Login from './Login';
import Marketplace from './Marketplace';
import MyCart from './MyCart';

import ServiceNumber1 from './ServiceN1';
import ServiceNumber2 from './ServiceN2';
import ServiceNumber3 from './ServiceN3';
import ServiceNumber4 from './ServiceN4';
import ServiceNumber5 from './ServiceN5';
import ServiceNumber6 from './ServiceN6';
import ServiceNumber7 from './ServiceN7';
import ServiceNumber8 from './ServiceN8';
import ServiceNumber9 from './ServiceN9';

import InvestmentsSearch from './Investments';
import InvestAgreement from './InvestAgreement';
import CompForm from './CompForm';
import InvestForm from './InvestForm';

import './App.css';

import { useState, useEffect } from "react";

function App() {
    const [showNotification, setShowNotification] = useState(false);

    function handleAddToCart() {
      setShowNotification(true);
  }

    useEffect(() => {
        if (!showNotification) return;

        
        const timer = setTimeout(() => {
            setShowNotification(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [showNotification]);

    return (
        <BrowserRouter>
            <NavigationBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Marketplace" element={<Marketplace />} />
                <Route path="/Investments" element={<InvestmentsSearch />} />
                <Route path="/MyCart" element={<MyCart />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Forgotpassword" element={<Forgotpassword />} />

                <Route path="/ServiceN1" element={<ServiceNumber1 onAddToCart={handleAddToCart} />} />
                <Route path="/ServiceN2" element={<ServiceNumber2 onAddToCart={handleAddToCart} />} />
                <Route path="/ServiceN3" element={<ServiceNumber3 onAddToCart={handleAddToCart}/>} />
                <Route path="/ServiceN4" element={<ServiceNumber4 onAddToCart={handleAddToCart}/>} />
                <Route path="/ServiceN5" element={<ServiceNumber5 onAddToCart={handleAddToCart}/>} />
                <Route path="/ServiceN6" element={<ServiceNumber6 onAddToCart={handleAddToCart}/>} />
                <Route path="/ServiceN7" element={<ServiceNumber7 onAddToCart={handleAddToCart}/>} />
                <Route path="/ServiceN8" element={<ServiceNumber8 onAddToCart={handleAddToCart}/>} />
                <Route path="/ServiceN9" element={<ServiceNumber9 onAddToCart={handleAddToCart}/>} />

                <Route path="/InvestAgreement" element={<InvestAgreement />} />
                <Route path="/CompForm" element={<CompForm />} />
                <Route path="/InvestForm" element={<InvestForm />} />
            </Routes>

            {showNotification && (
                <div className="cartNotification">
                    <span>✓</span>
                    The Golden Package successfully added to cart!
                </div>
            )}

            <FooterNew />
        </BrowserRouter>
    );
}

export default App;