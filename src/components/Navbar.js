import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Appcontext from './context'
const Navbar = () => {
    const {data}=useContext(Appcontext);
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">HODLINFO.com</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ml">
                    
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Menu-1
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        {data.map((val)=>{
                            return(

                                <li><a class="dropdown-item" href="#">{val.name.substring(0,3)}</a></li>
                            )
                        })}
                    </ul>
                    </li>
                
                </ul>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                    
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Menu-2
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">INR</a></li>
                    </ul>
                    </li>
                
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar