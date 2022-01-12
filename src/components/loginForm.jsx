import React,{Component} from "react";
import {Link} from "react-router-dom";
import Input from "./common/input";
class Login extends Component{
    state={
        data:{username:"",password:""}
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log("submitted")
        this.setState({e})
    }
    handleChange=e=>{
        const data={...this.state.data}
        data[e.currentTarget.name]=e.currentTarget.value;
        this.setState({data})
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
             />
            <Input
              name="password"
              label="Password"
              onChange={this.handleChange}
              value={this.state.data.password}/>
               <Link to="/movies"><button className="btn btn-primary">Login</button></Link>
             </form>
          </div>
        )
        }
        }

export default Login;