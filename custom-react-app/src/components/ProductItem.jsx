import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { toggleFavorite, selectIsFavorite } from "../store/favoritesSlice";

/**
 * LO2: Functional-form version of the reusable product-display component.
 * LO3: uses destructuring (props), an arrow function, and a template
 * literal for the price string.
 */
const ProductItem = ({ product, onDelete }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(product.id));
  const { id, title, price, image, category } = product;

  return (
    <Card className="product-card">
      <div className="product-card__image-wrap">
        <Card.Img variant="top" src={image} alt={title} />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Subtitle className="text-muted text-uppercase small mb-1">
          {category}
        </Card.Subtitle>
        <Card.Title className="fs-6">{title}</Card.Title>
        <p className="product-card__price mb-2">{`$${Number(price).toFixed(
          2
        )}`}</p>
        <div className="mt-auto d-flex gap-2">
          <Button
            as={Link}
            to={`/feature/${id}`}
            size="sm"
            variant="outline-primary"
          >
            View
          </Button>
          <Button
            size="sm"
            variant={isFavorite ? "danger" : "outline-danger"}
            onClick={() => dispatch(toggleFavorite(id))}
          >
            {isFavorite ? "♥ Favorited" : "♡ Favorite"}
          </Button>
          {onDelete && (
            <Button
              size="sm"
              variant="outline-secondary"
              onClick={() => onDelete(id)}
            >
              Delete
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
