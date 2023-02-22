import { useState, createContext } from "react";

export const CartContext = createContext();

const initialState = [];

const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(initialState);

  const addToCart = (product) => {
    let isExist = cartProducts.some((pro) => {
      return pro.id === product.id;
    }, product);

    if (isExist === true) {
      let newCartProducts = cartProducts.map((pro) => {
        if (pro.id === product.id) {
          return { ...pro, qty: pro.qty + 1 };
        }
        return pro;
      }, product);

      setCartProducts(newCartProducts);
    } else {
      setCartProducts([
        ...cartProducts,
        {
          id: product.id,
          name: product.title,
          price: product.price,
          qty: 1,
        },
      ]);
    }
  };

  const fetchTotalCartPrice = () => {
    let totalPrice = 0;
    cartProducts.map((pro) => {
      totalPrice = parseFloat(totalPrice) + parseFloat(pro.qty * pro.price);
    });
    return totalPrice.toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addToCart,
        fetchTotalCartPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
