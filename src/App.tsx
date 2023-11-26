

import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'
import { AuthFornecedor } from './context/authentication'

function App() {
  return (
    <AuthFornecedor>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthFornecedor>
    
  )
}

export default App
