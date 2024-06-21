import React, { useState } from 'react'
import Login from './components/Login'
import CommunicationDetails from './communication/communicationDetails';

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (user) => {
    setUser(user);
  };

  return (
    <div>
      {user ? <CommunicationDetails user={user} /> : <Login onLoginSuccess={handleLoginSuccess}/>}
    </div>
  )
}

export default App
