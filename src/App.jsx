
import Routes from './Routes'

import AuthenticationProvider from './Context/Provider'



function App() {
  
  
  return (
    <AuthenticationProvider>
      <Routes/>
    </AuthenticationProvider>
  )
}

export default App
