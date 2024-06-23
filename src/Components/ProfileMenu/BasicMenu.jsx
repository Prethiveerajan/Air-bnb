// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
// import { Modal } from "react-bootstrap";
// import Login from "../../Pages/Login";
// import Signup from "../../Pages/Signup";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function BasicMenu() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);

//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleShowLogin = () => {
//     setShowLogin(true);
//     setShowSignup(false); // Ensure signup modal is closed
//     handleClose();
//   };

//   const handleShowSignup = () => {
//     setShowSignup(true);
//     setShowLogin(false); // Ensure login modal is closed
//     handleClose();
//   };

//   const handleCloseLogin = () => setShowLogin(false);

//   const handleCloseSignup = () => setShowSignup(false);

//   // Toast notifications
//   const notifySuccess = (message) => toast.success(message);

//   return (
//     <div>
//       <div
//         id="basic-button"
//         aria-controls={open ? "basic-menu" : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? "true" : undefined}
//         onClick={handleClick}
//         className="profile-menu-flex"
//       >
//         <MenuRoundedIcon />
//         <AccountCircleRoundedIcon />
//       </div>
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           "aria-labelledby": "basic-button",
//         }}
//       >
//         <MenuItem onClick={handleShowSignup}>Signup</MenuItem>
//         <MenuItem onClick={handleShowLogin}>Login</MenuItem>
//         <div
//           style={{
//             height: "1px",
//             backgroundColor: "var(--grey)",
//             width: "100%",
//           }}
//         />
//         <MenuItem>Airbnb Your Home</MenuItem>
//         <MenuItem>Help</MenuItem>
//       </Menu>

//       <Modal show={showLogin} onHide={handleCloseLogin}>
//         <Login
//           onClose={() => {
//             handleCloseLogin();
//             notifySuccess('Login successful!');
//           }}
//         />
//       </Modal>
//       <Modal show={showSignup} onHide={handleCloseSignup}>
//         <Signup
//           onClose={() => {
//             handleCloseSignup();
//             notifySuccess('Signup successful!');
//           }}
//         />
//       </Modal>

//       <ToastContainer />
//     </div>
//   );
// }

// import React, { useState } from "react";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
// import { Modal } from "react-bootstrap";
// import Login from "../../Pages/Login";
// import Signup from "../../Pages/Signup";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function BasicMenu() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);

//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleShowLogin = () => {
//     setShowLogin(true);
//     setShowSignup(false); // Ensure signup modal is closed
//     handleClose();
//   };

//   const handleShowSignup = () => {
//     setShowSignup(true);
//     setShowLogin(false); // Ensure login modal is closed
//     handleClose();
//   };

//   const handleCloseLogin = (success) => {
//     setShowLogin(false);
//     if (success) {
//       notify("Login successful!");
//     }
//   };

//   const handleCloseSignup = (success) => {
//     setShowSignup(false);
//     if (success) {
//       notify("Signup successful!");
//     }
//   };

//   const notify = (message) => {
//     toast.success(message, {
//       position: "top-left",
//       autoClose: 2000,
//       hideProgressBar: true,
//       closeButton: true
//     });
//   };

//   return (
//     <div>
//       <div
//         id="basic-button"
//         aria-controls={open ? "basic-menu" : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? "true" : undefined}
//         onClick={handleClick}
//         className="profile-menu-flex"
//       >
//         <MenuRoundedIcon />
//         <AccountCircleRoundedIcon />
//       </div>
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           "aria-labelledby": "basic-button",
//         }}
//       >
//         <MenuItem onClick={handleShowSignup}>Signup</MenuItem>
//         <MenuItem onClick={handleShowLogin}>Login</MenuItem>
//         <div
//           style={{
//             height: "1px",
//             backgroundColor: "var(--grey)",
//             width: "100%",
//           }}
//         />
//         <MenuItem>Airbnb Your Home</MenuItem>
//         <MenuItem>Help</MenuItem>
//       </Menu>

//       <Modal show={showLogin} onHide={() => handleCloseLogin(false)}>
//         <Login onClose={handleCloseLogin} />
//       </Modal>
//       <Modal show={showSignup} onHide={() => handleCloseSignup(false)}>
//         <Signup onClose={handleCloseSignup} />
//       </Modal>

//       <ToastContainer />
//     </div>
//   );
// }


import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Modal } from "react-bootstrap";
import Login from "../../Pages/Login";
import Signup from "../../Pages/Signup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowSignup(false); // Ensure signup modal is closed
    handleClose();
  };

  const handleShowSignup = () => {
    setShowSignup(true);
    setShowLogin(false); // Ensure login modal is closed
    handleClose();
  };

  const handleCloseLogin = (success) => {
    setShowLogin(false);
    if (success) {
      notify("Login successful!");
    }
  };

  const handleCloseSignup = (success) => {
    setShowSignup(false);
    if (success) {
      notify("Signup successful!");
    }
  };

  const notify = (message) => {
    toast.success(message, {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: true,
      closeButton: true
    });
  };

  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="profile-menu-flex"
      >
        <MenuRoundedIcon />
        <AccountCircleRoundedIcon />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleShowSignup}>Signup</MenuItem>
        <MenuItem onClick={handleShowLogin}>Login</MenuItem>
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--grey)",
            width: "100%",
          }}
        />
        <MenuItem>Airbnb Your Home</MenuItem>
        <MenuItem>Help</MenuItem>
      </Menu>

      <Modal show={showLogin} onHide={() => handleCloseLogin(false)}>
        <Login onClose={handleCloseLogin} />
      </Modal>
      <Modal show={showSignup} onHide={() => handleCloseSignup(false)}>
        <Signup onClose={handleCloseSignup} />
      </Modal>

      <ToastContainer />
    </div>
  );
}

