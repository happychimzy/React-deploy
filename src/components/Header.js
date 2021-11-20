import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="nav">
        <ul className="d-inline-flex p-2 justify-content-between">
            <li className="col-2 list-unstyled"><Link to="/" className="text-decoration-none text-dark opacity-75">planets</Link></li>
            <li className="col-2 list-unstyled"><Link to="/character" className="text-decoration-none text-dark opacity-75">characters</Link></li>
            
        
        </ul>
        </div>
    )
}

export default Header;
