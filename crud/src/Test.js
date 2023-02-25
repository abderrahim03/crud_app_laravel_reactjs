import axios from 'axios'
import React, { useState } from 'react'

const Test = () => {
    const [users, setUsers] = useState([])
    const [name, setName] = useState('')

    const Get = () => {
        axios.get('http://localhost:8000/api/customers').then((res) => setUsers(res.data))
    }
    const Put = () => {
        axios.post('http://localhost:8000/api/customers?name=', {name})
    }
  return (
    <div>
        <button type='submit' className='btn btn-info' onClick={Get}>GET</button>

        <form>
            Name : <input type='text' name='name'  onChange={(e) => setName(e.target.value)} />
            <input type='submit' className='btn btn-primary' value='Add' onClick={Put} />
        </form>

        {users.map((user) => {
            return (
                <ul key={user.id}>
                    <li>{user.name}</li>
                </ul>
            )
        })}
    </div>
  )
}

export default Test