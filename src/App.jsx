import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Reviews from './components/Reviews/Reviews'
import Details from './components/Details/Details'

function App() {
  return (
    <>
      <div className="">
        {/* TOP */}
        <Header text={"Git & Github Workshop"} logo={true} />
        <div className="flex">
          <Details />
          <Reviews />
        </div>
      </div>
    </>
  )
}

export default App
