import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Settings/Settings';
import StatsHome from './Components/Dashboard/StatsHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Use /dashboard as the parent layout */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* "index" makes StatsHome show by default at /dashboard */}
          <Route index element={<StatsHome />} /> 
          
          {/* These appear in the <Outlet /> when the URL changes */}
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Redirect empty path to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;