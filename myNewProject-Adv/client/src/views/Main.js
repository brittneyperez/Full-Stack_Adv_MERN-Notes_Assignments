import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

const Main = () => {
    
    const [ people, setPeople ] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/people")
            .then(res => {
                setPeople(res.data)
            })
            .catch((err) => console.log(err))
    }, [])
    // DELETE functionality
    const removeFromDom = personId => {
        axios.delete(`http://localhost:8000/api/people/${personId}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setPeople(people.filter(person => person._id != personId));
            })
            .catch((err) => console.log(err))
    }
    
    // createPerson is what was previously aka as onSubmitHandler in PersonForm.js
    const createPerson = personParam => {
        // ! e.preventDefault() is not needed here
        // make a post request to create a new person
        axios.post(`http://localhost:8000/api/people/${personParam}`)
            .then( res => {
                console.log(res);
                console.log(res.data);
                setPeople( [...people, res.data] );
            })
            .catch( err => console.log(err) );
    }
    
    return (
        <div>
            {/* PersonForm and PersonList can both utilize the getter and setter established in their parent component: */}
            <PersonForm onSubmitProp={ createPerson } initialFirstName="" initialLastName="" />
            <hr />
            <PersonList people={ people } removeFromDom={ removeFromDom } />
        </div>
    )
}

export default Main