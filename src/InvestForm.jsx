

import './InvestForm.css';


function InvestForm() {
 return (
   <main className="investment-page">
     <div className="investment-heading">
       <h1>Investment Opportunity</h1>
       <p>Share your funding needs and what investors should know.</p>
     </div>


     <form className="investment-form" onSubmit={(e) => e.preventDefault()}>
       <div className="form-row">
         <div className="form-group">
           <label>Funding Goal *</label>
           <small>(How much money does the business want to raise?)</small>
           <input
             type="number"
             placeholder="TYPE TEXT HERE"
             min="1"
             required
           />
         </div>


         <div className="form-group">
           <label>Expected Funding Timeline *</label>
           <small>(When does the business hope to secure its funding?)</small>
           <input
             type="text"
             placeholder="TYPE TEXT HERE"
             required
           />
         </div>
       </div>


       <div className="form-row">
         <div className="form-group">
           <label>Ownership Offered *</label>
           <small>(What percentage of your business is available to investors?)</small>
           <input
             type="number"
             placeholder="TYPE TEXT HERE"
             min="0.01"
             max="100"
             step="0.01"
             required
           />
         </div>


         <div className="form-group">
           <label>Use of Funds *</label>
           <small>
             (Explain how the money will be used, such as product development,
             hiring, or marketing.)
           </small>
           <input
             type="text"
             placeholder="TYPE TEXT HERE"
             required
           />
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


       <div className="form-group">
         <label>Growth Potential *</label>
         <small>
           (Why is this business a promising opportunity for investors,
           and what are its future goals?)
         </small>
         <textarea
           placeholder="TYPE TEXT HERE"
           rows="4"
           required
         />
       </div>


       <div className="form-group">
         <label>Upload Business Financial Statements</label>
         <small>
           (Uploading financial statements is optional, but providing them
           can increase investor confidence and interest in your business.)
         </small>
         <input
           type="file"
           accept=".pdf,.doc,.docx,.xls,.xlsx,.csv"
           multiple
         />
       </div>


       <button type="submit" className="submit-application">
         Submit Application ▹
       </button>
     </form>
   </main>
 );
}


export default InvestForm;

