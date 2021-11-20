import React from 'react'
import planet9 from "../images/planets/planet-9.svg"
import planet8 from "../images/planets/planet-8.svg"
import planet7 from "../images/planets/planet-7.svg"
import planet6 from "../images/planets/planet-6.svg"
import planet5 from "../images/planets/planet-5.svg"
import planet4 from "../images/planets/planet-4.svg"
import planet3 from "../images/planets/planet-3.svg"
import planet2 from "../images/planets/planet-2.svg"
import planet1 from "../images/planets/planet-1.svg"


const Sidebarplanet  = (props) => {
    return (
        <div className="">
            <div className ="">
            <div className="humble-text ">
        <div className="alpha-content py-5 px-4 Humble">
          <h2 className="sidebar-name">{props.name}</h2>
          <p className="sidebar-text"> {props.name} is a wonderful planent and you would love to see the beauty of it.
          </p>
          <div className="d-flex">
            <p className="pe-5">Planet<br /><span className="sidebar-no">Alpha</span> </p>
            <p>Friends<br /><span className="sidebar-no">23</span> </p>
          </div>

          <div className="sidebar-details">
            PLANET
          </div>

          <div className="d-flex ">
            <div>
              <img src={planet1} className="person-img my-2 me-3" />
            </div>
            <div className="person-info d-flex justify-content-center align-items-center">
              <p><span className="person-name">Planet Alpha </span> <br /> POP:235</p>
            </div>
          </div>

          <div className="d-flex py-2">
            <div>
              <img src={planet3} className="person-img my-2 me-3" />
            </div>
            <div className="person-info d-flex justify-content-center align-items-center">
              <p><span className="person-name">Planet Gamma</span> <br /> POP:235</p>
            </div>
          </div>

          <div className="d-flex">
            <div>
              <img src={planet4} className="person-img my-2 me-3" />
            </div>
            <div className="person-info d-flex justify-content-center align-items-center">
              <p><span className="person-name">Planet Omega</span> <br />POP:235</p>
            </div>
          </div>

          <div className="d-flex ">
            <div>
              <img src={planet5} className="person-img my-2 me-3" />
            </div>
            <div className="person-info d-flex justify-content-center align-items-center">
              <p><span className="person-name">Planet Alpha</span> <br />POP:235</p>
            </div>
          </div>

          <div className="d-flex ">
            <div>
              <img src={planet6} className="person-img my-2 me-3" />
            </div>
            <div className="person-info d-flex justify-content-center align-items-center">
              <p><span className="person-name">Isaac Buston</span> <br /> 23 Friends</p>
            </div>
          </div>

          <div className="d-flex ">
            <div>
              <img src={planet7} className="person-img my-2 me-3" />
            </div>
            <div className="person-info d-flex justify-content-center align-items-center">
              <p><span className="person-name">Isaac Buston</span> <br /> 23 Friends</p>
            </div>
          </div>

          <div className="d-flex ">
            <div>
              <img src={planet8} className="person-img my-2 me-3" />
            </div>
            <div className="person-info d-flex justify-content-center align-items-center">
              <p><span className="person-name">Isaac Buston</span> <br /> 23 Friends</p>
            </div>
          </div>



          <div className="d-flex ">
            <div>
              <img src={planet8} className="person-img my-2 me-3" />
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
export default Sidebarplanet
