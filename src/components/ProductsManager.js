import "./ProductsManager.css";
import {useState} from "react";
import ProductsTable from "./ProductsTable/ProductsTable";
import NewProductForm from "./ActiveProduct/NewProductForm";
import ActiveProductDetails from "./ActiveProduct/ActiveProductDetails";

function ProductsManager() {
  const [showForm, setShowForm] = useState(false);

  const toggleFormHandler = () => {
    if (showForm)
      return <NewProductForm />
    else
      return <ActiveProductDetails />
  };

  return (
    <section id="products-manager" className="container flex-container">
        <ProductsTable />
        {toggleFormHandler()}
    </section>
  );
}

export default ProductsManager;