import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import requireAuth from './utils/requiredAuth';
import SideBar from './components/SideBar/SideBar';
import Header from './components/Header/Header';
import Announcement from './pages/Announcement';
import Quiz from './pages/Quiz';

const ProtectedDashboard = requireAuth(Dashboard); 
const ProtectedAnnouncement = requireAuth(Announcement); 
const ProtectedQuiz = requireAuth(Quiz);


function App() {

  return (
    <BrowserRouter>
      <SideBar />
        <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/dashboard" element={<ProtectedDashboard />} />
        <Route path="/announcements" element={<ProtectedAnnouncement />} />
        <Route path="/quizzes" element={<ProtectedQuiz />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
