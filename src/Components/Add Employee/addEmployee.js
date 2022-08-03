import React, {useState} from 'react';
import classes from './addEmployee.module.css';
import FormFormat from '../design/inputField/formFormat';
// import Input from '../design/inputField/Input';
import produce from 'immer';

const EmployeeForm = (props) => {

    const [formData, setFormData] = useState({
        firstName: FormFormat('input', 'text', 'First Name', ''),
        lastName: FormFormat('input', 'text', 'Last Name', ''),
        gender: {
            elementType: 'select',
            elementConfig:{
                options: [
                    {value: 'male', displayValue: 'Male'},
                    {value: 'female', displayValue: 'Female'},
                    {value: 'transgender', displayValue: 'Transgender'}
                ],
                placeholder: 'Gender'
            },
            value: '',
            validation: {},
            valid: true
        },
        mobileNo: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: 'Mobile No.'
            },
            value: '',
            validation: {
                required: true,
                minLength: 10,
                maxLength: 10
            },
            valid: false,
            touched: false
        },
        emailId: FormFormat('input', 'email', 'Email ID', ''),
        empId: FormFormat('input', 'text', 'Employee ID', ''),
        houseNo: FormFormat('input', 'text', 'House No./Street/Locality', ''),
        city: FormFormat('input', 'text', 'city', ''),
        state: FormFormat('input', 'text', 'State', ''),
        pincode: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: 'Pincode'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6,
                maxLength: 6
            },
            valid: false,
            touched: false
        },
        country: FormFormat('input', 'text', 'Country', ''),
        position: FormFormat('input', 'text', 'Position', ''),
        basePay: FormFormat('input', 'number', 'Base Salary', ''),
        joiningBonus: FormFormat('input', 'number', 'Joining Bonus', ''),
        stockValue: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: 'Stock Value'
            },
            value: '',
            validation: {
                required: false
            },
            valid: false,
            touched: false
        },
        joiningDate: FormFormat('input', 'date', 'Joining Date', '')
    });

    // console.log(formData);

    const [formIsValid, setFormIsValid] = useState(false);

    // handling the form submit request
    // formSubmitHandler = (event) => {
    //     event.preventDefault();

    // }

    // checking the validity of the form elements
    
    const list = [];
    for(let key in formData){
        list.push({
            key: key,
            config: {
                ...formData[key]
            }
        })
    }

    // validity checker
    const checkValidity = (value, rules) => {
        let isValid = true;

        if(!rules){
            return isValid;
        }

        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength){
            isValid = value.length < rules.minLength && isValid;
        }

        if(rules.maxLength){
            isValid = value.length > rules.maxLength && isValid; 
        }

        return isValid;
    }

    //inputHandler
    const inputChangeHandler = (event, id) => {
        const updatedData = produce(draftState => {
            // console.log(id);
            draftState[id].value = event.target.value;
            draftState[id].valid = checkValidity(draftState[id].value, draftState[id].validation)
        })

        let isFormValid = true;
        for(let key in updatedData){
            isFormValid = updatedData[key].valid && isFormValid;
        }

        setFormData(updatedData);
        setFormIsValid(isFormValid);
        // console.log(formData[id].value);
    }

    const form = (
        <form>
            {list.map(element => {
                let inputElement = null;
                
                switch(element.config.elementType){
                    case 'select':
                        inputElement = <select
                                            key = {element.key}
                                            className = {classes.InputElement}
                                            placeholder = {element.config.elementConfig.placeholder}
                                            value = {element.config.value}
                                            onChange = {event => inputChangeHandler(event, element.key)}
                                        >
                                            <option value = "" disabled hidden selected>Select {element.config.elementConfig.placeholder}</option>
                                            {element.config.elementConfig.options.map(option => (
                                                <option
                                                    key = {option.value}
                                                    value = {option.value}
                                                >
                                                    {option.displayValue}
                                                </option>
                                            ))}
                                        </select>
                    break;
                    default:
                        inputElement = <input
                                            key = {element.key}
                                            className = {classes.InputElement}
                                            {...element.config.elementConfig}
                                            value = {element.config.value}
                                            onChange = {event => inputChangeHandler(event, element.key)}
                                        />
                }
                return (
                    <React.Fragment>
                        {inputElement}
                    </React.Fragment>
                )
                    
                
            })}
            <button className = {classes.button} disable = {formIsValid}>Submit</button>
        </form>
    )

    return (
        <div className = {classes.addEmployeeForm}>
            <h1>Enter Employee Details</h1>
            {form}
        </div>
    )
}

export default EmployeeForm;



//not working uncaught error cannot read properties of undefined
// const checkValidity = (value,rules) => {
//     let isValid = true;

//     if(!rules){
//         return true;
//     }
//     if(rules.required){
//         isValid = value.trim() !== '' && isValid;
//     }
//     if(rules.minLength){
//         isValid = value.length <= rules.minLength && isValid;
//     }
//     if(rules.maxLength){
//         isValid = value.length >= rules.maxLength && isValid;
//     }

//     return isValid;
// }

// //handling the input changes
// const inputChangeHandler = (event, inputIdentifier) => {
//     console.log('Input Handler');
//     // console.log(formData[inputIdentifier].value);
//     const updatedForm = produce(formData, draftState => {
//         console.log(event.target.value);
//         console.log(draftState[inputIdentifier]);
//         draftState[inputIdentifier].value.append(event.target.value);
//         draftState[inputIdentifier].validity = checkValidity(draftState.inputIdentifier.value, draftState.inputIdentifier.validation);
//         draftState[inputIdentifier].touched = true;
//     })
//     // console.log('Input Handler');

//     // console.log(updatedForm);

//     let isFormValid = true;
//     for(let inputId in updatedForm){
//         isFormValid = updatedForm[inputId].valid && isFormValid;
//     }

//     setFormIsValid(isFormValid);
//     setFormData(updatedForm);
// }

// const formElementList = [];
// for(let key in formData){
//     formElementList.push({
//         id: key,
//         config: formData[key]
//     })
// }


// const form = (
//     <form className = {classes.form}>
//             {formElementList.map(formElement => (
//                 <Input
//                     key = {formElement.id}
//                     elementType = {formElement.config.elementType}
//                     elementConfig = {formElement.config.elementConfig}
//                     value = {formElement.config.value}
//                     changed = {event => inputChangeHandler(event, formElement.id)}
//                     invalid = {!formElement.config.valid}
//                     shouldValidate = {formElement.config.validation}
//                     touched = {formElement.config.touched}
//                 />)
//             )}
//             <button className = {classes.button} disabled = {formIsValid}>Submit</button>
//         </form>
// )

// // const form = (<form>
// //                 {
// //                     formElementList.forEach(element => (
// //                         <input
// //                             className = {classes.InputElement}
// //                             key = {element.key}
// //                             {...element.config.elementConfig}
// //                             value = {element.config.value}
// //                             onChange = {event => inputChangeHandler(event, element.key)}
// //                         />
// //                     ))
// //                 }
// //             </form>)