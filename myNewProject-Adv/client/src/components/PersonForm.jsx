import React, { useState } from 'react';
// import axios from 'axios';

const PersonForm = ({ initialFirstName, initialLastName, onSubmitProp }) => {
    
    const [ firstName, setFirstName ] = useState(initialFirstName);
    const [ lastName, setLastName ] = useState(initialLastName);
    
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ firstName, lastName })
    }
    
    return (
        <form>
            <h2>Person Form</h2>
            <p>
                <label>First Name: </label><br/>
                <input type="text" name="firstName" value={ firstName }
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </p>
            
            <p>
                <label>Last Name: </label><br/>
                <input type="text" name="lastName" value={ lastName }
                    onChange={ (e) => setLastName(e.target.value) }
                />
            </p>
            <input type="submit" />
        </form>
    )
}

export default PersonForm;