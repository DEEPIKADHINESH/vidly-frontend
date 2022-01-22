import React,{Component} from "react";
import {getMovies,deleteMovie} from "../services/movieService";
import Pagination from "./common/pagination";
import {paginate} from "../utils/paginate";
import ListGroup from "./common/listGroup";
import {getGenres} from "../services/genreService";
import MoviesTable from "./moviesTable";
import {Link} from "react-router-dom";
import _ from "lodash";
import SearchBox from "./common/searchBox";
class Movies extends Component{
    state={
        movies:[],
        genres:[],
        currentPage:1,
        pageSize:4,
        searchQuery:"",
    selectedGenre: null,
        sortColumn:{path:"title",order:"asc"}
    }
    async componentDidMount(){
       const {data}=await getGenres()
        const genres=[{_id:"",name:"All Genres"},...data]
        this.setState({movies:getMovies(),genres:genres})
    }
handleDelete=(movie)=>{
     const movies=this.state.movies.filter(m=>m._id !== movie._id)
     this.setState({movies})
     deleteMovie(movie._id)
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
        this.setState({selectedGenre:genre,searchQuery:"",currentPage:1})
    }
    handleSort=(sortColumn)=>{
        this.setState({sortColumn})
    }
    handleSearch = query => {
        this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
      };
    getPagedData=()=>{
        const {currentPage,pageSize,selectedGenre,movies:allMovies,searchQuery}=this.state
        let filtered=allMovies;
        // const filtered=selectedGenre && selectedGenre._id ?
        // allMovies.filter(m=>m.genre._id === selectedGenre._id):allMovies
        if(searchQuery)
        filtered=allMovies.filter(m=>m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
        else if(selectedGenre && selectedGenre._id)
        filtered= allMovies.filter(m=>m.genre._id === selectedGenre._id)
        const sorted=_.orderBy(filtered,[this.state.sortColumn.path],[this.state.sortColumn.order])
        const movies=paginate(sorted,currentPage,pageSize);
        return {totalCount:filtered,data:movies}
    }
render(){
    
    if(this.state.movies.length===0)
    return <p>There are no movies in db</p>
    const {totalCount,data:movies}=this.getPagedData()
   
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
       <p>Showing {totalCount.length} movies in db</p>
       <Link to="/movies/new" className="btn btn-primary">NEW MOVIE</Link>
       <SearchBox value={this.state.searchQuery} onChange={this.handleSearch} />
<MoviesTable movies={movies}
             onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              sortColumn={this.state.sortColumn}/>
<Pagination itemsCount={totalCount.length} 
currentPage={this.state.currentPage}
pageSize={this.state.pageSize} onPageChange={this.handlePageChange}/>
</div>
</div>
    )
}
}
export default Movies;