import httpService from "./httpService";
import config from "../config.json";
const apiEndPoint=config.apiUrl+"/users";
export function register(user){
  return  httpService.post(apiEndPoint,{
        email:user.username,
    password:user.password,
    name:user.name
    })
    
}