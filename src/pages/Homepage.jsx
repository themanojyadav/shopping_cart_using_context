import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/cartContext";
import { BiRupee, BiShoppingBag } from "react-icons/bi";
import { ToastrContext } from "../context/toastrContext";
import Loader from "../components/Loader";

function Homepage() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const cartContext = useContext(CartContext);
  const toastrContext = useContext(ToastrContext);

  const fetchProducts = async () => {
    const limitedResponse = await fetch("https://fakestoreapi.com/products");
    const limitedData = await limitedResponse.json();
    setProducts(limitedData);
    setIsLoaded(true);
  };

  const handleAddToCart = (product) => {
    cartContext.addToCart(product);
    toastrContext.dispatch({
      type: "SHOW_TOASTR",
      payload: { message: "Product added to cart" },
    });
  };

  useEffect(() => {
    fetchProducts();
  }, [isLoaded]);

  return (
    <div className="pb-4">
      <div className="px-4 py-4 text-center shadow mb-5">
        <h1 className="display-5 fw-bold">Important Information</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            We are not using localstorage in this project. So on referesh, the
            data will be lost. If you want to pertain the data, use
            localstorage.
          </p>
        </div>
      </div>
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

          {products.length < 1 && <Loader />}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
