import React, {Component} from "react";
import Header from "../../Components/Header";
import './SignUpIn.css'
import SignIn from "../../Components/SignIn";
import SignUp from "../../Components/SignUp";
class SignUpIn extends Component{
    render(){
        return(
            <div className='temp'>
                <Header />
                <div className='signupin'>
                <SignIn />
                <SignUp />
                </div>
            </div>
        )
    }

}
export default SignUpIn;