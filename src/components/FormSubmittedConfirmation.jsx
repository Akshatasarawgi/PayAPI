import React from "react"

export default function FormSubmittedConfirmation() {
    return (
        <div style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "1rem 3rem",
                backgroundColor: "var(--slate-500)",
                color: "var(--neutral-0)",
                borderRadius: "5px",
                fontSize: "2rem",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                zIndex: 1000,
                textAlign: "center"
            }}>
            <p>Thank you for contacting us.<br /> We will reach out to you on your Email Address.</p>
        </div>
    )
}