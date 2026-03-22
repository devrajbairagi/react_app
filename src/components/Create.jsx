import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Create = () => {
    const [formData, setFormData] = useState({
    name: "",
    age: "",
    number: ""
  })
  const navigate = useNavigate()
   const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
   const handleSubmit = (e) => {
    e.preventDefault()

    axios.post("https://react-app-1-bc05.onrender.com/users", formData)
      .then(() => {
        alert("User Added Successfully")
        navigate("/")   
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Create User</h2>

      <form onSubmit={handleSubmit} className="w-50 mx-auto border p-4 shadow rounded">

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input 
            type="text" 
            name="name"
            className="form-control"
            placeholder="Enter name"
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
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>

      </form>
    </div>
  )
}

export default Create