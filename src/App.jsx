import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home classes={ classes } curUser={ curUser } setCurUser={setCurUser}/>} />
        <Route path='/review/:id' element={<ReviewPage classes={ classes } curUser={curUser} setCurUser={setCurUser} />} />
        <Route path='/authen' element={<AuthenPage curUser={curUser} setCurUser={setCurUser} />} />
        <Route path='/manage' element={<EventManage curUser={curUser} />} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App