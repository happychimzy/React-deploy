import React from 'react'
import { planets } from '../data';

const Planets = () => {
  return (
    <div className="row">
        <div className="d-flex row">

            {
              planets.map( planet =>{
                return <div style={{width: '15rem'}} className ="my-2  mx-2 p-3 planet">
                  <img varaint="top "src={planet.image} alt="alpha" width="120px" height = "120px" className = "d-flex m-auto"/>
                  <div>
                    <div className="fw-bold">{planet.name}</div>
                    <div className ="opacity-50"> {planet.prop}</div>
                  </div>
                  </div>
              })
            }
        </div>


</div>
 );
}

export default Planets;
