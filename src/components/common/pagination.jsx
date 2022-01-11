import React from "react";
import _ from "lodash";
import propTypes from "prop-types"
function Pagination(props){
const {itemsCount,pageSize,currentPage}=props;
//console.log(props.currentPage)
const pagesCount=Math.ceil(itemsCount/pageSize);
if(pagesCount===1) return null;
const pages=_.range(1,pagesCount+1)
    return(
        <nav>
            <ul className="pagination" style={{cursor:"pointer"}}>
                {pages.map(page=><li key={page} className={page ===currentPage ? "page-item active":"page-item"}>{/*className="page-item"*/} 
                    <a  className="page-link"
                     onClick={()=>props.onPageChange(page)}>{page} </a></li>)}
                
            </ul>
        </nav>
    )
}
Pagination.propTypes={
    itemsCount:propTypes.number.isRequired,
    pageSize:propTypes.number.isRequired,
    currentPage:propTypes.number.isRequired,
    onPageChange:propTypes.func.isRequired
}// it is usedto check wheater the passed value is number if it is string it will show it in console
//onpagechange is function so function is passed
export default Pagination;