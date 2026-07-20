import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import ProductForm from "../components/ProductForm";
import { fetchProductById, updateProduct } from "../api/productApi";

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
    fetchProductById(id)
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message || "Không thể tải sản phẩm."))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSave = (updatedValues) => {
    setSaving(true);
    setSaveError(null);
    updateProduct(id, updatedValues)
      .then(() => {
        setSaved(true);
        // fakestoreapi.com is a mock API: it accepts the PUT and echoes a
        // response but does not actually persist changes server-side.
        setTimeout(() => navigate(`/feature/${id}`), 1200);
      })
      .catch((err) => setSaveError(err.message || "Không thể lưu thay đổi."))
      .finally(() => setSaving(false));
  };

  if (loading) return <Loader label="Đang tải sản phẩm để sửa..." />;
  if (error)
    return (
      <Container className="py-4">
        <ErrorMessage message={error} />
        <Link to="/feature">&larr; Trở lại danh sách</Link>
      </Container>
    );

  return (
    <Container className="py-4" style={{ maxWidth: 700 }}>
      <h2 className="mb-3">Sửa sản phẩm</h2>

      {saved && (
        <Alert variant="success">
          Lưu thành công! (Lưu ý: đây là API giả và sẽ không được ghi lại sau khi tải lại.)
          Đang quay về trang chi tiết...
        </Alert>
      )}
      {saveError && <ErrorMessage message={saveError} />}

      <ProductForm
        initialValues={product}
        submitLabel={saving ? "Đang lưu..." : "Lưu thay đổi"}
        onSubmit={handleSave}
        onCancel={() => navigate(`/feature/${id}`)}
      />
    </Container>
  );
};

export default EditProduct;
