import { useState, useEffect } from 'react'
import Routes from './Routes'

import AuthenticationProvider from './Context/Provider'



function App() {
  
  useEffect( () => {
    
  
      
    
  
  }, [] )

  return (
    <AuthenticationProvider>
      <Routes/>
    </AuthenticationProvider>
  )
}

export default App
