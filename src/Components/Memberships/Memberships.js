import React from 'react'
import useContentful from '../../Hooks/useContentful'
import Loader from '../Utilities/Loader/Loader'
import Mebmership from './Components/Mebmership'

export default function Memberships() {
  
  const [tkMemberships, isLoading] = useContentful('tkMemberships')
  return (
    <div id='memberships' className='container-fluid'>
        <div className='container text-center pt-5 '>
           <h1 className='display-4 text-danger text-uppercase'>Memberships</h1>
        </div>
        <div className='container'>
        <div className="row pt-5 pb-5">
         {(isLoading) ? <Loader/> : <>
           {tkMemberships.map((item, index) => {
             return <Mebmership id={item.sys.id} membership = {item} index = {index}/>
           })} 
         </>}  
        </div>
        </div>
  </div>
  )
}
