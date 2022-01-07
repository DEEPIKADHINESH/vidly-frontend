import React,{Component} from "react";
import {getMovies} from "../StarterCode/Starter Code/services/fakeMovieService";

class Movies extends Component{
    state={
        movies:getMovies()
    }
    handleDelete=(movie)=>{
     const movies=this.state.movies.filter(m=>m._id !== movie._id)
     this.setState({movies})
    }
render(){
    if(this.state.movies.length===0)
            return <p>There are no movies in db</p>
    return(
        <div>
       <p>Showing {this.state.movies.length} movies in db</p>
<table className="table"> 
<thead>
    <tr>
        <th>Title</th>
        <th>Genre</th>
        <th>Stock</th>
        <th>Rate</th>
    </tr>
    </thead>
    <tbody>
        {this.state.movies.map(movie=>(<tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td><button className="btn btn-danger" onClick={()=>this.handleDelete(movie)}>DELETE</button></td>
        </tr>))}
        
    </tbody>
    
    </table>

</div>
    )
}
}
export default Movies;