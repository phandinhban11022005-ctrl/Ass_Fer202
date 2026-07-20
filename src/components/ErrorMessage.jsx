import React from "react";
import Alert from "react-bootstrap/Alert";

// LO7: shared error-state UI, shown whenever a fetch/PUT call to the API fails.
const ErrorMessage = ({ message, onRetry }) => (
  <Alert variant="danger" className="text-center">
    <p className="mb-2">{message || "Đã xảy ra lỗi. Vui lòng thử lại."}</p>
    {onRetry && (
      <button className="btn btn-outline-danger btn-sm" onClick={onRetry}>
        Thử lại
      </button>
    )}
  </Alert>
);

export default ErrorMessage;
