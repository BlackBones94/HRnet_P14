import DataTable from '@ognimelo/hrnet-datatable'

const columns = [
	{ title: 'First Name', data: 'firstName' },
	{ title: 'Last Name', data: 'lastName' },
	{ title: 'Date of Birth', data: 'dateOfBirth' },
	{ title: 'City', data: 'city' },
]

const data = [
	{
		firstName: 'Bob',
		lastName: 'Unicorn',
		dateOfBirth: '11/05/1995',
		city: 'Paris',
	}
]

export default () => {
	return (
		<div id='employee-div' className='container'>
			<h1>Data Table</h1>
			<DataTable columns={columns} data={data} />
		</div>
	)
}