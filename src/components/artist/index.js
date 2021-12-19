import React from 'react'
import { calculateRating } from '../../utils/CalculateRating'
import './artist.css'

export const Artist = ({ img, name, followers, popularity,navigate}) => {
    return (
        <div className="col-lg-3 col-md-6 col-8">

            <div className="artist" onClick={navigate}>
                <div className="artist-border">
                    <div className="artist-img">
                        <img src={img} alt="artist-img" />
                    </div>
                    <div className='artist-content'>
                        <div className='artist-title'>
                            <h3>{name}</h3>
                            <p>{followers} followers</p>
            
                        </div>

                        <ul className='wrap-rating'>
                        
                         {
                            popularity>0 &&  Array(popularity).fill().map((_, i) => <li key={i+""}><i className="fa fa-star"></i></li>)

                        
                         }
                         {
                            popularity==0 && <li ><i className="fa fa-star-half"></i></li> 
                         }

                           
                        </ul>

                    </div>

                </div>
            </div>


        </div>
    )
}
