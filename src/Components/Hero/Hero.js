import './hero.css'

export default function Hero() {
  return (
    <div id='hero' className='container-fluid' >
      <div className='hero'>
        <div className='row row-hero'>
            <div className='col-lg-12 my-auto' >
              <h1 className='display-1'>Taekwondo Chicago.</h1>
              <p className='lead'>Serving the East Side Chicago community since 1980.</p>
              <div className="container text-center">
                
            <p className='lead text-white text-upper mt-3'>
              <span >
                <a className='btn btn-outline-danger ' href="https://www.facebook.com/ChampYonTKD"> 
                  <i class="bi bi-facebook"></i>
                </a>
                <a className='btn btn-outline-danger ms-4' href="https://www.instagram.com/champyontkd/?hl=en">   
                  <i class="bi bi-instagram"></i>
                </a>
              </span>
            </p>
           </div>
              <a href='#contact' className='btn btn-lg btn-danger text-uppercase mt-3'>Schedule free class </a>
          </div>
        </div>
      </div>
    </div>
  )
}
