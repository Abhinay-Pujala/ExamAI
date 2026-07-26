import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Profile from "./pages/dashboard/Profile.jsx";
import Settings from "./pages/dashboard/Settings.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AIGenerator from "./pages/dashboard/AIGenerator.jsx";
import History from "./pages/dashboard/History.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/ai-generator"
        element={
          <ProtectedRoute>
            <AIGenerator />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/history"
        element={
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
