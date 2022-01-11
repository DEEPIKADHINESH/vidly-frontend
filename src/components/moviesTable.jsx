import React,{Component} from "react";
import Like  from "../components/common/like";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
class MoviesTable extends Component{
   columns=[
       {path:"title",label:"Title"},
       {path:"genre.name",label:"Genre"},
       {path:"numberInStock",label:"Stock"},
       {path:"dailyRentalRate",label:"Rate"},
       {key:"like", content:movie=>(<Like liked={movie.liked} 
        onClick={()=>this.props.onLike(movie)} />)},
       {key:"delete",content:movie=>(<button className="btn btn-danger" 
       onClick={()=>this.props.onDelete(movie)}>DELETE</button>)}
   ]
    render(){
        return(
<table className="table"> 
       <TableHeader columns={this.columns} 
       sortColumn={this.props.sortColumn}
       onSort={this.props.onSort}/>
       <TableBody data={this.props.movies} 
       columns={this.columns}/>

</table>
        )
    }
}


export default MoviesTable;