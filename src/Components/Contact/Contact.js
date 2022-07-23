import React from 'react'
import Footer from '../../Components/Footer/Footer'
import './contact.css'

export default function Contact() {
  return (
    <div id='contact' className='container-fluid bg-danger pt-5 pb-5 text-center'>
       <h1 className='display-4 text-center text-white'>Try us for free!</h1> 
       <iframe className='shadow-lg mt-5 contact-form' title='contact-form' src="https://docs.google.com/forms/d/e/1FAIpQLSfgwRLua87WVo3pnSHHHQE-Js0aj-zmKMpxHAHEg8K28Rpaag/viewform?embedded=true" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
    </div>
  )
}
