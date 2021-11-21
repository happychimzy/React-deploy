// import React {useState} from 'react';
import { characters } from "../data";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Characterform from "./Characterform";



const Characters =()=> {

  const [character, setCharacter] = useState(false);

  // const Characters =() => {setCharacter(!character)};
   
  const [value, setValue] = useState({})
  const dynamicFunction = (img) => {
    setCharacter(img)
    setValue({ name: img.name })
  }

    return (
        <div className="d-flex row">
              {
                    characters.map(img =>  {
                        return<div lg={3} className="card character mx-2 my-3 px-0"  onClick={() => dynamicFunction(img)} key={img.id}>
                        <img class="card-img-top img-img" src={img.image} alt="Card cap" width="272px" height="136px"/>
                        <div class="card-body">
                          <h5 class="card-title">{img.name}</h5>
                          <p>{img.friends}</p>
                        </div>
                      </div>
                      
                    })
                }
                <div className="humble-text">
                {
                  
                  character ? <Sidebar name={value.name} /> : ""
                }
                </div>
                <Characterform/>
           </div>

     );
}
 
export default Characters;
