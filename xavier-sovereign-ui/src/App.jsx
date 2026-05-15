import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenius = async () => {
      try {
        const response = await axios.get("https://xavier-sovereign-systems.onrender.com/api/goals");
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Signal Interrupted", err);
        setLoading(false);
      }
    };
    fetchGenius();
  }, []);

  if (loading) return <h1 style={{color: 'white', padding: '20px'}}>SYNCHRONIZING WITH RENDER...</h1>;

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#38bdf8', minHeight: '100vh', padding: '40px', fontFamily: 'monospace' }}>
      <h1 style={{ borderBottom: '2px solid #38bdf8' }}>XAVIER: SOVEREIGN ARCHITECT</h1>
      <div>
        {data.length > 0 ? data.map((item) => (
          <div key={item._id} style={{ background: '#1e293b', padding: '20px', margin: '10px 0', borderRadius: '8px', borderLeft: '5px solid #22c55e' }}>
            <p><strong>REALITY:</strong> {item.text}</p>
            <p><strong>STATUS:</strong> {item.status || "GENIUS"}</p>
          </div>
        )) : <p>No data found in the cloud ledger.</p>}
      </div>
    </div>
  );
}

export default App;