import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import ProductForm from "../components/ProductForm";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message || "Failed to load product."))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSave = (updatedValues) => {
    setSaving(true);
    setSaveError(null);
    // LO7-style error handling applied to a PUT request as well.
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedValues),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Update failed with status ${res.status}`);
        return res.json();
      })
      .then(() => {
        setSaved(true);
        // fakestoreapi.com is a mock API: it accepts the PUT and echoes a
        // response but does not actually persist changes server-side.
        setTimeout(() => navigate(`/feature/${id}`), 1200);
      })
      .catch((err) => setSaveError(err.message || "Failed to save changes."))
      .finally(() => setSaving(false));
  };

  if (loading) return <Loader label="Loading product for editing..." />;
  if (error)
    return (
      <Container className="py-4">
        <ErrorMessage message={error} />
        <Link to="/feature">&larr; Back to list</Link>
      </Container>
    );

  return (
    <Container className="py-4" style={{ maxWidth: 700 }}>
      <h2 className="mb-3">Edit product</h2>

      {saved && (
        <Alert variant="success">
          Saved! (Note: this is a mock API and won't persist after refresh.)
          Redirecting back to details...
        </Alert>
      )}
      {saveError && <ErrorMessage message={saveError} />}

      <ProductForm
        initialValues={product}
        submitLabel={saving ? "Saving..." : "Save changes"}
        onSubmit={handleSave}
        onCancel={() => navigate(`/feature/${id}`)}
      />
    </Container>
  );
};

export default EditProduct;
