import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home/HomePage'
import BoardPage from './components/Board/BoardPage'
import EventsPage from './components/Events/EventsPage'
import ProjectsPage from './components/Home/ProjectPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/boards' element={<BoardsPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App