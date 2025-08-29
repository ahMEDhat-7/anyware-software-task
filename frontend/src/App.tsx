import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import requireAuth from './utils/requiredAuth';
import SideBar from './components/SideBar/SideBar';
import Header from './components/Header/Header';

const ProtectedDashboard = requireAuth(Dashboard); 

function App() {

  return (
    <BrowserRouter>
      <SideBar />
        <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/dashboard" element={<ProtectedDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
