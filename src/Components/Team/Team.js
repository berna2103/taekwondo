import React from 'react'
import useContentful from '../../Hooks/useContentful'
import Loader from '../Utilities/Loader/Loader'
import TeamMember from './Components/TeamMember'

export default function Team() {

  const [team, isLoading] = useContentful('team')
  return (
    <section id="about">
      <div class="container-fluid">
        <div class="container pt-5">
          <h2 className="display-4 text-center text-danger text-uppercase">Our Instructors</h2>
          <p className='lead text-center text-muted'>Come meet our instructors for a quick introduction to Taekwondo.</p>
          <div className="row pt-5 pb-5">
          { (isLoading) ? <Loader/>: <>
           {team.map((item, index) => {
             return <TeamMember id={item.sys.id} team = {item} index = {index}/>
           })} 
           </>}  
           </div>
        </div>
        </div>
    </section>
  )
}
