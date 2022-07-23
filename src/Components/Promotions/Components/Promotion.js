import React from 'react'
export default function Promotion(props) {

  const {title, subtitle, description, imageUrl, validDate } = props.promotion.fields
  return (
    <>
    <div class="work-wrap d-md-flex">
        <div class="order-md-last">
            <img className='img-fluid-carousel' alt='test' src={imageUrl.fields.file.url}/>
        </div>
        <div class="text text-left text-lg-right p-4 px-xl-5 d-flex align-items-center">
            <div class="desc w-100">
                <h2 class="mb-4 text-danger display-5">{title}</h2>
                <p class="lead text-muted">{subtitle}</p>
                <div class="row justify-content-end">
                    <div class="col-xl-12">
                        <p className='lead'>{description}</p>
                        <p className='text-muted'>{`Valid through: ${validDate}`}</p>
                    </div>
                </div>
                <p className='text-center'>
                  <a href='#contact' type="button" class="btn btn-outline-danger mt-4 mb-2 py-2 px-4">Get Deal!</a>
                </p>
            </div>
        </div>
    </div>
</>
  )
}
