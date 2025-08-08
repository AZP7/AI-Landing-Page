import React from 'react'
import Header from './Header/Header.jsx'
import Hero from './Hero/Hero.jsx'
import Section from './Section/Section.jsx'
import Price from './Price/Price.jsx'
import FullDetails from './FullDetails/FullDetails.jsx'
import Footer from './Footer/Footer.jsx'
import Collaboration from './Collaboration/Collaboration.jsx'
import Services from './Services/Services.jsx'
import Desktop from './Responsive/Desktop.jsx'
import DesktopComponent from './assets/svg/DesktopComponents/DesktopComponent.jsx'

function App() {
  const isDesktop = Desktop();

  return (

    <>
    <Header></Header>
    <Hero></Hero>
    <Section></Section>
    <Collaboration></Collaboration>
    <Services></Services>
      {
      isDesktop && <DesktopComponent />
    }
    <Price></Price>
    <FullDetails></FullDetails>
    <Footer></Footer>
    </>
  )

}

export default App
