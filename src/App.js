import React, { useState } from 'react'
import SignupTravelForm from './auth/SingupTravelFrom.jsx';
import LoginTravelForm from './auth/LoginTravelForm.jsx';
import All from './landing/All.jsx';
export default function App() {
  const [view, setView] = useState('login'); 

  return (
    <div>
   {view === 'login' ? (
  <LoginTravelForm onSwitch={(v) => setView(v)} />
) : view === 'signup' ? (
  <SignupTravelForm onSwitch={(v) => setView(v)} />
) : view === 'All' ? (
  <All />
) : null}

    
    </div>
  )
}