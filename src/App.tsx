import './App.css'
import Home from './Home';
import Login from './Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Profile';

function App() {

  return (
    <>
      <h1>Testing React</h1>
      <div className="card">
        <p>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
        </p>
      </div>
    </>
  )
}

export default App
