import httpService from "./httpService";
export function getGenres() {
  return  httpService.get("http://localhost:5000/api/genres")
  }