import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { validate } from "../store/employeeCreateSlice";
import { useState } from "react";
import states from "../Data/states.json";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Modal from "modal-maker/dist";


import SelectOption from "./selected";

function FormEmployee() {

    const dispatch = useDispatch();

    const [firstNameInput, setFirstNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");
    const [birthDateInput, setBirthDateInput] = useState(new Date());
    const [startDateInput, setStartDateInput] = useState(new Date());
    const [streetInput, setStreetInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [zipCodeInput, setZipCodeInput] = useState('');
    const [valueDepartmentSelect, setValueDepartmentSelect] = useState('');
    const [valueStateSelect, setValueStateSelect] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false)

    const [errorMessage, setErrorMessage] = useState('')

    const [buttonDisabled, setButtonDisabled] = useState(false);

    // const form = document.getElementById('create-employee')

    function openModal(){
        setIsModalOpen(true);
    }

    function closeModal(e){
        e.preventDefault();
        setIsModalOpen(false)
    } 


    
    const handleSubmitForm = e => {
        if(  lastNameInput === "" || firstNameInput === "" || streetInput === "" || cityInput === "" || zipCodeInput === "" || valueDepartmentSelect === "" || valueStateSelect === "") {
            // alert('complete le formulaire')
            // form.reset()
            setButtonDisabled(false)
            setErrorMessage("Formulaire Incomplet !")
        } else {
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
            setErrorMessage('')
            openModal() 
        }
    }



    console.log(lastNameInput)

    return(
        <div class="container">
            <Link className="linkEmployee" to='/Employee'>View Current Employees</Link>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <label for="first-name">First Name</label>
                <input type="text" id="first-name" onChange={e => setFirstNameInput(e.target.value)} />

                <label for="last-name">Last Name</label>
                <input type="text" id="last-name" onChange={e => setLastNameInput(e.target.value)}/>

                <label for="date-of-birth">Date of Birth</label>
                <DatePicker id="date-of-birth" type="date" selected={birthDateInput} onChange={date => setBirthDateInput(date)}/>

                <label for="start-date">Start Date</label>
                <DatePicker id="start-date" type="date" selected={startDateInput} onChange={date => setStartDateInput(date)} />

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
                    <SelectOption />
                </select>
            </form>
            
            <div>
                {errorMessage && <div className="error">{errorMessage}</div>}
                <button disabled={buttonDisabled} type="submit" className="btn-save" onClick={handleSubmitForm}>Save</button>
            </div>           
            <Modal
                isOpen = {isModalOpen}
                closeModal= {closeModal}

            />
        </div>
    )
}

export default FormEmployee;