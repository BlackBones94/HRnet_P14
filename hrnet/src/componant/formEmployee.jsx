import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { validate } from "../store/employeeCreateSlice";
import { useState } from "react";

function FormEmployee() {

    const dispatch = useDispatch();

    const [firstNameInput, setFirstNameInput] = useState('');
    const [lastNameInput, setLastNameInput] = useState('');
    const [birthDateInput, setBirthDateInput] = useState('');
    const [startDateInput, setStartDateInput] = useState('');
    const [streetInput, setStreetInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [zipCodeInput, setZipCodeInput] = useState('');
    const [valueDepartmentSelect, setValueDepartmentSelect] = useState('');
    const [valueStateSelect, setValueStateSelect] = useState('');


    const handleSubmitForm = e => {
        e.preventDefault();
        dispatch(validate({
            firstNameInput,
            lastNameInput,
            streetInput,
            cityInput,
            valueStateSelect,
            valueDepartmentSelect,
            zipCodeInput,
            startDateInput,
            birthDateInput,
        }))
    }


    return(
        <div class="container">
            <Link to='/Employee'>View Current Employees</Link>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <label for="first-name">First Name</label>
                <input type="text" id="first-name" onChange={e => setFirstNameInput(e.target.value)} />

                <label for="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label for="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text" />

                <label for="start-date">Start Date</label>
                <input id="start-date" type="text" />

                <fieldset class="address">
                    <legend>Address</legend>

                    <label for="street">Street</label>
                    <input id="street" type="text" />

                    <label for="city">City</label>
                    <input id="city" type="text" />

                    <label for="state">State</label>
                    <select name="state" id="state"></select>

                    <label for="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </fieldset>

                <label for="department">Department</label>
                <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            </form>

            <button onClick={handleSubmitForm}>Save</button>
        </div>
    )
}

export default FormEmployee;