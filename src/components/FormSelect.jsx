import React from "react";

const FormSelect = ({ status, statusOptions, handleJobInput }) => {
  return (
    <div className="form-row">
      <label htmlFor="status" className="form-label">
        status
      </label>
      <select
        name="status"
        value={status}
        onChange={handleJobInput}
        className="form-select"
      >
        {statusOptions.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
