import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import PersonForm from './PersonForm';

const UpdatePersonForm = () => {
    
    const {id} = useParams();
    const [ person, setPerson ] = useState({});
    const [ loaded, setLoaded ] = useState(false);
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/people/${id}`)
            .then(res => {
                console.log(res.data);
                setPerson(res.data);
                setLoaded(true);
            })
            // .catch(err => console.log(err))
    }, [])
    
    const updatePerson = personParam => {
        // ! e.preventDefault() is not needed anymore since we are now using onSubmitProp
        axios.patch(`http://localhost:8000/api/people/${id}`, personParam)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            // .catch(err => console.log(err))
    }
    
    return (
        <div>
            <h1>Update a Person</h1>
            {
                loaded && <PersonForm
                    onSubmitProp={updatePerson}
                    initialFirstName={person.firstName}
                    initialLastName={person.lastName}
                />
            /* This is a ternary operator for { loaded ? <PersonForm /> : null };
            PersonForm will now wait until useEffect runs to render, and allow inputs to be prepopulated */
            }
        </div>
    )
}

export default UpdatePersonForm