import React from 'react'

export default function Mebmership(props) {
  
  const { title, description, price } = props.membership.fields
  return (
    <div className='col-lg-4 col-md-4 p-5 mx-auto text-center bg-light shadow  mb-2'>
        <h1 className='display-6 text-danger'>{title}</h1>
        <p className='lead text-muted'>{description}</p>
        <p className='lead'>{`$${price} per month.`}</p>
        <hr></hr>
        <a href='#contact' className='btn btn-outline-danger'>Contact Us</a>
    </div>
  )
}
