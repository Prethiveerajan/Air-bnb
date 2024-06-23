import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Logo from "../Components/Header/Logo";
import BasicMenu from "../Components/ProfileMenu/BasicMenu";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginStyles.css'; 

function Login({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const isAuthenticated = await login(email, password);
      if (isAuthenticated) {
        onClose();
        toast.success('Login successful!', {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: true,
          closeButton: true
        });
        navigate('/');
      } else {
        toast.error('Invalid email or password', {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: true,
          closeButton: true
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error('An error occurred. Please try again later.', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeButton: true
      });
    }
  };

  return (
    <div className="login-modal-content-custom">
      <div className="login-modal-header-custom">
        <Logo className="Logo" />
        <BasicMenu className="Menu" />
      </div>
      <div className="login-form-container-custom">
        <div className="login-form-wrapper-custom">
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
            <div className="login-d-grid-custom">
              <button type="submit" className="btn btn-danger">Login</button>
            </div>
            <p className="login-forget-password-custom text-right">
              Don't have an account? <a href="#" onClick={onClose}>Register here?</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
