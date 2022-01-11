import React from "react";
function ListGroup(props){
    const {items,valueProperty,textProperty,onItemSelect,selectedItem}=props
    return(
    //    <ul className="list-group">
    //        {items.map(item=>(<li key={item._id} 
    //        className="list-group-item">{item.name}</li>))}
           
    //    </ul>//here we cantable to check wheater thename and id passed is correct or not 
    //so we are setting the parameter in movies.jsx as textproperty and valueproperty and passing here
    <ul className="list-group" style={{cursor:"pointer"}}>
        {items.map(item=>(<li  onClick={()=>onItemSelect(item)}key={item[valueProperty]} 
        className={item ===selectedItem ? "list-group-item active":"list-group-item" } >{item[textProperty]}
        </li>))}
        </ul>
    )
}
ListGroup.defaultProps={  
    valueProperty:"_id",
    textProperty:"name"

}
export default ListGroup;