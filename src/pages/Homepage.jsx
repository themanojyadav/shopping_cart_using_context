import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/cartContext";
import { BiRupee, BiShoppingBag } from "react-icons/bi";

function Homepage() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const cartContext = useContext(CartContext);

  const fetchProducts = async () => {
    const limitedResponse = await fetch("https://fakestoreapi.com/products");
    const limitedData = await limitedResponse.json();
    setProducts(limitedData);
    setIsLoaded(true);
  };

  const handleAddToCart = (product) => {
    cartContext.addToCart(product);
  };

  useEffect(() => {
    fetchProducts();
  }, [isLoaded]);

  return (
    <div className="py-4">
      <div className="container">
        <div className="row row-cols-5">
          {products.length > 0 &&
            products.map((product, index) => {
              return (
                <div className="col mb-3" key={index}>
                  <div className="card shadow product-card">
                    <img
                      src={product.image}
                      alt=""
                      className="card-img-top product-img"
                    />
                    <div className="card-body bg-light">
                      <h6 className="card-title text-truncate mb-1">
                        {product.title}
                      </h6>
                      <h5 className="text-dark fw-bold d-flex align-items-center">
                        <BiRupee />
                        {product.price}
                      </h5>
                      <div className="">
                        <button
                          type="button"
                          className="btn btn-custom w-100"
                          onClick={() => {
                            handleAddToCart(product);
                          }}
                        >
                          <BiShoppingBag /> Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          {products.length < 1 && "Loading"}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
