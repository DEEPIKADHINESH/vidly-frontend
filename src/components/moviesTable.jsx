import React,{Component} from "react";
import Like  from "../components/common/like";
import Table from "./common/table";
import {Link} from "react-router-dom"; 
import { getCurrentUser } from "../services/authService";
class MoviesTable extends Component{
   columns=[
       {path:"title",label:"Title",
       content:movie=>( <Link to={`/movies/${movie._id}`}>{movie.title}</Link>)},
       {path:"genre.name",label:"Genre"},
       {path:"numberInStock",label:"Stock"},
       {path:"dailyRentalRate",label:"Rate"},
       {key:"like", content:movie=>(<Like liked={movie.liked} 
        onClick={()=>this.props.onLike(movie)} />)},
       
   ]
   constructor(){
       super()
       const user=getCurrentUser()
       if(user && user.isAdmin)
       this.columns.push(
        {key:"delete",content:movie=>(<button className="btn btn-danger" 
        onClick={()=>this.props.onDelete(movie)}>DELETE</button>)}
       )
   }
    render(){
        return(
           <Table data={this.props.movies}
           onSort={this.props.onSort}
           sortColumn={this.props.sortColumn}
           columns={this.columns}/>
        )
        
    }
}


export default MoviesTable;