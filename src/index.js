import React from 'react'
import ReactDOM from 'react-dom'

import Mensaje from "./module.js"

const Descripcion = () => {
  return <p>
    Esta es la app del curso fullstack bootcamp
  </p>
}

const App = () => {

  return (
    <div className='App'>
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='En un curso' />
      <Mensaje color='yellow' message='De React' />
      <Descripcion />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))