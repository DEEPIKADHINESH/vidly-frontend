import React,{Component} from "react";
import Like  from "../components/common/like";
class MoviesTable extends Component{
    raiseSort=(path)=>{
        const sortColumn={...this.props.sortColumn}
        if(sortColumn.path===path)//here sortcolum represents cusot either on the title,genre.name 2 more
        sortColumn.order=sortColumn.order==="asc"?"desc":"asc";//if cursor is on the same path conver the order to desc
        else{
            sortColumn.path=path;//if cursor on different path 1st set it to path
            sortColumn.order="asc"//convert into ascending
        }
        this.props.onSort(sortColumn)//
    }
    render(){
        return(
<table className="table"> 
<thead>
    <tr>
        <th onClick={()=>this.raiseSort("title")}>Title</th>
        <th onClick={()=>this.raiseSort("genre.name")}>Genre</th>
        <th onClick={()=>this.raiseSort("numberInStock")}>Stock</th>
        <th onClick={()=>this.raiseSort("dailyRentalRate")}>Rate</th>
        <th></th>
        <th></th>
    </tr>
    </thead>
    <tbody>
        {this.props.movies.map(movie=>(<tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
           <td><Like liked={movie.liked} onClick={()=>this.props.onLike(movie)} /></td> {/*here liked is the inbuild property */}
            <td><button className="btn btn-danger" onClick={()=>this.props.onDelete(movie)}>DELETE</button></td>
        </tr>))}
     </tbody>
</table>
        )
    }
}


export default MoviesTable;