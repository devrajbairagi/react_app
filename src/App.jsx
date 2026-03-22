import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './components/Create'
import Update from './components/Update'
import Table from './components/Table'
import View from './components/View'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/create" element={<Create/>}/>
      <Route path="/update/:id" element={<Update/>}/>
      <Route path="/" element={<Table/>}/>
      <Route path="/view/:id" element={<View/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
