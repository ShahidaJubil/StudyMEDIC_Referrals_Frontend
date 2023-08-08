import React from "react";
import "./Notification.css"; // Import your custom styles for the notification

const Notification = ({ message, onClose }) => {
  return (
    <div className="notification-container">
      <div className="notification-content">
        <p>{message}</p>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Notification;
