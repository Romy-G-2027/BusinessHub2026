import NavigationBar from '././Navigation';
import Home from './Home';
import FooterNew from './FooterNew';
import Forgotpassword from './Forgotpassword';
import Signin from './Signin';
import Login from './Login';
import './App.css';
import Marketplace from './Marketplace'
import MyCart from './MyCart'
import ServiceNumber1 from './ServiceN1'

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
    </>
  );
}

export default App;