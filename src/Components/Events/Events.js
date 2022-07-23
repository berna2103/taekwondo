import React from 'react'
import useContentful from '../../Hooks/useContentful'
import Loader from '../Utilities/Loader/Loader'
import Event from './Components/Event'

import './events.css'

export default function Events() {
 const [tkEvents, isLoading] = useContentful('tkEvents')

  return (
    <div id='events' className='container-fluid bg-danger pb-5'>
       <div className='container text-center'>
           <h1 className='display-4 text-white pt-5 text-uppercase'>Current and Upcoming Events</h1>
       </div>
       { (isLoading) ? <Loader /> : <>
           {tkEvents.map((item, index) => {
             return <Event id={item.sys.id} event = {item} index = {index}/>
           })} 
         </>}  
    </div>
  )
}
