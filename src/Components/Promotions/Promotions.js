import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import useContentful from '../../Hooks/useContentful'
import Loader from '../Utilities/Loader/Loader'
import Promotion from './Components/Promotion'
import './promotions.css'

export default function Promotions(props) {

  const [TKPromotions, isLoading] = useContentful('tkPromotions')

  return (
    <>
    <section id='promotions' className="ftco-section bg-danger pb-5">
			<div className="container-fluid">
				<div className="row my-auto">
                    <div className="col-md-12 text-center">
						<h2 className="mb-2 mb-5 pt-5 display-4 text-white text-uppercase">Promotions</h2>
					</div>
					<div className="col-md-12 ">
                    {(isLoading) ? <Loader/> : 
						<Carousel slide={true} className='p-2 text-center' 
                        indicatorLabels={[<p>next</p>]}
                        nextIcon={null}
                                   prevIcon={null}
                                   interval={5000}
                                   >
                                    {TKPromotions.map((item, index) => {
                                      return <Carousel.Item className='bg-light' key={index}><Promotion id={item.sys.id} promotion = {item} index = {index}/></Carousel.Item>
                                    })} 
                                    </Carousel>
                                }  
						</div>
					</div>
				</div>
		</section>

    </>
  )
}
