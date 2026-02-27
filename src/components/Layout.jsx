import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import ReadyToStart from "./ReadyToStart"

export default function Layout() {
    return (
        <>
        <Header />
        <main>
            {<Outlet />}      
        </main> 
        <ReadyToStart />
        <Footer />
        </>
    )
}