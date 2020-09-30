import React,{Component} from "react";
class SignUp extends Component{
    constructor() {
        super();
        this.state={
            name: '',
            email:'',
            passwd:'',
            rpasswd:'',
        };
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handlePassChange=this.handlePassChange.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handlerPassChange=this.handlerPassChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleNameChange(event){
        // console.log(event);
        this.setState({name: event.target.value,});
    }
    handleEmailChange(event){
        //console.log(event);
        this.setState({email: event.target.value,});
    }
    handlePassChange(event){
        this.setState({passwd: event.target.value,});
    }
    handlerPassChange(event){
        this.setState({rpasswd: event.target.value,});
    }
    handleSubmit(event){
        event.preventDefault();
        this.setState({name: '',
            email:'',
            passwd:'',
            rpasswd:'',});
    }
    render(){
        return (
            <div className='signin'>
                <h2>I Already have an Account</h2>
                <span>Sign in with email and password</span>
                <div className='sign-form'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-row'>
                            <label className='lab'>Name:</label>
                            <input name='name' type='name'  onChange={this.handleNameChange} value={this.state.name} required />

                        </div>
                        <div className='form-row'>
                            <label className='lab'>E-mail:</label>
                            <input name='email' type='email'  onChange={this.handleEmailChange} value={this.state.email} required />

                        </div>
                        <div className='form-row'>
                            <label className='lab'>Password:</label>
                            <input name='passwd' type="password" onChange={this.handlePassChange} value={this.state.passwd} required />
                        </div>
                        <div className='form-row'>
                            <label className='lab'>Password:</label>
                            <input name='rpasswd' type="password" onChange={this.handlerPassChange} value={this.state.rpasswd} required />
                        </div>
                        <button className='submit' type='submit'>Submit</button>
                        <button className='submit' type='clear' onClick={this.handleSubmit}>Clear</button>
                    </form>
                </div>



            </div>
        );
    }
}
export default SignUp;