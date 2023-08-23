import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Product = () => {
  const [Products, getProducts] = useState([]);
  const api = "https://fakestoreapi.com/products";
  async function getProductData() {
    const res = await fetch(api);
    const data = await res.json();
    getProducts(data);
    console.log(Products);
  }
  useEffect(() => {
    getProductData();
  }, []);

  const carts = Products.map((product) => {
    return (
      <>
        <div className="col-md-3">
          <Card
            style={{ width: "18rem", border: "2px solid red", margin: "10px" }}
          >
            <div className="text-center">
              <Card.Img
                variant="top"
                src={product.image}
                style={{ widh: "100px", height: "150px" }}
              />
            </div>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>Price: {product.price}</Card.Text>
              <Card.Text>Rating: {product.rating.rate}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  });

  return (
    <>
   
      <div className="row">{carts}</div>
    </>
  );
};

export default Product;
