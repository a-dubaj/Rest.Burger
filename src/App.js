import React, {useState, useEffect} from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Products from './Components/Products'
import { css } from "@emotion/react";
import PropagateLoader from 'react-spinners/PropagateLoader'


function App() {
  const[loading, setLoading] = useState(true)
  const override = css`
    display:block
    border-color:red
    margin-top:20%
  `

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  },[])

  return (
    <div className="App">
      {
        loading ? <PropagateLoader color={"#3d2514"} loading={loading} css={override} size={40}/>
        :
        <>
        <Navbar/>
        <Header/>
        <Products/>
        </>
      }
    </div>
  );
}

export default App;
