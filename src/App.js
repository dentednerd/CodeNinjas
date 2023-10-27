import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import globalStyles from './globalStyles';
import UserProvider from './context/user';
import Nav from './organisms/Nav';
import Home from './pages/Home';
import Level from './pages/Level';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Credits from './pages/Credits';

function App() {
  globalStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <UserProvider>
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/levels/:level" element={<Level />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/404" element={<p>not found</p>} />
            <Route render={() => <Navigate to="/404" replace />} />
          </Routes>
        </main>
      </Router>
    </UserProvider>
  );
}

export default App;
