import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  const url =
    "https://react-backend-a1842-default-rtdb.europe-west1.firebasedatabase.app/cart.json";
  useEffect(() => {
    //With PUT we override data
    fetch(url, { method: "PUT", body: JSON.stringify(cart) });
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
