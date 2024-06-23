import React from "react";
import ReactModal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import "./Search.css";

ReactModal.setAppElement("#root"); // Adjust according to your app's root element

const CalendarModal = ({ isOpen, onClose, onDateChange, startDate }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Select Date"
      className="modal-content-custom"
      overlayClassName="overlay"
    >
      <div className="modal-header-custom">
        <h3 className="modal-title">Select Date</h3>
        <CancelSharpIcon onClick={onClose} className="close-icon-custom" />
      </div>
      <div className="form-container-custom">
        <DatePicker
          selected={startDate}
          onChange={onDateChange}
          inline
        />
      </div>
    </ReactModal>
  );
};

export default CalendarModal;
