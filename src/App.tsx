import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { DetailsPage } from './pages/DetailsPage';
import { TrackingPage } from './pages/TrackingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
