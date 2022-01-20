import React,{Component}from "react";
import Joi from "joi-browser";
import Input from "./input";
class Form extends Component{
   state={
       data:{},
       errors:{}
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
  this.doSubmit();
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
renderInput(name,label,type="text"){
    const {data,errors}=this.state;
    return(
        <Input
        name={name}
        label={label}
        type={type}
        onChange={this.handleChange}
        value={data[name]}
        error={errors[name]}
       />
    )
}
renderButton(label){
    return(
        <button disabled={this.validate()}className="btn btn-primary">{label}</button>
    )

}
}
export default Form
