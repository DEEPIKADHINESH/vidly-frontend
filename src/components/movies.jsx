import React,{Component} from "react";
import {getMovies} from "../StarterCode/Starter Code/services/fakeMovieService";
import Like  from "../components/common/like";
import Pagination from "./common/pagination";
import {paginate} from "../utils/paginate"
class Movies extends Component{
    state={
        movies:getMovies(),
        currentPage:2,
        pageSize:4
    }
    handleDelete=(movie)=>{
     const movies=this.state.movies.filter(m=>m._id !== movie._id)
     this.setState({movies})
    }
    handleLike=(movie)=>{
        const movies=[...this.state.movies];
        const index=movies.indexOf(movie);
        movies[index]={...movies[index]};
        movies[index].liked=!movies[index].liked;
        this.setState({movies})
    }
    handlePageChange=(page)=>{
        this.setState({currentPage:page})
    }
render(){
    const {currentPage,pageSize,movies:allMovies}=this.state
    if(this.state.movies.length===0)
    return <p>There are no movies in db</p>
            const movies=paginate(allMovies,currentPage,pageSize)
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
        <th></th>
        <th></th>
    </tr>
    </thead>
    <tbody>
        {movies.map(movie=>(<tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
           <td><Like liked={movie.liked} onClick={()=>this.handleLike(movie)} /></td> {/*here liked is the inbuild property */}
            <td><button className="btn btn-danger" onClick={()=>this.handleDelete(movie)}>DELETE</button></td>
        </tr>))}
     </tbody>
</table>
<Pagination itemsCount={this.state.movies.length} 
currentPage={this.state.currentPage}
pageSize={this.state.pageSize} onPageChange={this.handlePageChange}/>
</div>
    )
}
}
export default Movies;