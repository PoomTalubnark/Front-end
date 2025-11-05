import React, { useEffect, useState } from "react";
import axios from "axios";

// ‼️ ดึง URL ของ backend มาจากตัวแปร
const API_URL = import.meta.env.VITE_API_URL;

export default function ViewLogsPage(){
  const DRONE_ID = import.meta.env.VITE_DRONE_ID || '3001';
  const [logs, setLogs] = useState([]);

  useEffect(()=>{
    // ‼️ แก้ไขโดยการเพิ่ม API_URL ข้างหน้า
    axios.get(`${API_URL}/logs/${DRONE_ID}?page=1&perPage=12`).then(res=>{
      setLogs(res.data.items || []);
    }).catch(()=>{});
  },[]);

  return (
    <div className="container">
      <div className="card">
        <h2>Logs</h2>
        <table>
          <thead>
            <tr><th>Created</th><th>Country</th><th>Drone ID</th><th>Drone Name</th><th>Celsius</th></tr>
          </thead>
          <tbody>
            {logs.map((l, idx)=>(
              <tr key={idx}>
                <td>{l.created}</td>
                <td>{l.country}</td>
                <td>{l.drone_id}</td>
                <td>{l.drone_name}</td>
                <td>{l.celsius}</td>
              </tr>
            ))}
            {logs.length===0 && <tr><td colSpan="5">No logs</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
