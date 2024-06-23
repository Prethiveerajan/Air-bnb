import React from "react";
import ReactModal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import "./Search.css";

ReactModal.setAppElement("#root"); 

const CalendarModal = ({ isOpen, onClose, onDateChange, startDate }) => {
  const today = new Date(); 

 
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 10);

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
          minDate={today} 
          maxDate={maxDate} 
        />
      </div>
    </ReactModal>
  );
};

export default CalendarModal;
