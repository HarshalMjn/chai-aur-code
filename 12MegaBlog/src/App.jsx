import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 //console.log(process.env.REACT_APP_APPWRITE_URL) for app created using react not vite
 console.log(import.meta.env.VITE_REACT_APP_APPWRITE_URL)  //for app created using react-vite



  return (
    <>
      <h1>A blog with Appwrite</h1>
    </>
  )
}

export default App
