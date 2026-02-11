import './App.css'
import DriversDashboard from './pages/DriversDashboard'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import RideOverview from './components/RideOverview'
import TopDriver from './components/TopDriver'
import Login from './pages/LoginPage'
import { LoginInput } from './components/LoginInput'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/drivers" element={<DriversDashboard />} />
        </Route>
       <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;

