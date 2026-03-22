import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const {id} = useParams();
    const [data,setData] = useState({
        name:"",
        age:"",
        number:""
    });
    useEffect(()=>{
       axios.get("http://localhost:3000/users/"+id)
       .then((res)=>{
           setData(res.data)
       })
    },[])
    const navigate= useNavigate()
    const handleUpdate = (e) =>{
         
         axios.put("http://localhost:3000/users/"+id,data).then((res)=>{}).catch((err)=>{})
  navigate("/")
    }
       const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Update User</h2>

      <form onSubmit={handleUpdate} className="w-50 mx-auto border p-4 shadow rounded">

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input 
            type="text" 
            name="name"
            className="form-control"
            placeholder="Enter name"
            value={data.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input 
            type="number" 
            name="age"
            className="form-control"
            placeholder="Enter age"
            value={data.age}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Number</label>
          <input 
            type="text" 
            name="number"
            className="form-control"
            placeholder="Enter phone number"
            value={data.number}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Update
        </button>

      </form>
    </div>
  )
}

export default Update
