import  React from "react";
function MoviesForm({match,history}){
    return(
        <div>
            <h1>Movies Form{match.params.id}</h1>
            <button className="btnbtn-primary" 
            onClick={()=>history.push("/movies")}>Save</button>
        </div>
        
    )
}
export default MoviesForm;