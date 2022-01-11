import React from "react";
import Like  from "../components/common/like";
const MoviesTable=(props)=>{
    const {onSort}=props
    return(
<table className="table"> 
<thead>
    <tr>
        <th onClick={()=>onSort("title")}>Title</th>
        <th onClick={()=>onSort("genre.name")}>Genre</th>
        <th onClick={()=>onSort("numberInStock")}>Stock</th>
        <th onClick={()=>onSort("dailyRentalRate")}>Rate</th>
        <th></th>
        <th></th>
    </tr>
    </thead>
    <tbody>
        {props.movies.map(movie=>(<tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
           <td><Like liked={movie.liked} onClick={()=>props.onLike(movie)} /></td> {/*here liked is the inbuild property */}
            <td><button className="btn btn-danger" onClick={()=>props.onDelete(movie)}>DELETE</button></td>
        </tr>))}
     </tbody>
</table>
    )
}
export default MoviesTable;