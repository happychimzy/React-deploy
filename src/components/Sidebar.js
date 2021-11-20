import React from 'react'
import img6 from "../images/characters/character-2.png"
import img7 from "../images/characters/character-4.png"
import img8 from "../images/characters/character-5.png"
import img4 from "../images/characters/character-7.png"
import img1 from "../images/characters/character-8.png"
import img3 from "../images/characters/character-12.png"
import img5 from "../images/characters/character-6.png"

const Sidebar  = (props) => {
    return (
        <div className="">
            <div className ="">
            <div className="humble-text ">
        <div className="alpha-content py-5 px-4 Humble">
          <h2 className="sidebar-name">{props.name}</h2>
          <p className="sidebar-text"> {props.name} is a multitalented fellow. Always chherful and ready to serve all and sundry.
          </p>
          <div className="d-flex">
            <p className="pe-5">Planet<br /><span className="sidebar-no">Alpha</span></p>
            <p>Friends<br /><span className="sidebar-no">23</span> </p>
          </div>

          <div className="sidebar-details">
            CHARACTERS
          </div>

          <div className="d-flex ">
            <div>
              <img src={img1} className="person-img my-2 me-3" />
            </div>
            <div className="person-info d-flex justify-content-center align-items-center">
              <p><span className="person-name">Gold Ainn </span> <br /> 23 Friends</p>
            </div>
          </div>

          <div className="d-flex py-2">
            <div>
              <img src={img3} className="person-img my-2 me-3" />
            </div>
            <div className="person-info d-flex justify-content-center align-items-center">
              <p><span className="person-name">Jude Eve</span> <br /> 23 Friends</p>
            </div>
          </div>

          <div className="d-flex">
            <div>
              <img src={img4} className="person-img my-2 me-3" />
            </div>
            <div className="person-info d-flex justify-content-center align-items-center">
              <p><span className="person-name">Micheal Collins</span> <br /> 23 Friends</p>
            </div>
          </div>

          <div className="d-flex ">
            <div>
              <img src={img5} className="person-img my-2 me-3" />
            </div>
            <div className="person-info d-flex justify-content-center align-items-center">
              <p><span className="person-name">Adlene Jesse</span> <br /> 23 Friends</p>
            </div>
          </div>

          <div className="d-flex ">
            <div>
              <img src={img6} className="person-img my-2 me-3" />
            </div>
            <div className="person-info d-flex justify-content-center align-items-center">
              <p><span className="person-name">Isaac Buston</span> <br /> 23 Friends</p>
            </div>
          </div>

          <div className="d-flex ">
            <div>
              <img src={img8} className="person-img my-2 me-3" />
            </div>
            <div className="person-info d-flex justify-content-center align-items-center">
              <p><span className="person-name">Katreen David</span> <br /> 23 Friends</p>
            </div>
          </div>

        </div>
      </div>
    </div>
</div>
            
        
    )
}
export default Sidebar
