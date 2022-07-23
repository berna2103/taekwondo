import React from 'react'

export default function Footer() {
  return (
    <div id="location" className="container-fluid text-danger bg-light pt-5">
    <div class="container">
            <div className='row d-flex align-content-center'>
               <div className='col-lg-4 col-md-5 mx-auto'>
                  <h1 className='display-6'>Get in touch</h1>
                  <p className='lead'>Chicago Taekwondo</p>
                  <p a className='lead'><i class="bi bi-phone"></i> <a className='lead text-danger' href="tel:888-666-6666">(888) 666-6666</a></p>
                  <p className='lead'><i class="bi bi-envelope"></i> <a className='lead text-danger' href="mailto:sales@barciastech.com">chicagotaekwondo@gmail.com</a> </p>
                  <p className='lead'><i class="bi bi-geo-alt"></i> Chicago, IL 60617</p>
               </div>
               <div className="col-lg-8 col-md-7">
                 <iframe className="shadow-lg rounded-3" width="100%" height="250px" title='Midwest Chiropractor' id="gmap_canvas" src="https://maps.google.com/maps?q=3355%20E%20106th%20St%20Chicago%20IL%2060617&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
               </div>
            </div>
          </div>
          <div className="container text-center pt-5 pb-3">
            <p className='lead text-danger text-upper'>Follow Us:  
              <span >
                <a className='text-danger ms-4' href="https://www.facebook.com/ChampYonTKD"> 
                  <i class="bi bi-facebook"></i>
                </a>
                <a className='text-danger ms-4' href="https://www.instagram.com/champyontkd/?hl=en">   
                  <i class="bi bi-instagram"></i>
                </a>
              </span>
            </p>
            <p className='mt-2'></p>
        </div>
        <div className="container text-center pt-3 pb-3">
            <p>Powered by <span> <a className='text-danger' href="http://barciastech.com">Barcias Tech.</a></span></p>
            <p className='mt-2'></p>
        </div>
    </div>
  )
}
