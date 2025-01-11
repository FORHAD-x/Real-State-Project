import React from 'react'
import Footer from '../Components/Footer/Footer'
import GetStarted from '../Components/GetStarted/GetStarted'
import Contact from '../Components/contact/Contact'
import Value from '../Components/value/Value'
import Residencies from '../Components/residencies/Residencies'
import Companies from '../Components/companies/Companies'
import Hero from '../Components/hero/Hero'
import Header from '../Components/header/Header'

const Home = () => {
  return (
    <>
     <div className="app">
      <div>
       <div className='white-gradient'/>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
     </div>
    </>
  )
}

export default Home