import React from 'react'
import Navbar from '../components_jsx/Navbar'
import Homepage from '../components_jsx/Homepage'
import About from '../components_jsx/About'
import Glimpse from '../components_jsx/Glimpse'
import Contact from '../components_jsx/Contact'

export default function Home() {
    return (
        <>

            <Navbar />
            <Homepage />
            <About />
            <Glimpse />
            <Contact />
        </>
    )
}
