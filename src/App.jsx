import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './components/Home/HomePage'
import BoardPage from './components/Board/BoardPage'
import EventsPage from './components/Events/EventsPage'
import ProjectsPage from './components/Projects/ProjectsPage'
import GalleryPage from './components/Events/GalleryPage';  

import homeUrl from './utils/config';

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path={`${homeUrl}/`} element={<HomePage />} />
        <Route path={`${homeUrl}/event`} element={<EventsPage />} />
        <Route path={`${homeUrl}/boards`} element={<BoardPage />} />
        <Route path={`${homeUrl}/projects`} element={<ProjectsPage />} />
        <Route path={`${homeUrl}/events/gallery/:date`} element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
    
  )
  
}

export default App