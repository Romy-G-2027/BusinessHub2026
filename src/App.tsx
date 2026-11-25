
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
import Forms from './Forms'

import './App.css';

function App() {
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

        <Route path="/ServiceN1" element={<ServiceNumber1 />} />
        <Route path="/ServiceN2" element={<ServiceNumber2 />} />
        <Route path="/ServiceN3" element={<ServiceNumber3 />} />
        <Route path="/ServiceN4" element={<ServiceNumber4 />} />
        <Route path="/ServiceN5" element={<ServiceNumber5 />} />
        <Route path="/ServiceN6" element={<ServiceNumber6 />} />
        <Route path="/ServiceN7" element={<ServiceNumber7 />} />
        <Route path="/ServiceN8" element={<ServiceNumber8 />} />
        <Route path="/ServiceN9" element={<ServiceNumber9 />} />

        <Route path="/InvestAgreement" element={<InvestAgreement />} />

        <Route path="/CompForm" element={<CompForm />} />

        <Route path="/InvestForm" element={<InvestForm />} />
        <Route path = "/Forms" element={<Forms/>}/>
      </Routes>

      <FooterNew />

    </BrowserRouter>
  );
}

export default App;



/*import NavigationBar from './Navigation';
import Home from './Home';
import FooterNew from './FooterNew';
import Forgotpassword from './Forgotpassword';
import Signin from './Signin';
import Login from './Login';
import './App.css';
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
  
function App() {
 return (
   <>
     <NavigationBar />
     <Home />
     <FooterNew />
     <Login />
     <Signin />
     <Forgotpassword />
     <Marketplace />
     <MyCart />
     <ServiceNumber1 />
     <ServiceNumber2 />
     <ServiceNumber3 />
     <ServiceNumber4 />
     <ServiceNumber5 />
     <ServiceNumber6 />
     <ServiceNumber7 />
     <ServiceNumber8 />
     <ServiceNumber9 />
      <InvestAgreement/>
      <InvestmentsSearch />
      <CompForm/>
      <InvestForm />




   </>
 );
}


export default App;
*/

/*import Navigation from './Navigation';
import Home from './Home';
import FooterNew from './FooterNew';
import Forgotpassword from './Forgotpassword';
import Signin from './Signin';
import Login from './Login';
import './App.css';
import Marketplace from './Marketplace'
import MyCart from './MyCart'
import ServiceNumber1 from './ServiceN1'




function App (){
 return (
   <BrowserRoute>
     <Navigation />
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/Marketplace" element={<Marketplace/>} />
         <Route path="/Investments" element={<Investments/>} />
         <Route path="/Forms" element={<Forms/>} />
         <Route path="/Contact Us" element={<Contact Us/>} />
       </Routes>
   </BrowserRoute>
 );
}


export default App;*/
