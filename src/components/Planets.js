import React from 'react'
import { useState } from 'react';
import { planets } from '../data';
import Planetform from './Planetform';
import Sidebarplanet from './Sidebarplanet';

const Planets =()=> {

  const [planet, setPlanet] = useState(false);
   
  const [value, setValue] = useState({})
  const dynamicFunction = (planet) => {
    setPlanet(planet)
    setValue({ name: planet.name })
  }
  return (
    <div className="row">
        <div className="d-flex row">

            {
              planets.map( planet =>{
                return<div lg={3} className="card character mx-2 my-3 px-0"  onClick={() => dynamicFunction(planet)} key={planet.id} style={{width: '15rem'}} className ="my-2  mx-2 p-3 planet">
                  <img varaint="top "src={planet.image} alt="alpha" width="120px" height = "120px" className = "d-flex m-auto"/>
                  <div>
                    <div className="fw-bold">{planet.name}</div>
                    <div className ="opacity-50"> {planet.prop}</div>
                  </div>
                  </div>
              })
            }
            <div className="humble-text">
                {
                  
                  planet ? <Sidebarplanet name={value.name} /> : ""
                }
                </div>
        </div>
        <Planetform/>
</div>
 );
}

export default Planets;
