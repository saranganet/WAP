import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import HomePage from './components/sections/home';
import Practice from './components/sections/practice';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
  );
}
export default App;