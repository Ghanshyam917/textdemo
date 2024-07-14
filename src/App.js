import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import React, { useState } from 'react'


function App() {

  const [mode,setMode] = useState('light');

  let toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black';
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <><Navbar mode={mode} toggleMode={toggleMode}/><Home heading="Enter Text Here" mode={mode}/></>
        
      ),
    },
    {
      path: "/about",
      element: <><Navbar mode={mode} toggleMode={toggleMode}/><About mode={mode}/></>,
    },
  ]);

  return (
    <>
      {/* <Navbar/>
      <Home heading="Enter Text Here"/>
      <About heading="Enter Text Here"/> */}
    <RouterProvider router={router} />

      </>
  );
}

export default App;
