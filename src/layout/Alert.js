import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" />

        <button type="button" className="btn btn-danger center">{alert.msg}</button>
      </div>
    )
  );
};
export default Alert;
