import React from "react";
import Alert from "react-bootstrap/Alert";

// LO7: shared error-state UI, shown whenever a fetch/PUT call to the API fails.
const ErrorMessage = ({ message, onRetry }) => (
  <Alert variant="danger" className="text-center">
    <p className="mb-2">{message || "Something went wrong. Please try again."}</p>
    {onRetry && (
      <button className="btn btn-outline-danger btn-sm" onClick={onRetry}>
        Retry
      </button>
    )}
  </Alert>
);

export default ErrorMessage;
