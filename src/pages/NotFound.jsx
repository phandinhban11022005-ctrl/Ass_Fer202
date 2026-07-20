import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const NotFound = () => (
  <Container className="py-5 text-center">
    <h2>404 — Không tìm thấy trang</h2>
    <p className="text-muted">Trang bạn đang tìm không tồn tại.</p>
    <Link to="/" className="btn btn-primary">
      Về trang chủ
    </Link>
  </Container>
);

export default NotFound;
