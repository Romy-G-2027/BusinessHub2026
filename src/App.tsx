import Navigation from './Navigation';
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

export default App;