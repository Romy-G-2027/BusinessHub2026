import NavigationBar from '././Navigation';
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
    </>
  );
}

export default App;

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