import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ConfigPage(){
  const [drone, setDrone] = useState(null);
  const DRONE_ID = import.meta.env.VITE_DRONE_ID || '3001';

  useEffect(()=>{
    axios.get(`/configs/${DRONE_ID}`).then(res=>{
      setDrone(res.data);
    }).catch(()=>{});
  },[]);

  if(!drone) return <div className="container"><div className="card">Loading...</div></div>;

  return (
    <div className="container">
      <div className="card">
        <h2>Drone Configuration</h2>
        <ul>
          <li><b>Drone ID:</b> {drone.drone_id}</li>
          <li><b>Drone Name:</b> {drone.drone_name}</li>
          <li><b>Light:</b> {drone.light}</li>
          <li><b>Country:</b> {drone.country}</li>
        </ul>
      </div>
    </div>
  );
}
