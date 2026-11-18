import Home from './Home';
import FooterNew from './FooterNew';
import Forgotpassword from './Forgotpassword';
import Signin from './Signin';
import Login from './Login';
import './App.css';
import InvestmentsSearch from './Investments';
import InvestAgreement from './InvestAgreement';
import CompForm from './CompForm';
import InvestForm from './InvestForm';

function App() {
  return (
    <>
      <Home />
      <FooterNew />
      <InvestAgreement />
      <Login />
      <Signin />
      <Forgotpassword />
      <InvestmentsSearch />
      <CompForm />
      <InvestForm />
    </>
  );
}

export default App;