import React, {useState} from 'react';
import classes from './authModal.module.css';
import {produce} from 'immer';
import FormFormat from '../design/inputField/formFormat';

const AuthModal = () =>{
    const [authData, setAuthData] = useState({
        login: FormFormat('input', 'email', 'Email ID', ''),
        password: FormFormat('input', 'password', 'Password', '')
    });

    const [formValid, setFormValid] = useState(false);

    // formSubmitHandler = () => {

    // }

    const checkValidity = (value,rules) => {
        let isValid = true;

        if(!rules){
            return true;
        }
        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLength){
            isValid = value.length <= rules.minLength && isValid;
        }
        if(rules.maxLength){
            isValid = value.length >= rules.maxLength && isValid;
        }

        return isValid;
    }

    function inputChangeHandler(event, inputIdentifier) {
        const updatedAuthData = produce(authData, draftState => {
            draftState[inputIdentifier].value = event.target.value;
            draftState[inputIdentifier].touched = true;
            draftState[inputIdentifier].valid = checkValidity(draftState[inputIdentifier].value, draftState[inputIdentifier].validation);
        });
        console.log(updatedAuthData[inputIdentifier].value);
        let isFormValid = true;
        for (let id in updatedAuthData) {
            isFormValid = updatedAuthData[id].valid && isFormValid;
        }
        setAuthData(updatedAuthData);
        setFormValid(isFormValid);
    }

    const formElementList = [];
    for(let id in authData){
        formElementList.push({
            id: id,
            config: authData[id]
        });
    }

    const form = <form>
                    {formElementList.map(formElement => (
                        <input
                            type = {formElement.config.elementConfig.type}
                            placeholder = {formElement.config.elementConfig.placeholder}
                            value = {formElement.config.value}
                            onChange = {event => inputChangeHandler(event, formElement.id)}
                            />
                    ))}
                    <button type = "submit" disabled = {formValid}>submit</button>
                </form>

    return (
        <div className = {classes.authModal}>
            {form}
        </div>
    )
}

export default AuthModal;