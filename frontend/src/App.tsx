import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/dashboard/Dashboard'
import requireAuth from './utils/requiredAuth';

const ProtectedDashboard = requireAuth(Dashboard); 

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/dashboard" element={<ProtectedDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
