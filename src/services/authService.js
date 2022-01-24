import httpService from "./httpService";
import config from "../config.json";
import jwtDecode from "jwt-decode"
const apiEndPoint=config.apiUrl+"/auth";
const tokenKey="token"
export async function login(email,password){
  const {data:jwt}=  await  httpService.post(apiEndPoint,{email,password})
  localStorage.setItem(tokenKey,jwt)
}
export function loginwithJwt(jwt){
    localStorage.setItem(tokenKey,jwt)
}
export  function logout(){
    localStorage.removeItem(tokenKey);
}
export function getCurrentUser(){
    try{
        const jwt=localStorage.getItem(tokenKey)
      return jwtDecode(jwt)
      }
      catch{
          return null;
      }
}

export default {
    login,
    logout,
    getCurrentUser,
    loginwithJwt
}
