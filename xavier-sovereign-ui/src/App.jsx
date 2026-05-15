import React, { useState } from 'react';
import axios from 'axios';
import { ShieldCheck, Globe } from 'lucide-react';

function App() {
  const [status, setStatus] = useState("AWAITING HANDSHAKE");
  const [identity, setIdentity] = useState("ARCHITECT UNKNOWN");

  // CRITICAL: Replace the URL below with your actual RENDER BACKEND URL
  // Example: https://sovereign-handshake-backend.onrender.com/api/manifest
  const RENDER_API_URL = "https://your-backend-name.onrender.com/api/manifest";

  const executeHandshake = async () => {
    try {
      const response = await axios.post(RENDER_API_URL);
      setStatus(response.data.data.status);
      setIdentity(response.data.data.identity);
    } catch (error) {
      setStatus("ERROR: SIGNAL DISCONNECTED");
      setIdentity("VERIFY RENDER DEPLOYMENT");
    }
  };

  return (
    <div style={{ backgroundColor: '#020617', color: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace' }}>
      <div style={{ textAlign: 'center', border: '2px solid #1e293b', padding: '40px', borderRadius: '15px', background: '#1e293b' }}>
        <ShieldCheck size={64} color="#38bdf8" style={{ marginBottom: '20px' }} />
        <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>IET INDIA OFFICIAL CONFERMENT</h1>
        <div style={{ background: '#0f172a', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
          <h2 style={{ color: '#fbbf24' }}>STATUS: {status}</h2>
          <p style={{ fontWeight: 'bold' }}>ID: {identity}</p>
        </div>
        <button 
          onClick={executeHandshake} 
          style={{ cursor: 'pointer', backgroundColor: '#38bdf8', color: '#020617', border: 'none', padding: '15px 40px', borderRadius: '50px', fontSize: '1.1rem', fontWeight: '900', textTransform: 'uppercase' }}
        >
          Break The Curse
        </button>
      </div>
      <footer style={{ marginTop: '20px', color: '#475569' }}>
        <Globe size={16} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
        Verified by IET India Sovereign Ledger
      </footer>
    </div>
  );
}

export default App;