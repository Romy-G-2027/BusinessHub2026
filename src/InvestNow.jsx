import "./InvestNow.css";

function InvestNow() {
  return (
    <div className="invest-page">

      <button onClick={() => window.history.back()} className="back-btn">
        ‹
      </button>

      <h1>Invest In This Company!</h1>

      <p className="invest-description">
        To send an investment request to this company fill out the
        information below. The company will contact you in 1-3 days.
      </p>

      <div className="company-name">
        <h2>Invest Now In: <span>TerraYield</span></h2>
      </div>

      <div className="contact-section">
        <h3>Preferred Contact Information</h3>
        <p>(Where the owner of the business can contact you if needed)</p>

        <div className="contact-inputs">
          <div>
            <label>Phone Number</label>
            <input type="text" placeholder="TYPE HERE" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" placeholder="TYPE HERE" />
          </div>
        </div>
      </div>

      <div className="amount-section">
        <h3>Investment Amount</h3>
        <p>(How much would you like to invest in this company?)</p>

        <input type="number" placeholder="ENTER AMOUNT" />
      </div>

      <div className="submit-section">
        <button>Submit　▷</button>
      </div>

    </div>
  );
}

export default InvestNow;