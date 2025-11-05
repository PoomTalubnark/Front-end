import React, { useEffect, useState } from "react";
import axios from "axios";

// ‼️ ดึง URL ของ backend มาจากตัวแปร
const API_URL = import.meta.env.VITE_API_URL;

export default function LogFormPage(){
  const DRONE_ID = import.meta.env.VITE_DRONE_ID || '3001';
  const [config, setConfig] = useState(null);
  const [celsius, setCelsius] = useState('');

  useEffect(()=>{
    // ‼️ แก้ไขโดยการเพิ่ม API_URL ข้างหน้า
    axios.get(`${API_URL}/configs/${DRONE_ID}`).then(res=> setConfig(res.data)).catch(()=>{});
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!config) return alert('No config loaded');
    try{
      const payload = {
        drone_id: config.drone_id,
        drone_name: config.drone_name,
        country: config.country,
        celsius: Number(celsius)
      };
      // ‼️ แก้ไขโดยการเพิ่ม API_URL ข้างหน้า
      await axios.post(`${API_URL}/logs`, payload);
      alert('Log created');
      setCelsius('');
    }catch(err){
      alert('Failed to create log');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Add Temperature Log</h2>
        {!config && <div>Loading config...</div>}
        {config && (
          <form onSubmit={handleSubmit}>
            <div><label>Drone: {config.drone_name} (ID: {config.drone_id})</label></div>
            <div>
              <input type="number" step="0.1" placeholder="Celsius" value={celsius} onChange={e=>setCelsius(e.target.value)} />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
