import httpService from "./httpService";
import config from "../config.json"
export function getMovies(){
    return httpService.get(config.apiUrl+"/movies")
}
export function deleteMovie(movieId){
    return httpService.delete(config.apiUrl+"/movies"+"/"+movieId)
}