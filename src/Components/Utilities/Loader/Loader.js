import React from 'react'
import { Spinner } from 'react-bootstrap'


export default function Loader() {
  return (
    <div className='bg-light p-5 text-center mb-5'> 
        <Spinner className='me-3' size='sm' animation="grow" variant="danger" />
        <Spinner className='me-3' size='sm' animation="grow" variant="danger" />
        <Spinner className='me-3' size='sm' animation="grow" variant="danger" />
        <p className='text-muted mt-3'>Loading content ...</p>
    </div>
  )
}
