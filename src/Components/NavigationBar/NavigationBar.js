import React from 'react'
import './navigationbar.css'

export default function NavigationBar() {
  return (
       <nav className="navbar navbar-expand-lg fixed-top navbar-light" >
           <a className="navbar-brand d-md-none" href="/"><img className='img-fluid ' height={40} width={40} src={require('./Assets/karatelogo.png')} alt='brand'/></a>
           <button className="navbar-toggler collapsed text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbarToggler7"
               aria-controls="myNavbarToggler7" aria-expanded="false" aria-label="Toggle navigation">
               <span></span>
               <span></span>
               <span></span>
           </button>
           <div className="collapse navbar-collapse" id="myNavbarToggler7">
               <ul className="navbar-nav mx-auto my-auto">
                   <li className="nav-item">
                       <a className="nav-link" href="/">Home</a>
                   </li>
                   <li className="nav-item">
                       <a className="nav-link" href="#classes">Classes</a>
                   </li>
                   <li className="nav-item">
                       <a className="nav-link" href="#about">About</a>
                   </li>
                   <li className="nav-item">
                       <a className="nav-link" href="#events">Events</a>
                   </li>
                   <a className="d-none d-md-block navbrand-center" href="/"><img className='img-fluid navbar-image-center'  src={require('./Assets/karatelogo.png')} alt='brand'/></a>
                   <li className="nav-item">
                       <a className="nav-link" href="#memberships">Memberships</a>
                   </li>
                   <li className="nav-item">
                       <a className="nav-link" href="#promotions">Promotions</a>
                   </li>
                   <li className="nav-item">
                       <a className="nav-link" href="#contact">Contact</a>
                   </li>
                   <li>
                     <a href='#contact' id='trail' className='nav-link text-uppercase'>free trial</a>
                   </li>
               </ul>
           </div>
        </nav>
  )
}
