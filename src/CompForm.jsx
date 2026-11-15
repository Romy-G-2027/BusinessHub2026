import './CompForm.css'
import { SendHorizontal } from "lucide-react";

function CompanyInformation() {
    return (
      <main className="company-page">
        <h1>Company Information</h1>
        <p className="company-subtitle">Tell us about your company.</p>
  
        <form className="company-form">
  
          <div className="form-row">
            <div className="form-group">
              <label >Business Name *</label>
              <input className="textBox" type="text" placeholder="| TYPE TEXT HERE" required />
            </div>
  
            <div className="form-group">
              <label>Industry *</label>
              <input className="textBox" type="text" placeholder="| TYPE TEXT HERE" required />
            </div>
          </div>
  
          <div className="form-group">
            <label>Business Description *</label>
            <small>
              (Tell us what your company does, problem it solves, and what makes it unique)
            </small>
            <textarea className="textBox"
              placeholder="| TYPE TEXT HERE"
              rows="4"
              required
            />
          </div>
  
          <div className="form-row">
            <div className="form-group">
              <label>Business Stage *</label>
              <small>(Idea, startup, or established business.)</small>
              <input className="textBox" type="text" placeholder="| TYPE TEXT HERE" required />
            </div>
  
            <div className="form-group">
              <label>Founding Year *</label>
              <small>(When was your business established?)</small>
              <input className="textBox" type="number" placeholder="| TYPE TEXT HERE" />
            </div>
          </div>
  
          <div className="form-row">
            <div className="form-group">
              <label>Company Founders *</label>
              <small>(Provide the founders/owners' full names)</small>
              <input className="textBox" type="text" placeholder="| TYPE TEXT HERE" required />
            </div>
  
            <div className="form-group">
              <label>Contact Name *</label>
              <small>
                (The name of the person we can contact)
              </small>
              <input className="textBox" type="text" placeholder="| TYPE TEXT HERE" required />
            </div>
          </div>
  
          <div className="form-group">
            <label>Business Email *</label>
            <input
              className="textBox"
              type="text"
              placeholder="| TYPE TEXT HERE"
              required
            />
          </div>
  
          <div className="form-row">
            <div className="form-group">
              <label>Company Logo</label>
              <small>(An image representing the business)</small>
              <input className="textBox" type="file" accept="image/*" />
            </div>
  
            <div className="form-group">
              <label>Company Links</label>
              <small>(Website and/or Social Media links)</small>
              <input className="textBox" type="url" placeholder="| TYPE TEXT HERE" />
            </div>
          </div>
  
          <button type="submit" className="submit-application">
            Submit Application&nbsp; <SendHorizontal size={24} />
          </button>
  
        </form>
      </main>
    );
  }
  
  export default CompanyInformation;