import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/api/partners').then((res) => {setData(res.data)})
  }, []);
  const deletePartner = (id) => {
    axios.delete(`http://localhost:8000/api/partners/${id}`)
  }
  return (
    <div className='container'>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Action</th>
          </tr>
        </thead> 
        <tbody>
          {data.map((map) => {
            return (
              <tr key={map.id}>
                <td>{map.id}</td>
                <td>{map.firstname}</td>
                <td>{map.lastname}</td>
                <td>
                <Link to={`/update/${map.id}`} >
                  <button className='btn btn-success mx-2'>Update</button>
                </Link>
                  <button className='btn btn-danger' onClick={() => deletePartner(map.id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Read