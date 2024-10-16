import React from 'react'

import Logo from './components/Logo/logo'
import Nav from './components/Nav/nav'
import Main from './components/Main/main'

const App = () => {
  return (
    <div className='container'>
      <Logo />
      <div>
        <Nav />
        <Main />
      </div>
    </div>
  )
}

export default App