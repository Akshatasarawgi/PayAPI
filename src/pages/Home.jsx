import React from "react"
import ScheduleDemo from "../components/scheduleDemo"
import { Link }  from "react-router-dom"
import smartPhoneImage from "../../public/assets/home/desktop/illustration-phone-mockup.svg"
import teslaImage from "../../public/assets/shared/desktop/tesla.svg"
import microsoftImage from "../../public/assets/shared/desktop/microsoft.svg"
import hpImage from "../../public/assets/shared/desktop/hewlett-packard.svg"
import oracleImage from "../../public/assets/shared/desktop/oracle.svg"
import googleImage from "../../public/assets/shared/desktop/google.svg"
import nvidiaImage from "../../public/assets/shared/desktop/nvidia.svg"
import easyToImplementImage from "../../public/assets/home/desktop/illustration-easy-to-implement.svg"
import simpleUiImage from "../../public/assets/home/desktop/illustration-simple-ui.svg"
import personalFinancesImage from "../../public/assets/home/desktop/icon-personal-finances.svg"
import bankingImage from "../../public/assets/home/desktop/icon-banking-and-coverage.svg"
import consumerPaymentImage from "../../public/assets/home/desktop/icon-consumer-payments.svg"


export default function Home() {
    return (
        <section className="main-page">

            <div className="main-page-top">
                <img src={smartPhoneImage} alt="image of smart phone" className="main-page-image" />
                <div className="main-page-top-info">
                    <h1>Start building with our APIs for absolutely free.</h1>
                    <ScheduleDemo />
                    <p className="main-page-top-info-questions">Have any questions? <Link to="contact">Contact us</Link></p>
                </div>
            </div>

            <div className="main-page-about">
                <div className="main-page-companies-list">
                    <img src={teslaImage} alt="tesla" className="company-icon"/>
                    <img src={microsoftImage} alt="microsoft" className="company-icon"/>
                    <img src={hpImage} alt="hewlett packard" className="company-icon" />
                    <img src={oracleImage} alt="oracle" className="company-icon" />
                    <img src={googleImage} alt="google" className="company-icon" />
                    <img src={nvidiaImage} alt="nvidia" className="company-icon"/>
                </div>
                <div className="main-page-about-info">
                    <h2>Who we work with</h2>
                    <p>Today, millions of people around the world have successfully connected their accounts to apps they love
                    using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.
                    </p>
                    <Link to="about" className="btn">About us</Link>
                </div>
            </div>

            <div className="main-page-easy-to-implement">
                <img src={easyToImplementImage} className="main-page-easy-to-implement-image" alt="easy to implement" />
                <div className="main-page-easy-to-implement-info">
                    <h2>Easy to implement</h2>
                    <p>Our API comes with just a few lines of code. You'll be up and running in no time. 
                    We built our documentation page to integrate payments functionality with ease.</p>
                </div>    
            </div>

            <div className="main-page-simple-ui">
                <div className="main-page-simple-ui-info">
                    <h2>Simple UI & UX</h2>
                    <p>Our pre-built form is easy to integrate in your app or website's checkout flow and 
                        designed to optimize conversion.</p>
                </div>
                <img src={simpleUiImage} alt="Simple UI and UX" className="main-page-simple-ui-image"/>
            </div>

            <div className="main-page-bottom-cards">
                <div className="main-page-individual-card">
                    <img src={personalFinancesImage} alt="personal finances" className="main-page-bottom-cards-image"/>
                    <h3>Personal Finances</h3>
                    <p>Consolidate financial data from multiple sources 
                        and categorize transactions up to 2 years of history.
                         Analyze reports to reconcile activities in your account. </p>
                </div>
                 <div className="main-page-individual-card">
                    <img src={bankingImage} alt="personal finances" className="main-page-bottom-cards-image"/>
                    <h3>Banking & Coverage</h3>
                    <p>With our platform, you can speed up account onboarding and 
                        support ongoing payments for checking, savings, 
                        credit card, and brokerage accounts.</p>
                </div>
                 <div className="main-page-individual-card">
                    <img src={consumerPaymentImage} alt="personal finances" className="main-page-bottom-cards-image"/>
                    <h3>Consumer Payments</h3>
                    <p>It’s easier to set up secure bank payments with us 
                        through a flow designed with the user experience in mind. 
                        Customers could instantly authenticate their account.</p>
                </div>
            </div>
            
        </section>
    )
}
