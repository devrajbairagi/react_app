import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Table = () => {
    const [user,setUser] = useState([])
    useEffect(()=>{
        axios.get("https://react-app-1-bc05.onrender.com/users")
        .then((res)=>{
             setUser(res.data)
            console.log(res)})
        .catch((err)=>{console.log(err)})
    },[])
    const navigate = useNavigate()
    const handleDelete = (id) => {
  axios.delete("https://react-app-1-bc05.onrender.com/users/" + id)
    .then(() => {
      setUser((prev) => prev.filter((u) => u.id !== id))
    })
    .catch((err) => {
      console.log(err)
    })
}
  return (
   <>
   <div className="container mt-5">
      <h2 className="text-center mb-4">User Data Table</h2>
      <Link to="/create" className="btn mb-2 btn-primary btn-sm me-2">Create</Link>
      <table className="table table-striped table-bordered text-center">
          <thead className="table-dark">
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Number</th>
                <th>Action</th>
            </tr>
            
          </thead>
          <tbody>{
             user.map((data,index)=>{
                return(
                    <tr key={index}>
                    <td>
                        {data.name}
                    </td>
                     <td>
                     {data.age}
                    </td>
                     <td>
                        {data.number}
                    </td>
                   <td>
                     <Link to={`/view/${data.id}`}className="btn btn-primary btn-sm me-2">View</Link>
                    <Link to={`/update/${data.id}`}className="btn btn-warning btn-sm me-2">Edit</Link>
                    <button onClick={()=>{handleDelete(data.id)}}className="btn btn-danger btn-sm me-2">Delete</button>
                  
                   </td>
                </tr>
                )
             })
            }
                
            </tbody>
      </table>
   </div>
   </>
  )
}

export default Table  