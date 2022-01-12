import React from "react";
const Input=({name,label,value,onChange,error})=>{
    return(
    <div className="form-group">
    <label htmlFor={name}>{label}</label><br/>
    <input 
    value={value} 
     onChange={onChange}
     name={name}
     id={name}
     type="text"
     className="form-control"
     ></input><br/>
     {error && <div className="alert alert-danger">{error}</div>}
     </div>
     
    )
}
export default Input;