import _ from "lodash";
export function paginate(items,pageNumber,pageSize){
    const startIndex=(pageNumber-1)*pageSize
   return _(items).slice(startIndex).take(pageSize).value()

}


//here items refer to movies,pageNumber refers to currentpage,pageSize is pagesize all are want to pass in same pattern
//here items array is 1stconverted in lodash object and the page is taken from startIndex to pagesize 
//and value method is given to convert the lodash object into items array

