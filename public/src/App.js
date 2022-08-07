import React, { useState, useEffect } from 'react'
import Add from './Add'
import Phone from './Phone'

export default function App() {
  const [state, setState] = useState([])

  useEffect(() => {
    (async() => {
      const data = await fetch('http://localhost:8080/phones')
      const res = await data.json()
      setState(res)
    })()
  }, [])

  return (
    <div className="app">
      <ul>
      {state.map(phone => <Phone {...phone}/>)}
      </ul>
      <br />
      <Add />
    </div>
  )
}
