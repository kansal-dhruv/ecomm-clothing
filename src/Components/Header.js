import React, {Component} from "react";
import '../Pages/Header.css';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../assets/crown.svg";

class Header extends Component{
    render(){
        return(
            <div className='header'>
                <Link className='logo-container' to='/'><Logo className='logo'></Logo></Link>
                <div className='option-container'>
                <Link className='option' to='/shop'>Shop </Link>
                <Link className='option' to='/shop'>Contact</Link>
                <Link className='option' to='/signUpIn'>Sign In</Link>
                </div>
            </div>
        )
    }
}
export default Header;