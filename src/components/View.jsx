import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const View = () => {

  const [data, setData] = useState({
    name: "",
    age: "",
    number: ""
  });

  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:3000/users/" + id)
      .then((res) => {
        setData(res.data)   
      })
      .catch((err) => console.log(err))
  }, [id])

  return (
    <div className="container mt-5">
      
      <div className="card shadow p-4 mx-auto" style={{maxWidth: "400px"}}>
        
        <h3 className="text-center mb-4">User Details</h3>

        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Age:</strong> {data.age}</p>
        <p><strong>Number:</strong> {data.number}</p>

        <div className="text-center mt-3">
          <Link to="/" className="btn btn-secondary me-3">
            Back
          </Link>
           <Link to={`/update/${id}`} className="btn btn-primary ">
            Edit
          </Link>
        </div>

      </div>

    </div>
  )
}

export default View