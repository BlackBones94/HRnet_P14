import { Link } from "react-router-dom";
import DataTableComponent from "./dataTable";

function ListEmployee() {
    return (
        <div id="employee-div" class="container">
            <h1>Current Employees</h1>
            <table id="employee-table" class="display"></table>
            <Link className="linkHome" to="/">Home</Link>
            <DataTableComponent />
        </div>
    )
}

export default ListEmployee;