import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Pages/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

