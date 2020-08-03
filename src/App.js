import React, { useState, useEffect } from 'react';
import './App.css';
import Pages from './pages'
import USER from './data/user'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // fetch('https://gitconnected.com/v1/portfolio/jasongoodney')
    //   .then(res => res.json())
    //   .then(user => {
    //     setUser(user)
    //   })
    setUser(USER)
  }, [])

  if (!user) {
    return <div />
  }

  return <Pages user={USER} />
}

export default App;
