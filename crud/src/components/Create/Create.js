import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Create.css'

const Create = () => {
  const [firstname, setFirst] = useState('')
  const [lastname, setLast] = useState('')
  const navigate = useNavigate()
  const Storedata = () => {
    axios.post('http://localhost:8000/api/partners',{
      firstname : firstname,
      lastname : lastname
    })  
    setFirst('')
    setLast('')
    navigate('/')
  } 
  return (
    <div className='row'>
      <div className='col-md-12'>
        <form className='create' method='GET'>
          <label>First Name : </label>
          <input type="text" name='firstName' placeholder='First Name' onChange={(e) => {setFirst(e.target.value)}} /> 
          <label>Last Name : </label>
          <input type="text" name='lastName' placeholder='Last Name' onChange={(e) => {setLast(e.target.value)}} />
          
          <input className='btn btn-info' type="submit" value="Submit" onClick={Storedata} />
        </form>
      </div>
    </div>
  )
}

export default Create