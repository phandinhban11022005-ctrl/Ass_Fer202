import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const emptyProduct = {
  title: "",
  price: "",
  description: "",
  category: "",
  image: "",
};

/**
 * Reusable form used both to ADD a new product (MainFeature) and to
 * EDIT an existing one (EditProduct page). LO6: controlled inputs via
 * useState + event handlers.
 */
const ProductForm = ({
  initialValues,
  submitLabel = "Save",
  onSubmit,
  onCancel,
}) => {
  const [values, setValues] = useState({ ...emptyProduct, ...initialValues });

  const handleChange = (e) => {
    const { name, value } = e.target; // ES6 destructuring
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.title.trim() || !values.price) return;
    onSubmit({ ...values, price: Number(values.price) });
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row className="g-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Tên sản phẩm</Form.Label>
            <Form.Control
              name="title"
              value={values.title}
              onChange={handleChange}
              placeholder="Ví dụ: Chuột không dây"
              required
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Giá ($)</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              min="0"
              name="price"
              value={values.price}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Danh mục</Form.Label>
            <Form.Control
              name="category"
              value={values.category}
              onChange={handleChange}
              placeholder="Ví dụ: electronics"
            />
          </Form.Group>
        </Col>
        <Col md={8}>
          <Form.Group>
            <Form.Label>URL ảnh</Form.Label>
            <Form.Control
              name="image"
              value={values.image}
              onChange={handleChange}
              placeholder="https://..."
            />
          </Form.Group>
        </Col>
        <Col md={12}>
          <Form.Group>
            <Form.Label>Mô tả</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="description"
              value={values.description}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <div className="mt-3 d-flex gap-2">
        <Button type="submit" variant="primary">
          {submitLabel}
        </Button>
        {onCancel && (
          <Button type="button" variant="outline-secondary" onClick={onCancel}>
            Hủy
          </Button>
        )}
      </div>
    </Form>
  );
};

export default ProductForm;
