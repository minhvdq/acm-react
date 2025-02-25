import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './components/Home/HomePage'
import BoardPage from './components/Board/BoardPage'
import EventsPage from './components/Events/EventsPage'
import ProjectsPage from './components/Projects/ProjectsPage'

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/~vudimi01/myApp/' element={<HomePage />} />
        <Route path='/~vudimi01/myApp/events' element={<EventsPage />} />
        <Route path='/~vudimi01/myApp/boards' element={<BoardPage />} />
        <Route path='/~vudimi01/myApp/projects' element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
    
  )
  
}

export default App