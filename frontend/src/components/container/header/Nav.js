// import { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";

const Nav = ()=>{
    const auth = localStorage.getItem("user");
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.clear()
        navigate("/signup")
    }
    return(
        <div>
            
            {
                auth ? 
            
            <ul className="nav-ul">
                <div className="logo">
                    <img src={require('../../../assets/img/logo.png')} alt="logo" />
                </div>
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/add'>Add Products</Link></li>
                <li><Link to='/update/:id'>Update Products</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/signup' onClick={logout}>Logout  ({JSON.parse(auth).name})</Link></li>
            </ul>
            :
                <ul className="nav-ul nav-right">
                    <div className="logo">
                        <img src={require('../../../assets/img/logo.png')} alt="logo" />
                    </div>
                        <li><Link to='/signup'>Sign Up</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                </ul>
            }
        </div>
    )
}

export default Nav;