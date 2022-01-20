import React,{Component} from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import Form from "./common/form"
class Login extends Form{
    state={
        data:{username:"",password:""},
        errors:{}
    }
    schema={
        username:Joi.string().required().label("Username"),
        password:Joi.string().required().label("Password")
    }
 doSubmit=()=>{
        console.log("submitted")
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
               <button disabled={this.validate()}className="btn btn-primary">Login</button>
             </form>
          </div>
        )
        }
        }

export default Login;