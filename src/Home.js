import React from 'react'
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Hero from './Components/Hero/Hero';
import Team from './Components/Team/Team';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Events from './Components/Events/Events';
import Memberships from './Components/Memberships/Memberships';
import Promotions from './Components/Promotions/Promotions';

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Promotions showSectionTitle={true}/>
      <Memberships />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}
