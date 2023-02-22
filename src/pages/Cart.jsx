import React, { useContext } from "react";
import {
  BiAdjust,
  BiFace,
  BiRightArrowAlt,
  BiRupee,
  BiShoppingBag,
  BiShow,
  BiTrash,
  BiWindowClose,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { ToastrContext } from "../context/toastrContext";

function Cart() {
  const cartContext = useContext(CartContext);
  const toastrContext = useContext(ToastrContext);

  const handleRemoveCartProduct = (product) => {
    cartContext.removeCartProduct(product);
    toastrContext.dispatch({
      type: "SHOW_TOASTR",
      payload: { message: "Product removed from cart" },
    });
  };

  const handleEmptyCart = () => {
    cartContext.handleEmptyCart();
    toastrContext.dispatch({
      type: "SHOW_TOASTR",
      payload: { message: "Cart cleared" },
    });
  };
  return (
    <div className="py-4">
      <div className="container">
        <div className="page-header border-0 py-3">
          <h3 className="d-flex align-items-center fw-bold">
            <BiShoppingBag />
            Cart
          </h3>
          <p className="mb-0">
            We are happy for you that you liked our products. Make the payment
            and get them at your home.
          </p>
        </div>
        <div className="card shadow border-0">
          <div className="card-body">
            {cartContext.cartProducts.length > 0 && (
              <div className="">
                <table className="table table-bordered">
                  <thead className="bg-light">
                    <tr>
                      <th>S. No.</th>
                      <th>Image</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Sub Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartContext.cartProducts.map((product, index) => {
                      return (
                        <tr key={index + 1}>
                          <td width="5%">{index + 1}</td>
                          <td width="100">
                            <img
                              src={product.image}
                              alt=""
                              className="w-100 img-thumbnail"
                            />
                          </td>
                          <td>{product.name}</td>
                          <td>{product.price}</td>
                          <td>{product.qty}</td>
                          <td>{product.price * product.qty}</td>
                          <td>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleRemoveCartProduct(product)}
                            >
                              <BiTrash /> Remove
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="mt-4 d-flex justify-content-between">
                  <div className="">
                    <button
                      className="btn btn-dark rounded-pill"
                      onClick={handleEmptyCart}
                    >
                      <BiWindowClose /> Empty Cart
                    </button>
                  </div>
                  <div className="">
                    <h5>
                      Total Price: <BiRupee />
                      {cartContext.fetchTotalCartPrice()}
                    </h5>
                    <button
                      className="btn btn-custom d-flex align-items-center"
                      type="button"
                      onClick={() =>
                        alert("Payment is not included in this project.")
                      }
                    >
                      Proceed to payment <BiRightArrowAlt />
                    </button>
                  </div>
                </div>
              </div>
            )}
            {cartContext.cartProducts.length < 1 && (
              <div className="text-center">
                <h1>
                  <BiFace />
                </h1>
                <h1>Oops !!!</h1>
                <h3>No products are available in your cart</h3>
                <h4>Add the products in your cart and come again.</h4>
                <Link
                  to="/"
                  className="btn btn-custom d-inline-flex align-items-center"
                >
                  <BiAdjust /> <span className="ms-1">Go to Shop</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
