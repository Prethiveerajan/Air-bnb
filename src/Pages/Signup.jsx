import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Logo from "../Components/Header/Logo";
import BasicMenu from "../Components/ProfileMenu/BasicMenu";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignupStyles.css';  // Separate CSS file for Signup

function Signup({ onClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const isAdmin = event.target.elements.isAdmin.checked;
    const newUser = { firstName, lastName, email, password, isAdmin };
    signup(newUser);
    onClose();
    // toast.success('Signup successful!');
    navigate('/');
  };

  return (
    <div className="signup-modal-content-custom">
      <div className="signup-modal-header-custom">
        <Logo className="Logo" />
        <BasicMenu className="Menu" />
      </div>
      <div className="signup-form-container-custom">
        <div className="signup-form-wrapper-custom">
          <form onSubmit={formSubmitHandler}>
            <h3>Sign up</h3>
            <div className="mb-3">
              <label>First Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Last Name:</label>
              <input
                type="text"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter your last name"
                required
              />
            </div>
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
            
            <div className="signup-d-grid-custom">
              <button type="submit" className="btn btn-danger">Sign Up</button>
            </div>
            <p className="signup-forget-password-custom text-right">
              Already registered? <a href="#" onClick={onClose}>Sign-in here?</a>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
