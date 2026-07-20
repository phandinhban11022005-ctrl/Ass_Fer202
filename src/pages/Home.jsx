import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import laptop1Img from "../assets/images/laptop1.png";
import laptop2Img from "../assets/images/laptop2.jpg";
import laptop3Img from "../assets/images/laptop3.png";
import laptop4Img from "../assets/images/laptop4.png";

const previewImages = [laptop1Img, laptop2Img, laptop3Img, laptop4Img];

const Home = () => {
  return (
    <Container className="pt-4">
      <div className="hero-section text-center">
        <div className="hero-badge">Dự án FER202</div>
        <h1 className="fw-bold">Trình duyệt sản phẩm</h1>
        <p className="hero-subtitle text-muted">
          Giao diện React hiện đại với dữ liệu API trực tiếp, yêu thích và quản lý sản phẩm nhanh.
        </p>
        <Button as={Link} to="/feature" size="lg" variant="light">
          Xem sản phẩm
        </Button>
      </div>

      <div className="featured-section py-4 px-3">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
          <div>
            <p className="text-uppercase text-muted mb-2">Featured collection</p>
            <h2 className="mb-0">Modern laptop visuals</h2>
          </div>
          <Button as={Link} to="/feature" variant="outline-primary">
            Browse all products
          </Button>
        </div>

        <Row className="g-3">
          {previewImages.map((src, index) => (
            <Col key={src} xs={12} sm={6} md={3}>
              <div className="preview-image-card p-3">
                <img src={src} alt={`Laptop ${index + 1}`} className="img-fluid rounded" />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Home;
