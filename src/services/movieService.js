import httpService from "./logService";
export function getMovies(){
    return httpService.get("http://localhost:5000/api/movies")
}
export function deleteMovie(movieId){
    return httpService.delete("http://localhost:5000/api/movies"+movieId)
}