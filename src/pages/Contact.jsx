import React from "react"
import teslaImage from "../../public/assets/shared/desktop/tesla.svg"
import microsoftImage from "../../public/assets/shared/desktop/microsoft.svg"
import hpImage from "../../public/assets/shared/desktop/hewlett-packard.svg"
import oracleImage from "../../public/assets/shared/desktop/oracle.svg"
import googleImage from "../../public/assets/shared/desktop/google.svg"
import nvidiaImage from "../../public/assets/shared/desktop/nvidia.svg"
import FormSubmittedConfirmation from "../components/FormSubmittedConfirmation"

export default function Contact() {

    const [form, setForm] = React.useState( {
        userName: "",
        email: "",
        companyName: "",
        title: "",
        message: "",
        updates: false
    })

    const [error, setError] = React.useState({
        userNameError: false,
        emailError: false,
        messageError: false
    })
    const [showModal, setShowModal] = React.useState(false)

    function handleChange(event) {
        const {name, value, type, checked} = event.target;

        if(value) {
            setError(prevError => ({
                ...prevError,
                [`${name}Error`]: false
            }))
        }
    
        setForm(prevForm => type === "checkbox" ? 
            {...prevForm, [name]: checked } :  
            {...prevForm, [name]: value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)

        let userName = formData.get("userName");
        let email = formData.get("email");
        let message = formData.get("message");

        if(!userName) {
            setError(prevError => {
                return {
                    ...prevError,
                    userNameError: true
                }
            })
        }
        if(!email) {
            setError(prevError => {
                return {
                    ...prevError,
                    emailError: true
                }
            })
        }
        if(!message) {
            setError(prevError => {
                return {
                    ...prevError,
                    messageError: true
                }
            })
        }
        
        if(userName && email && message) {
            setShowModal(true)
            setForm({
            userName: "",
            email: "",
            companyName: "",
            title: "",
            message: "",
            updates: false
        })
        setError({userNameError: false, emailError: false, messageError: false})
        }
    
    }

     React.useEffect(() => {
        if(showModal) {
            const timer = setTimeout(() => {
            setShowModal(false)
        }, 3000)
        return () => clearTimeout(timer)
        }
    }, [showModal])

    return (
        <section className="contact-page">
             <h1>Submit a help request and we’ll get in touch shortly.</h1>
             <div className="contact-page-details">
                <form onSubmit={handleSubmit} className="contact-form" method="POST">
                    <input 
                        type="text" 
                        value={form.userName} 
                        name="userName"
                        onChange={(e) => handleChange(e)}
                        placeholder="Name"
                        className={error.userNameError && "error-field name-field"}
                    />
                    {error.userNameError ? <p className="error-message">This field can't be empty</p> : ""}
                     <input 
                        type="email" 
                        value={form.email} 
                        name="email"
                        onChange={(e) => handleChange(e)}
                        placeholder="Email Address"
                        className={error.emailError && "error-field email-field"}
                    />
                    {error.emailError ? <p className="error-message">This field can't be empty</p> : ""}
                    
                     <input 
                        type="text" 
                        value={form.companyName} 
                        name="companyName"
                        onChange={(e) => handleChange(e)}
                        placeholder="Company Name"
                    />   
                     <input 
                        type="text" 
                        value={form.title} 
                        name="title"
                        onChange={(e) => handleChange(e)}
                        placeholder="Title"
                    />
                    <textarea 
                    rows= "5"
                    cols="40"
                        value={form.message} 
                        name="message" 
                        placeholder="Message" 
                        onChange={(e) => handleChange(e)}
                        className={error.messageError && "error-field message-field"}
                        >
                    </textarea>
                    {error.messageError ? <p className="error-message ">This field can't be empty</p> : ""}
                   
                   <div className="checkbox-wrapper">
                        <label className="checkbox-text">
                        <input 
                            type="checkbox"
                            name="updates"
                            checked={form.updates}
                            onChange={(e) => handleChange(e)}
                        /> 
                        <span className="custom-checkbox"></span>
                        Stay up-to-date with company announcements and updates to our API
                        </label>
                    </div>

                    <button className="submit-btn">Submit</button>
                </form>
                {showModal && <FormSubmittedConfirmation />}

                <div className="contact-page-companies-list">
                    <h2>Join the thousands of innovators already building with us</h2>
                    <div className="contact-page-company-list">
                        <img src={teslaImage} alt="tesla" className="company-icon"/>
                        <img src={microsoftImage} alt="microsoft" className="company-icon"/>
                        <img src={hpImage} alt="hewlett packard" className="company-icon" />
                        <img src={oracleImage} alt="oracle" className="company-icon" />
                        <img src={googleImage} alt="google" className="company-icon" />
                        <img src={nvidiaImage} alt="nvidia" className="company-icon"/>
                    </div>
                </div>
             </div>
        </section>
       
    )
}