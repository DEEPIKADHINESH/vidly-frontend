import httpService from "./httpService";
import config from "../config.json"
const apiEndPoint=config.apiUrl+"/movies"
export function getMovies(){
    return httpService.get(apiEndPoint)
}
export function getMovie(movieId){
    return httpService.get(apiEndPoint+"/"+movieId)
}
export function saveMovie(){

}
export function deleteMovie(movieId){
    return httpService.delete(apiEndPoint+"/"+movieId)
}