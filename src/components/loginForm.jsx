import React,{Component} from "react";
import Joi from "joi-browser";
import Input from "./common/input";
class Login extends Component{
    state={
        data:{username:"",password:""},
        errors:{}
    }
    schema={
        username:Joi.string().required().label("Username"),
        password:Joi.string().required().label("Password")
    }
    validate=()=>{
        const {error}=Joi.validate(this.state.data,this.schema,{abortEarly:false});
        if(!error) return null;
        //here path and message comes from joi to see this use console.log(result)
        const errors={}
        for(let item of error.details)
        errors[item.path[0]]=item.message;
        return errors;
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
     const obj={[input.name]:input.value}
     const schema={[input.name]:this.schema[input.name]}
   const {error}=  Joi.validate(obj,schema)
   return error?error.details[0].message:null;

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