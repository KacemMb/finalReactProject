import React from 'react'
import './style/App.css'
import Navbar from './pages/Navbar'
import Posts from './pages/Posts'
const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Posts/>
    </div>
  )
}

export default App
