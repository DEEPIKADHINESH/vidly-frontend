import React,{Component} from "react";
import {getMovies} from "../StarterCode/Starter Code/services/fakeMovieService";
import Pagination from "./common/pagination";
import {paginate} from "../utils/paginate";
import ListGroup from "./common/listGroup";
import {getGenres} from "../StarterCode/Starter Code/services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";
class Movies extends Component{
    state={
        movies:[],
        genres:[],
        currentPage:1,
        pageSize:4,
        sortColumn:{path:"title",order:"asc"}
    }
    componentDidMount(){
        const genres=[{_id:"",name:"All Genres"},...getGenres()]
        this.setState({movies:getMovies(),genres:genres})
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
    handleGenreSelect=(genre)=>{
        this.setState({selectedGenre:genre,currentPage:1})
    }
    handleSort=(sortColumn)=>{
        this.setState({sortColumn})
    }
render(){
    const {currentPage,pageSize,selectedGenre,movies:allMovies}=this.state
    if(this.state.movies.length===0)
    return <p>There are no movies in db</p>
    const filtered=selectedGenre && selectedGenre._id ?
     allMovies.filter(m=>m.genre._id === selectedGenre._id):allMovies
     const sorted=_.orderBy(filtered,[this.state.sortColumn.path],[this.state.sortColumn.order])
            const movies=paginate(sorted,currentPage,pageSize)
    return(
        <div className="row">
            <div className="col-2">
                <ListGroup items={this.state.genres}
                // textProperty="name"
                // valueProperty="_id" in realworld want to pass many propery so we can initialise it in listgroup as defaultProps
                selectedItem={this.state.selectedGenre}
                //when item is selected it is rerendered from this.setState of handleGenreSelect
                onItemSelect={this.handleGenreSelect}
                />
                
            </div>
        <div className="col">
       <p>Showing {filtered.length} movies in db</p>
<MoviesTable movies={movies}
             onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              sortColumn={this.state.sortColumn}/>
<Pagination itemsCount={filtered.length} 
currentPage={this.state.currentPage}
pageSize={this.state.pageSize} onPageChange={this.handlePageChange}/>
</div>
</div>
    )
}
}
export default Movies;