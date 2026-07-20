import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import ProductItem from "../components/ProductItem";
import ProductItemClass from "../components/ProductItemClass";
import ProductForm from "../components/ProductForm";
import { fetchProducts as getProducts } from "../api/productApi";

/**
 * Main Feature page.
 * LO6: useState + useEffect drive the whole interactive feature (fetch,
 * add, delete) with plain event handlers (button clicks, form submit).
 * LO7: fetch from a public API with loading/error states. This whole page
 * is already lazy-loaded via React.lazy in App.js.
 */
const MainFeature = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [nextLocalId, setNextLocalId] = useState(-1); // negative ids = locally added

  const fetchProducts = () => {
    setLoading(true);
    setError(null);
    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message || "Failed to load products."))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [{ ...newProduct, id: nextLocalId }, ...prev]);
    setNextLocalId((prev) => prev - 1);
    setShowForm(false);
  };

  if (loading) return <Loader label="Đang tải sản phẩm từ API..." />;
  if (error) return <ErrorMessage message={error} onRetry={fetchProducts} />;

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h2 className="mb-0">Tính năng chính — Danh sách sản phẩm</h2>
        <Button
          variant={showForm ? "outline-secondary" : "success"}
          onClick={() => setShowForm((prev) => !prev)}
        >
          {showForm ? "Đóng form" : "+ Thêm sản phẩm"}
        </Button>
      </div>

      {showForm && (
        <ProductForm submitLabel="Thêm sản phẩm" onSubmit={handleAddProduct} />
      )}

      {/* LO2: class-component version of the reusable product display,
          used here to spotlight the first product in the list. */}
      {products.length > 0 && <ProductItemClass product={products[0]} />}

      {products.length === 0 ? (
        <p className="text-muted">No products left. Add one above!</p>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-3">
          {products.map((product) => (
            <Col key={product.id}>
              <ProductItem product={product} onDelete={handleDelete} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default MainFeature;
