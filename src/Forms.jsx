import { useState } from "react";
import "./Forms.css";

import CompForm from "./CompForm";
import InvestForm from "./InvestForm";
import InvestAgreement from "./InvestAgreement";

import {
    Building2,
    ChartNoAxesCombined,
    FileCheck,
    ChevronRight,
    ArrowRight
} from "lucide-react";

function Forms() {
    const [activeForm, setActiveForm] = useState(null);

    const formOptions = [
        {
            number: "01",
            title: "Company Information",
            description: "Submit your company details, description, industry, and contact information.",
            component: "company",
            icon: <Building2 />
        },
        {
            number: "02",
            title: "Investment Opportunity",
            description: "Share your funding goal, company ownership offered, and financial information.",
            component: "investment",
            icon: <ChartNoAxesCombined />
        },
        {
            number: "03",
            title: "Agreement Form",
            description: "Review Business Hub's terms and conditions before an investment.",
            component: "agreement",
            icon: <FileCheck />
        }
    ];

    const formViews = {
        company: CompForm,
        investment: InvestForm,
        agreement: InvestAgreement
    };

    const goBack = () => {
        setActiveForm(null);
        window.scrollTo(0, 0);
    };

    if (activeForm) {
        const ActiveFormView = formViews[activeForm];

        return (
            <div className="form-view">
                <div className="back-bar">
                    <button
                        type="button"
                        className="back-to-forms"
                        onClick={goBack}
                    >
                        ← Back to Forms
                    </button>
                </div>

                <div className="form-view-content">
                    <ActiveFormView onBack={goBack} />
                </div>
            </div>
        );
    }

    return (
        <main className="forms-page">

            <div className="forms-heading">
                <h1>Business Hub Forms</h1>

                <p>
                    Complete the necessary forms to list your company,
                    <br />
                    create investment opportunities, and finalize agreements.
                </p>
            </div>

            <div className="forms-list">

                {formOptions.map((form) => (
                    <button
                        type="button"
                        className="form-card"
                        key={form.number}
                        onClick={() => setActiveForm(form.component)}
                    >

                        <div className="form-card-icon">
                            {form.icon}
                        </div>

                        <div className="form-card-content">

                            <span className="form-card-number">
                                {form.number}
                            </span>

                            <h2>{form.title}</h2>

                            <p>{form.description}</p>

                            <span className="form-card-link">
                                Open Form <ArrowRight size={16} />
                            </span>

                        </div>

                        <ChevronRight className="form-card-arrow" />

                    </button>
                ))}

            </div>

        </main>
    );
}

export default Forms;