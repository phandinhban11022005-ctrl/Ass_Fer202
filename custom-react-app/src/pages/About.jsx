import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

const About = () => {
  return (
    <Container className="py-4" style={{ maxWidth: 760 }}>
      <h2 className="mb-3">Giới thiệu dự án</h2>
      <p>
        <strong>Trình duyệt sản phẩm</strong> là bài nộp cho môn FER202, bài
        tập React "Custom React Web Application". Ứng dụng này thể hiện các
        Learning Outcomes LO1 đến LO8 với giao diện quản lý sản phẩm nhỏ gọn.
      </p>

      <h5 className="mt-4">Công nghệ sử dụng</h5>
      <ListGroup className="mb-4">
        <ListGroup.Item>React 18 (component hàm + component lớp)</ListGroup.Item>
        <ListGroup.Item>React Router v6 cho điều hướng</ListGroup.Item>
        <ListGroup.Item>Redux Toolkit + React-Redux cho quản lý trạng thái</ListGroup.Item>
        <ListGroup.Item>React-Bootstrap + Bootstrap 5 + CSS tự viết</ListGroup.Item>
        <ListGroup.Item>Fetch API với REST API công khai</ListGroup.Item>
      </ListGroup>

      <h5>Thành viên</h5>
      <ListGroup className="mb-2">
        <ListGroup.Item>
          <div className="d-flex w-100 justify-content-between">
            <div>
              <div className="fw-bold">Phan Đình Bản</div>
              <div className="text-muted small">Chủ nhiệm / Giao diện</div>
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default About;
