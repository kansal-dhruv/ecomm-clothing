import React,{Component} from "react";
import {Form,Label,Input,FormGroup} from  'reactstrap';
import Button from "reactstrap/es/Button";
class SignIn extends Component{
    constructor() {
        super();
        this.state={
            email:'',
            passwd:'',
        };
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handlePassChange=this.handlePassChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleNameChange(event){
        console.log(event);
        this.setState({email: event.target.value,});
    }
    handlePassChange(event){
        this.setState({passwd: event.target.value,});
    }
    handleSubmit(event){
        event.preventDefault();
        this.setState({email:'',passwd:'',});
    }
    render(){
        return (
          <div className='signin'>
              <h2>I Already have an Account</h2>
              <span>Sign in with email and password</span>
              <div className='sign-form'>
              <form onSubmit={this.handleSubmit}>
                  <div className='form-row'>
                  <label className='lab'>E-mail:</label>
                  <input name='email' type='email'  onChange={this.handleNameChange} value={this.state.email} required />

                  </div>
                  <div className='form-row'>
                  <label className='lab'>Password:</label>
                  <input name='passwd' type="password" onChange={this.handlePassChange} value={this.state.passwd} required />
                  </div>
                  <button className='submit' type='submit'>Submit</button>
                  <button className='submit' type='clear' onClick={this.handleSubmit}>Clear</button>
              </form>
              </div>



          </div>
        );
    }
}
export default SignIn;