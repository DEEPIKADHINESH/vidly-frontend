import httpService from "./httpService";
import config from "../config.json"
const apiEndPoint=config.apiUrl+"/movies"
export function getMovies(){
    return httpService.get(apiEndPoint)
}
export function getMovie(movieId){
    return httpService.get(apiEndPoint+"/"+movieId)
}
export function saveMovie(movie){
    if(movie._id){
        const body={...movie}
        delete body._id;
      return  httpService.put(apiEndPoint+"/"+movie._id,body)
    }
    return httpService.post(apiEndPoint,movie) 

}
export function deleteMovie(movieId){
    return httpService.delete(apiEndPoint+"/"+movieId)
}