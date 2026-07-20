import React from "react";
import Spinner from "react-bootstrap/Spinner";

// LO7: shared "loading" UI, reused for both the Suspense fallback and the
// fetch-in-progress state inside MainFeature / ProductDetail.
const Loader = ({ label = "Loading..." }) => (
  <div className="d-flex flex-column align-items-center justify-content-center py-5">
    <Spinner animation="border" role="status" variant="primary" />
    <p className="mt-3 text-muted">{label}</p>
  </div>
);

export default Loader;
