import React from 'react'
import { characters } from "../data";



const Characters = () => {
   

    return ( 
        <div className="d-flex row">
              {
                    characters.map(img =>  {
                        return<div className="card character mx-2 my-2 px-0">
                        <img class="card-img-top char-img" src={img.image} alt="Card  cap" width="272px" height="136px"/>
                        <div class="card-body">
                          <h5 class="card-title">{img.name}</h5>
                          <p>{img.friends}</p>
                        </div>
                      </div>
                    })
                }
           </div>
     );
}
 
export default Characters;
