//since the sorting will be used in many parts of application we can 
//create and save it common component raisesort 
import React,{Component} from "react";
//here it want to know about the column
class TableHeader extends Component{
    raiseSort=(path)=>{
        const sortColumn={...this.props.sortColumn}
        if(sortColumn.path===path)//here sortcolum represents cusot either on the title,genre.name 2 more
        sortColumn.order=sortColumn.order==="asc"?"desc":"asc";//if cursor is on the same path conver the order to desc
        else{
            sortColumn.path=path;//if cursor on different path 1st set it to path
            sortColumn.order="asc"//convert into ascending
        }
        this.props.onSort(sortColumn)//
    }
    renderSortIcon=(column)=>{
    if(column.path !==this.props.sortColumn.path) return null;
   if (this.props.sortColumn.order==="asc") return <i className="fa fa-sort-asc"></i>
   return <i className="fa fa-sort-desc"></i>
    }
    render(){
        return(
        <thead>
            <tr>
                {this.props.columns.map(column=><th className="clickable" 
                 key={column.path || column.key}
                onClick={()=>this.raiseSort(column.path)}>{column.label}{this.renderSortIcon(column)}</th>)}
            
               
            </tr>
        </thead>
        )
    }
}
export default TableHeader;