// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  if (!user) return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route exact path="/" element={<Login setUserLogin={setUser}/>}/>
        {/* <Route path= "/signup" element={<Signup setUserSignup={setUser} />} />
        <Route path="/home" element={<Home/>}/> */}
      </Routes>
    </>
  )


  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Routes>
          <Route path="/homepage" element={<Home/>}/>
        </Routes> */}
      </header>
    </div>
  );
}

export default App;
