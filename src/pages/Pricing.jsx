import React from "react"
import {Link} from "react-router-dom"

export default function Pricing() {
    return (
        <section className="pricing-page">
            <h1>Pricing</h1>

            <div className="pricing-page-plans">

                <div className="pricing-page-individual-plan">
                    <h2 className="pricing-page-individual-plan-heading">Free Plan</h2>
                    <p className="pricing-page-individual-plan-info">
                        Build and test using our core set of products with up to 100 API requests 
                    </p>
                    <h3 className="pricing-page-individual-plan-price">
                        $0.00
                    </h3>
                   <ul className="pricing-page-individual-plan-checklist">
                    <li className="pricing-check">
                        Transactions
                    </li>
                    <li className="pricing-check">
                        Auth
                    </li>
                     <li className="pricing-check">
                        Identity
                    </li>
                    <li className="pricing-not-check">
                        Investments
                    </li>
                    <li className="pricing-not-check">
                        Assets
                    </li>
                    <li className="pricing-not-check">
                        Liabilities
                    </li>
                    <li className="pricing-not-check">
                        Income
                    </li>
                   </ul>
                   <Link to="/contact" className="pricing-btn">Request Access</Link>
                </div>

                <div className="pricing-page-individual-plan">
                    <h2 className="pricing-page-individual-plan-heading">Basic Plan</h2>
                    <p className="pricing-page-individual-plan-info">
                        Launch your project with unlimited requests and no contractual minimums  
                    </p>
                    <h3 className="pricing-page-individual-plan-price">
                        $249.00
                    </h3>
                   <ul className="pricing-page-individual-plan-checklist">
                    <li className="pricing-check">
                        Transactions
                    </li>
                    <li className="pricing-check">
                        Auth
                    </li>
                     <li className="pricing-check">
                        Identity
                    </li>
                    <li className="pricing-check">
                        Investments
                    </li>
                    <li className="pricing-check">
                        Assets
                    </li>
                    <li className="pricing-not-check">
                        Liabilities
                    </li>
                    <li className="pricing-not-check">
                        Income
                    </li>
                   </ul>
                   <Link to="/contact" className="pricing-btn">Request Access</Link>
                </div>

                <div className="pricing-page-individual-plan">
                    <h2 className="pricing-page-individual-plan-heading">Premium Plan</h2>
                    <p className="pricing-page-individual-plan-info">
                        Get tailored solutions, volume pricing, and dedicated support for your team  
                    </p>
                    <h3 className="pricing-page-individual-plan-price">
                        $499.00
                    </h3>
                   <ul className="pricing-page-individual-plan-checklist">
                    <li className="pricing-check">
                        Transactions
                    </li>
                    <li className="pricing-check">
                        Auth
                    </li>
                     <li className="pricing-check">
                        Identity
                    </li>
                    <li className="pricing-check">
                        Investments
                    </li>
                    <li className="pricing-check">
                        Assets
                    </li>
                    <li className="pricing-check">
                        Liabilities
                    </li>
                    <li className="pricing-check">
                        Income
                    </li>
                   </ul>
                   <Link to="/contact" className="pricing-btn">Request Access</Link>
                </div>
            </div>
        </section>
    )
}