import "./App.css";
import ProductsManager from "./components/ProductsManager";

function App() {
  return (
    <section className="app">
      <section id="menu-bar">
        <h1>Products App</h1>
        <a href="index/">link</a>
      </section>
      <ProductsManager />
    </section>
  );
}

export default App;
