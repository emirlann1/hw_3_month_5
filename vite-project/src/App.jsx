import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function App () {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const inputChange = (e) => {
        const { name, value } = e.target
        dispatch({ type: 'UPDATE_USER', payload: {[name]: value}})
    }

    return (
        <div>
            <input type="text" name="name" value={user.name}
                onChange={inputChange} placeholder="Name"
            />

            <input type="number" name="age" value={user.age}
                onChange={inputChange} placeholder="Age"
            />

            <select name="gender" value={user.gender} onChange={inputChange}>
                <option value="">Select gender</option>
                <option value="Man">Man</option>
                <option value="Girl">Women</option>
            </select>

            <h3>User :</h3>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
        </div>
    )
}