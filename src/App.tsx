
import Header from './Header';
import Home from './Home';
import Footer from './Footer';




function App() {
  const showAgreement = true;

  return (
    <>
      {showAgreement ? (
        <FooterNew/>
        
      ) : (
        <>
          <Header />
          <Home />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
