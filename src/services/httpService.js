import axios from "axios"
import {toast} from "react-toastify";
import logger from "./logService"
axios.interceptors.response.use(null,error=>{
    const expectedError=error.response&&error.response.status>=400&&error.response.status<500
    if(!expectedError){
       // console.log("Logging the error")
      logger.log(error)
       toast.error("Unepected error occured")
    }
    return Promise.reject(error)

})
export default{
    get:axios.get,//methods
    put:axios.put,
    post:axios.post,
    delete:axios.delete
}