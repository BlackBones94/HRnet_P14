import { DataTable } from '@lephenix47/react-datatable' ;
import { useSelector } from 'react-redux';
import React from 'react';

// const data = [
// 	{ 
// 		name : 'John Doe' , 
// 		job : 'Developer' , 
// 		location : 'San Francisco' ,
// 	  } , 
// 	  { 
// 		name : 'Jane Doe' , 
// 		job : 'Designer' , 
// 		location : 'Los Angeles' 
// 	  } ,
	 
// ]

function DataTableComponent() {

	const Data = useSelector((state) => state.validate)
	const data = Data.inputState
	
	return (
		<DataTable data ={data} sort={true} filter= {true} paging={true}/>
	)
}

export default DataTableComponent;