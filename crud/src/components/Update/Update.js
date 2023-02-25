import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Update.css'

const Update = () => {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    axios.get('http://localhost:8000/api/partners').then((res) => {
      res.data.map((partner) => {
        if (partner.id == id) {
          setFirstName(partner.firstname)
          setLastName(partner.lastname)
        }
      })
    })
  }, []);
  const {id} = useParams()
  
  const updateAPIData = () => {
    axios.put(`http://localhost:8000/api/partners/${id}`, {
      firstname : firstname,
      lastname : lastname
    }) 
    navigate('/')
  }
  return (
    <div className='row create'>
      <div className='col-md-12'>
        <form className='create'>
          <label>First Name : </label>
          <input type="text" name='firstname' value={firstname} onChange={(e) => {setFirstName(e.target.value)}} /> 
          <label>Last Name : </label>
          <input type="text" name='lastname' value={lastname} onChange={(e) => {setLastName(e.target.value)}} />

          <input className='btn btn-info' type="button" value="Submit" onClick={updateAPIData} />
        </form>
        
      </div>
    </div>
  )
}

export default Update