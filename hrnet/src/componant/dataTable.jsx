import { DataTable } from '@lephenix47/react-datatable' ;

const data = [
	{ 
		name : 'John Doe' , 
		job : 'Developer' , 
		location : 'San Francisco' ,
	  } , 
	  { 
		name : 'Jane Doe' , 
		job : 'Designer' , 
		location : 'Los Angeles' 
	  } ,
	 
]

function DataTableComponent() {
	return (
		<DataTable data ={data} sort={true} filter= {true} paging={true}/>
	)
}

export default DataTableComponent;