const API_BASE = "https://fakestoreapi.com/products";

const handleResponse = async (response) => {
  if (!response.ok) {
    const message = `Request failed with status ${response.status}`;
    throw new Error(message);
  }
  return response.json();
};

export const fetchProducts = async () => {
  const response = await fetch(API_BASE);
  return handleResponse(response);
};

export const fetchProductById = async (id) => {
  const response = await fetch(`${API_BASE}/${id}`);
  return handleResponse(response);
};

export const updateProduct = async (id, updatedData) => {
  const response = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });
  return handleResponse(response);
};
