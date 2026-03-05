import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Settings/Settings';
import StatsHome from './Components/Dashboard/StatsHome';
import Login from './Components/Login/Login'; // adjust path if needed

// Protected route: only allows access if auth flag is set
function PrivateRoute({ children }) {
  const isAuth = localStorage.getItem('myapp_auth_v1') === '1';
  return isAuth ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public login page */}
        <Route path="/login" element={<Login />} />

        {/* Protected dashboard layout */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<StatsHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Default: go to login (not dashboard) */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;