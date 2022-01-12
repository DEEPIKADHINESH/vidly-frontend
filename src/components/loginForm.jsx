import React,{Component} from "react";
import {Link} from "react-router-dom";
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
              <div className="form-group">
              <label htmlFor="email" >Email</label><br/>
              <input typeof="email" name="username" id="email"
              value={this.state.data.username}
               onChange={this.handleChange}></input><br/>
              </div>
              <div className="form-group">
              <label htmlFor="password">Password</label><br/>
              <input typeof="password" name="password"id="password"
               value={this.state.data.password} onChange={this.handleChange}></input><br/>
               </div>
               <Link to="/movies"><button className="btn btn-primary">Login</button></Link>
               
          </form>
          
          </div>
        )
    }
    
}

export default Login;