import React from "react"
import { useLocation } from "react-router-dom"

export default function ScheduleDemo() {

        const [error, setError] = React.useState("")
        const [formInfo, setFormInfo] = React.useState({
            email: ""
        })
    
        const location = useLocation()

        React.useEffect(() => {
            setError(false)
        },[location.pathname] )
    
        function handleChange(event) {
            setError("")
            const {name, value} = event.target;
            setFormInfo({[name]: value})
        }
        
        function handleSubmit(event) {
            event.preventDefault()
            const formData = new FormData(event.target)
            const email = formData.get("email")

            if(!email) {
                setError(true)
            }
            else {
                 window.alert("Email address submitted!")
            }
            setFormInfo({ email :  ""})
        }

        return (
            <form onSubmit={handleSubmit} className="schedule-form" method="POST"> 
                        <input 
                            name="email" 
                            type="email" 
                            placeholder="Enter email address"
                            value={formInfo.email} 
                            className="input-field"
                            autoComplete="on" 
                            onChange={(e) => handleChange(e)}>          
                        </input>
                        {error ? <p className="error-message">Please enter a valid email address</p>: ""}
                        <button className="schedule-button">Schedule a Demo</button>  
            </form>
        )
}