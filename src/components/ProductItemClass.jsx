import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

/**
 * LO2: Class-form version of the SAME kind of reusable product-display
 * component as ProductItem.jsx, demonstrating both the Class and Functional
 * component styles required by the assignment. This one is used to
 * highlight a single "Featured product" (e.g. the first item returned by
 * the API) at the top of the Main Feature page.
 */
class ProductItemClass extends React.Component {
  render() {
    const { product } = this.props;
    if (!product) return null;

    const { title, price, image, description, category } = product;

    return (
      <Card className="featured-card mb-4">
        <Card.Body className="d-flex flex-column flex-md-row gap-3 align-items-center">
          <img
            src={image}
            alt={title}
            style={{ maxHeight: 120, maxWidth: 120, objectFit: "contain" }}
          />
          <div>
            <Badge bg="primary" className="mb-2">
              Featured &middot; {category}
            </Badge>
            <h5 className="mb-1">{title}</h5>
            <p className="text-muted mb-1" style={{ maxWidth: 600 }}>
              {description}
            </p>
            <p className="product-card__price mb-0">{`$${Number(
              price
            ).toFixed(2)}`}</p>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default ProductItemClass;
