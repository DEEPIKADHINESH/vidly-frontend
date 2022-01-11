import React,{Component} from "react";
import Like  from "../components/common/like";
import TableHeader from "./common/tableHeader";
class MoviesTable extends Component{
   columns=[
       {path:"title",label:"Title"},
       {path:"genre.name",label:"Genre"},
       {path:"numberInStock",label:"Stock"},
       {path:"dailyRentalRate",label:"Rate"},
       {key:"like"},
       {key:"delete"}
   ]
    render(){
        return(
<table className="table"> 
       <TableHeader columns={this.columns} 
       sortColumn={this.props.sortColumn}
       onSort={this.props.onSort}/>
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