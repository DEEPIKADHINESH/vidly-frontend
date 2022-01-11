import React,{Component} from "react";
import _ from "lodash"
class TableBody extends Component{
    renderCell =(item,column)=>{
        //after initilizing the code for likeaddeletein content also we cant able tosee
        //used to display the like and delete button in dom
if(column.content) return column.content(item)
return _.get(item,column.path)
    }
    render(){
        const {data,columns}=this.props
        return(
<tbody>
    {data.map(item=><tr key={item._id}>
      {columns.map(column=><td key={item._id + (column.path||column.key)}>
          {this.renderCell(item,column)}</td>)}  
    </tr>)}
</tbody>
        )
    }
}
export default  TableBody;