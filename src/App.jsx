import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import ConfigPage from "./pages/ConfigPage";
import LogFormPage from "./pages/LogFormPage";
import ViewLogsPage from "./pages/ViewLogsPage";

export default function App(){
  return (
    <BrowserRouter>
      <nav style={{padding:12, background:'#222', color:'#fff'}}>
        <Link to="/" style={{color:'#fff', marginRight:12}}>Config</Link>
        <Link to="/form" style={{color:'#fff', marginRight:12}}>Add Log</Link>
        <Link to="/logs" style={{color:'#fff'}}>View Logs</Link>
      </nav>
      <div style={{padding:20, background:'#fff', minHeight:'90vh'}}>
        <Routes>
          <Route path="/" element={<Navigate to={"/configs/3001"} />} />
          <Route path="/configs/:id" element={<ConfigPage />} />
          <Route path="/form" element={<LogFormPage />} />
          <Route path="/logs" element={<ViewLogsPage />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
