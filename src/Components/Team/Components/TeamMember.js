import React from 'react'
import './team-memeber.css'

export default function TeamMember(props) {

  const {name, title, imageUrl} = props.team.fields  
  return (
    
    
       <div className="col-lg-4 col-md-4 mb-3">
         <div class="card bg-dark">
           <img className='img-fluid img-fluid-team-member' alt={imageUrl.fields.file.title} src={imageUrl.fields.file.url} />
           <p class="lead text-center text-danger pt-3">{name}</p>
           <p class="text-danger text-center">{title}</p>
         </div>
       </div>
    

  )
}
