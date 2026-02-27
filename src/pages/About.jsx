import React from "react"
import teamMembersImage from "../../public/assets/about/desktop/image-team-members.jpg"

export default function About() {
    return (
        <section className="about-page">
            <div>
            <h1>We empower innovators by delivering access to the financial system</h1>

            <div className="about-page-info-top">
                <div className="about-page-info-individual-section">
                    <h2>
                        Our Vision
                    </h2>
                    <p>
                        Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. 
                        The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. 
                        We are deeply focused on democratizing financial services through technology. 
                    </p>
                </div>
                 <div className="about-page-info-individual-section">
                    <h2>
                        Our Business
                    </h2>
                    <p>
                        At the core of our platform is the technical infrastructure APIs that connect consumers. 
                        Our innovative product provides key insights for businesses and individuals, 
                        as well as robust reporting for traditional financial institutions and developers. 
                    </p>
                </div>
            </div>
             </div>
            <img src={teamMembersImage} className="about-page-background-image" alt="image of team members working together" />
            
           
            <section className="about-page-statistics">
                <div>
                    <p className="about-page-statistics-heading">Team Members</p>
                    <p className="about-page-statistics-number">300+</p>
                </div>
                 <div>
                    <p className="about-page-statistics-heading">Offices in the US</p>
                    <p className="about-page-statistics-number">3</p>
                </div>
                 <div>
                    <p className="about-page-statistics-heading">Transactions Analyzed</p>
                    <p className="about-page-statistics-number">10M+</p>
                </div>
            </section>

            <div>
                <div className="about-page-info-bottom">
                <div className="about-page-info-individual-section">
                    <h2>
                        The Culture
                    </h2>
                    <p>
                        We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, 
                        whether it's company-wide offsites, internal hackathons, or co-worker meetups. 
                        We always value cross-team collaboration and diversity of thought, no matter the job title.
                    </p>
                </div>
                 <div className="about-page-info-individual-section">
                    <h2>
                        The People
                    </h2>
                    <p>
                        We're all passionate about building a more efficient and inclusive financial infrastructure together. 
                        At PayAPI, we have diverse backgrounds and skills. 
                    </p>
                </div>
                </div>
            </div>
        </section>
    )
}