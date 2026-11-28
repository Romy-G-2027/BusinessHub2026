import { useState } from "react";
import "./InvestForm.css";
import { SendHorizontal } from "lucide-react";
import Popup from "./Popup";

function InvestForm() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <main className="investment-page">

            <div className="investment-heading">
                <h1>Investment Opportunity</h1>
                <p>Share your funding needs and what investors should know.</p>

                <button
                    type="button"
                    className="investment-help"
                    onClick={() => setIsPopupOpen(true)}
                >
                    ?
                </button>
            </div>

            <form
                className="investment-form"
                onSubmit={(e) => e.preventDefault()}
            >

                <div className="investment-row">

                    <div className="investment-group">
                        <label>Funding Goal *</label>
                        <small>(How much money does the business want to raise?)</small>

                        <input
                            className="investment-input"
                            type="number"
                            placeholder="| TYPE TEXT HERE"
                            min="1"
                            required
                        />
                    </div>

                    <div className="investment-group">
                        <label>Expected Funding Timeline *</label>
                        <small>(When does the business hope to secure its funding?)</small>

                        <input
                            className="investment-input"
                            type="text"
                            placeholder="| TYPE TEXT HERE"
                            required
                        />
                    </div>

                </div>

                <div className="investment-row">

                    <div className="investment-group">
                        <label>Ownership Offered *</label>
                        <small>(What percentage of your business is available to investors?)</small>

                        <input
                            className="investment-input"
                            type="number"
                            placeholder="| TYPE TEXT HERE"
                            min="0.01"
                            max="100"
                            step="0.01"
                            required
                        />
                    </div>

                    <div className="investment-group">
                        <label>Use of Funds *</label>
                        <small>
                            (Explain how the money will be used, such as product development, hiring, or marketing.)
                        </small>

                        <input
                            className="investment-input"
                            type="text"
                            placeholder="| TYPE TEXT HERE"
                            required
                        />
                    </div>

                </div>

                <div className="investment-group">
                    <label>Business Email and Number *</label>

                    <input
                        className="investment-input"
                        type="text"
                        placeholder="| TYPE TEXT HERE"
                        required
                    />
                </div>

                <div className="investment-group">
                    <label>Growth Potential *</label>

                    <small>
                        (Why is this business a promising opportunity for investors, and what are its future goals?)
                    </small>

                    <textarea
                        className="investment-input investment-textarea"
                        placeholder="| TYPE TEXT HERE"
                        rows="4"
                        required
                    />
                </div>

                <div className="investment-group">
                    <label>Upload Business Financial Statements</label>

                    <small>
                        (Uploading financial statements is optional, but providing them can increase investor confidence and interest in your business.)
                    </small>

                    <textarea
                        className="investment-input investment-upload"
                        placeholder="| UPLOAD PICTURE OF INCOME STATEMENT, BALANCE SHEET AND CASH FLOW STATEMENT"
                        readOnly
                        onClick={(e) => e.currentTarget.nextElementSibling.click()}
                    />

                    <input
                        className="investment-file"
                        type="file"
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.csv"
                        multiple
                        onChange={(e) => {
                            const files = Array.from(e.target.files || []);
                            e.target.previousElementSibling.value =
                                files.map(file => file.name).join(", ");
                        }}
                    />
                </div>

                <button
                    type="submit"
                    className="investment-submit"
                >
                    Submit Application
                    <SendHorizontal size={24} />
                </button>

            </form>

            {isPopupOpen && (
                <Popup onClose={() => setIsPopupOpen(false)} />
            )}

        </main>
    );
}

export default InvestForm;