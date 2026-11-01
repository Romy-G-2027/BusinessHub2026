import './CompForm.css'

function CompanyInformation() {
    return (
      <main className="company-page">
        <h1>Company Information</h1>
        <p className="company-subtitle">Tell us about your company.</p>
  
        <form className="company-form">
  
          <div className="form-row">
            <div className="form-group">
              <label>Business Name *</label>
              <input type="text" placeholder="TYPE TEXT HERE" required />
            </div>
  
            <div className="form-group">
              <label>Industry *</label>
              <input type="text" placeholder="TYPE TEXT HERE" required />
            </div>
          </div>
  
          <div className="form-group">
            <label>Business Description *</label>
            <small>
              (Tell us what your company does, problem it solves, and what makes it unique)
            </small>
            <textarea
              placeholder="TYPE TEXT HERE"
              rows="4"
              required
            />
          </div>
  
          <div className="form-row">
            <div className="form-group">
              <label>Business Stage *</label>
              <small>(Idea, startup, or established business.)</small>
              <input type="text" placeholder="TYPE TEXT HERE" required />
            </div>
  
            <div className="form-group">
              <label>Founding Year *</label>
              <small>(When was your business established?)</small>
              <input type="number" placeholder="TYPE TEXT HERE" />
            </div>
          </div>
  
          <div className="form-row">
            <div className="form-group">
              <label>Company Founders *</label>
              <small>(Provide the founders/owners' full names)</small>
              <input type="text" placeholder="TYPE TEXT HERE" required />
            </div>
  
            <div className="form-group">
              <label>Contact Name *</label>
              <input type="text" placeholder="TYPE TEXT HERE" required />
            </div>
          </div>
  
          <div className="form-group">
            <label>Business Email and Number *</label>
            <input
              type="text"
              placeholder="TYPE TEXT HERE"
              required
            />
          </div>
  
          <div className="form-row">
            <div className="form-group">
              <label>Company Logo</label>
              <small>(An image representing the business)</small>
              <input type="file" accept="image/*" />
            </div>
  
            <div className="form-group">
              <label>Company Links</label>
              <small>(Website and/or Social Media links)</small>
              <input type="url" placeholder="TYPE TEXT HERE" />
            </div>
          </div>
  
          <button type="submit" className="submit-application">
            Submit Application&nbsp; ▹
          </button>
  
        </form>
      </main>
    );
  }
  
  export default CompanyInformation;