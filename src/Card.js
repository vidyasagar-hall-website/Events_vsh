import { useState } from 'react';
import img from './illu.jpg';

const Card = () => {  

  return ( 
        
          <div className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img src={img} alt="eglegoejk" className="img-d img-fluid"/>
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      illumination
                        
                    </h3>
                  </div>
                </div>
                <div className="card-body-d">
                  <p className="content-d color-text-a">
                    Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                  </p>
                  <div className="info-agents color-a">
                    <p>
                      
                    </p>
                    <p>
                      <strong> </strong> 
                    </p>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
          
         
  )
}
 
export default Card;