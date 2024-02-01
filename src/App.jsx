import { products as initialProduct } from "./mocks/products.json";
import Products from "./components/Products";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";

function App() {
  const { filters, filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProduct);

  return (
    <CartProvider>
      <h1 className="text-3xl font-bold ">Carrito de Compra 🛒</h1>

      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  );
}

export default App;
