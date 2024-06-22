import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Logo from "../Components/Header/Logo";
import BasicMenu from "../Components/ProfileMenu/BasicMenu";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Styles.css';

function Login({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (login(email, password)) {
      toast.success('Login successful!');
      onClose(); 
      navigate('/'); 
    } else {
      toast.error('Invalid email or password');
    }
  };

  return (
    <div className="modal-content-custom">
      <div className="modal-header-custom">
        <Logo className="Logo" />
        <BasicMenu className="Menu" />
      </div>
      <div className="form-container-custom">
        <div className="form-wrapper-custom">
          <form onSubmit={formSubmitHandler}>
            <h3>Login</h3>
            <div className="mb-3">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="d-grid-custom">
              <button type="submit" className="btn btn-danger">Login</button>
            </div>
            <p className="forget-password-custom text-right">
              Don't have an account? <a href="#" onClick={onClose}>Register here?</a>
            </p>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Login;
