import React from 'react'
import logo from '../images/logo1.png'

const Main = () => {
  return (
    <div>
    <div className='main d-flex align-items-center pt-5 flex-column
'>
    <p>Ready to Developement 👉</p>
      <img
            src={logo} 
            alt="Logo"
            width="150"
            height="150"
            className="d-inline-block align-text-top logo"
          />
          <div className="mt-3 text-center">

      <h1>Build fast, Website Developement </h1>
      <h1>with CodeMint</h1>
          </div>
    </div>

    </div>
  )
}

export default Main
