import React from "react";
import ReactModal from "react-modal";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";
import ControlPointSharpIcon from "@mui/icons-material/ControlPointSharp";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import "./GuestModal.css"; // Import the CSS file for GuestModal styles

const GuestModal = ({ isOpen, onClose, onSelectGuest, guests }) => {
  const handleSelect = (guestType, change) => {
    const newCount = guests[guestType] + change;
    if (newCount >= 0) {
      onSelectGuest(guestType, change);
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Select Guests"
      className="guest-modal-content modal-content-custom"
      overlayClassName="guest-modal-overlay overlay"
    >
      <div className="guest-modal-header modal-header-custom">
        <h3>Select Guests</h3>
        <CancelSharpIcon
          onClick={onClose}
          className="guest-modal-close-button close-icon-custom"
        />
      </div>
      <div className="guest-options">
        <div className="guest-option">
          <div className="option-label">Adults</div>
          <div className="option-controls">
            <RemoveSharpIcon
              className="decrement-button"
              style={{ fontSize: 32, borderRadius: "50%", padding: "10px" }} // Adjust icon size and style here
              onClick={() => handleSelect("adults", -1)}
            />
            <span className="guest-count">{guests.adults}</span>
            <ControlPointSharpIcon
              className="increment-button"
              style={{ fontSize: 32, borderRadius: "50%", padding: "10px" }} // Adjust icon size and style here
              onClick={() => handleSelect("adults", 1)}
            />
          </div>
        </div>
        <div className="guest-option">
          <div className="option-label">Children</div>
          <div className="option-controls">
            <RemoveSharpIcon
              className="decrement-button"
              style={{ fontSize: 32, borderRadius: "50%", padding: "10px" }} // Adjust icon size and style here
              onClick={() => handleSelect("children", -1)}
            />
            <span className="guest-count">{guests.children}</span>
            <ControlPointSharpIcon
              className="increment-button"
              style={{ fontSize: 32, borderRadius: "50%", padding: "10px" }} // Adjust icon size and style here
              onClick={() => handleSelect("children", 1)}
            />
          </div>
        </div>
        <div className="guest-option">
          <div className="option-label">Infants</div>
          <div className="option-controls">
            <RemoveSharpIcon
              className="decrement-button"
              style={{ fontSize: 32, borderRadius: "50%", padding: "10px" }} // Adjust icon size and style here
              onClick={() => handleSelect("infants", -1)}
            />
            <span className="guest-count">{guests.infants}</span>
            <ControlPointSharpIcon
              className="increment-button"
              style={{ fontSize: 32, borderRadius: "50%", padding: "10px" }} // Adjust icon size and style here
              onClick={() => handleSelect("infants", 1)}
            />
          </div>
        </div>
        <div className="guest-option">
          <div className="option-label">Pets</div>
          <div className="option-controls">
            <RemoveSharpIcon
              className="decrement-button"
              style={{ fontSize: 32, borderRadius: "50%", padding: "10px" }} // Adjust icon size and style here
              onClick={() => handleSelect("pets", -1)}
            />
            <span className="guest-count">{guests.pets}</span>
            <ControlPointSharpIcon
              className="increment-button"
              style={{ fontSize: 32, borderRadius: "50%", padding: "10px" }} // Adjust icon size and style here
              onClick={() => handleSelect("pets", 1)}
            />
          </div>
        </div>
        {/* Add more options as needed */}
      </div>
    </ReactModal>
  );
};

export default GuestModal;
