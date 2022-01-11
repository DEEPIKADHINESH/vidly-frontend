import React from "react";
import _ from "lodash";
function Pagination(props){
const {itemsCount,pageSize}=props;
console.log(props.currentPage)
const pagesCount=Math.ceil(itemsCount/pageSize);
if(pagesCount===1) return null;
const pages=_.range(1,pagesCount+1)
    return(
        <nav>
            <ul className="pagination">
                {pages.map(page=><li key={page} className={page ===props.currentPage ? "page-item active":"page-item"}>{/*className="page-item"*/} 
                    <a  className="page-link" onClick={()=>props.onPageChange(page)}>{page} </a></li>)}
                
            </ul>
        </nav>
    )
}
export default Pagination;