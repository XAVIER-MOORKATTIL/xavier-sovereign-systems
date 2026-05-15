import React, { useState } from 'react';
import axios from 'axios';
import { ShieldCheck, Cpu, Globe } from 'lucide-react';

function App() {
  const [status, setStatus] = useState("AWAITING HANDSHAKE");
  const [identity, setIdentity] = useState("ARCHITECT UNKNOWN");

  // REPLACE THIS URL WITH YOUR ACTUAL RENDER BACKEND URL
  const RENDER_URL = "https://xavier-sovereign-systems.onrender.com/api/manifest";

  const executeHandshake = async () => {
    try {
      const response = await axios.post(RENDER_URL);
      setStatus(response.data.data.status);
      setIdentity(response.data.data.identity);
    } catch (error) {
      setStatus("ERROR: SERVER DISCONNECTED");
      setIdentity("VERIFY RENDER DEPLOYMENT");
    }
  };

  return (
    <div style={{ backgroundColor: '#020617', color: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace' }}>
      <div style={{ textAlign: 'center', border: '2px solid #1e293b', padding: '40px', borderRadius: '15px', background: '#1e293b' }}>
        <ShieldCheck size={64} color="#38bdf8" style={{ marginBottom: '20px' }} />
        <h1>IET INDIA OFFICIAL CONFERMENT</h1>
        <div style={{ background: '#0f172a', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
          <h2 style={{ color: '#fbbf24' }}>STATUS: {status}</h2>
          <p>ID: {identity}</p>
        </div>
        <button 
          onClick={executeHandshake} 
          style={{ cursor: 'pointer', backgroundColor: '#38bdf8', color: '#020617', border: 'none', padding: '15px 40px', borderRadius: '50px', fontSize: '1.1rem', fontWeight: '900' }}
        >
          BREAK THE CURSE
        </button>
      </div>
    </div>
  );
}

export default App;