import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { validate } from "../store/employeeCreateSlice";
import { useState } from "react";
import states from "../Data/states.json"

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
    const [isModalOpen, setIsModalOpen] = useState(false)

    const form = document.getElementById('create-employee')
    

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
        if(lastNameInput || firstNameInput 
            // || streetInput || cityInput || valueStateSelect || valueDepartmentSelect|| zipCodeInput || startDateInput ||birthDateInput
             === '') {
            alert('complete le formulaire')
            form.reset()
        }
        

        console.log(dispatch(validate({
            firstNameInput,
            lastNameInput,
            streetInput,
            cityInput,
            valueStateSelect,
            valueDepartmentSelect,
            zipCodeInput,
            startDateInput,
            birthDateInput,
        })))
    }


    // function openModal(){
    //     setIsModalOpen(true);
    // }

    return(
        <div class="container">
            <Link to='/Employee'>View Current Employees</Link>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <label for="first-name">First Name</label>
                <input type="text" id="first-name" onChange={e => setFirstNameInput(e.target.value)} />

                <label for="last-name">Last Name</label>
                <input type="text" id="last-name" onChange={e => setLastNameInput(e.target.value)}/>

                <label for="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="date"onChange={e => setBirthDateInput(e.target.value)} />

                <label for="start-date">Start Date</label>
                <input id="start-date" type="date" onChange={e => setStartDateInput(e.target.value)}/>

                <fieldset class="address">
                    <legend>Address</legend>

                    <label for="street">Street</label>
                    <input id="street" type="text" onChange={e => setStreetInput(e.target.value)} />

                    <label for="city">City</label>
                    <input id="city" type="text" onChange={e => setCityInput(e.target.value)}/>

                    <label for="state">State</label>
                    <select
                        name="state"
                        id="state"
                        onChange={e => setValueStateSelect(e.target.value)}
                        >
                        <option value="">Choisir un state</option>
                        {states.map((state) => {
                            return <option key={state.stateID}>
                                {state.name}
                            </option>
                        })}
                    </select>

                    <label for="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" onChange={e => setZipCodeInput(e.target.value)} />
                </fieldset>

                <label for="department">Department</label>
                <select name="department" id="department" onChange={e => setValueDepartmentSelect(e.target.value)}>
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