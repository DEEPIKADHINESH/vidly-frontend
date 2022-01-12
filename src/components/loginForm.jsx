import React,{Component} from "react";
import {Link} from "react-router-dom";
import Input from "./common/input";
class Login extends Component{
    state={
        data:{username:"",password:""},
        errors:{}
    }
    validate=()=>{
        const errors={}
        if(this.state.data.username.trim()==="")
       errors.username="username is required"
        if(this.state.data.password.trim()==="")
       errors.password="password is required"
        return Object.keys(errors).length===0 ? null :errors
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const errors=this.validate();
        this.setState({errors: errors||{}})
        //here {} is used in errors setstate bz the error propertyalways want object if it is not set when password is onlypased then the page rerender 
        //in console cannot read property of null
        if (errors) return;
        console.log("submitted")
    }
    validateProperty=(input)=>{
     if(input.name==="username"){
         if(input.value.trim()==="") return "Username is required"
     }
     if(input.name==="password"){
        if(input.value.trim()==="") return "Password is required"
    }
    }
    handleChange=({currentTarget:input})=>{
        const errors={...this.state.errors};
        const errorMessage=this.validateProperty(input)
        if(errorMessage) errors[input.name]=errorMessage;
        else delete errors[input.name];
        const data={...this.state.data}
        data[input.name]=input.value;
        this.setState({data,errors})
    }
    render(){
        return(
            <div>
                <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
          <Input
              name="username"
              label="Username"
              onChange={this.handleChange}
              value={this.state.data.username}
              error={this.state.errors.username}
             />
            <Input
              name="password"
              label="Password"
              onChange={this.handleChange}
              value={this.state.data.password}
              error={this.state.errors.password}/>
               {/* <Link to="/movies"><button className="btn btn-primary">Login</button></Link> */}
               <button className="btn btn-primary">Login</button>
             </form>
          </div>
        )
        }
        }

export default Login;