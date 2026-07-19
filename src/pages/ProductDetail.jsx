import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { toggleFavorite, selectIsFavorite } from "../store/favoritesSlice";

const ProductDetail = () => {
  const { id } = useParams(); // LO5: route param
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(Number(id)));

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Locally-added products (negative ids) don't exist on the API,
    // so only fetch for real/positive ids.
    if (Number(id) < 0) {
      setError(
        "This product only exists locally and can't be reloaded from the API. Go back to the list to view it."
      );
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message || "Failed to load product."))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader label="Loading product details..." />;
  if (error) return (
    <Container className="py-4">
      <ErrorMessage message={error} />
      <Link to="/feature" className="btn btn-outline-primary">
        &larr; Back to list
      </Link>
    </Container>
  );
  if (!product) return null;

  const { title, description, price, image, category } = product;

  return (
    <Container className="py-4" style={{ maxWidth: 800 }}>
      <Link to="/feature" className="d-inline-block mb-3">
        &larr; Back to list
      </Link>
      <div className="d-flex flex-column flex-md-row gap-4">
        <div
          className="d-flex align-items-center justify-content-center bg-white rounded p-3"
          style={{ minWidth: 220, height: 220 }}
        >
          <img
            src={image}
            alt={title}
            style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
          />
        </div>
        <div>
          <Badge bg="secondary" className="mb-2 text-uppercase">
            {category}
          </Badge>
          <h2>{title}</h2>
          <p className="text-muted">{description}</p>
          <p className="product-card__price fs-4">{`$${Number(price).toFixed(
            2
          )}`}</p>
          <div className="d-flex gap-2">
            <Button
              variant={isFavorite ? "danger" : "outline-danger"}
              onClick={() => dispatch(toggleFavorite(Number(id)))}
            >
              {isFavorite ? "♥ Favorited" : "♡ Add to favorites"}
            </Button>
            <Button as={Link} to={`/feature/${id}/edit`} variant="primary">
              Edit product
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
