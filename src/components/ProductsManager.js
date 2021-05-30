import "./ProductsManager.css";
import {useState} from "react";
import ProductsTable from "./ProductsTable/ProductsTable";
import NewProductForm from "./ActiveProduct/NewProductForm";
import ActiveProductDetails from "./ActiveProduct/ActiveProductDetails";

function ProductsManager() {
  /* Hardcoded content*/
  const productList = [
    {
      id: 0,
      name: 'Sportswear',
      category: 'Sports',
      price: 149.90,
      description: 'This is a detailed description of the product',
    },
    {
      id: 1,
      name: 'T-shirt',
      category: 'Casual',
      price: 95.9,
      description: 'This is a detailed description of the product',
    },
    {
      id: 2,
      name: 'Sports shoes, with a name long enough to wrap to the next line',
      category: 'Sports',
      price: 599,
      description: 'This is a detailed description of the product',
    },
    {
      id: 3,
      name: 'Suit',
      category: 'Formal',
      price: 1500,
      description: 'This is a detailed description of the product. It is several sentences long. That means it is long enough to wrap to the next line',
    }
  ];

  const [showForm, setShowForm] = useState(true);
  const showFormHandler = () => {
    setShowForm(true);
  }

  const [activeProduct, setActiveProduct] = useState();
  const showActiveProductHandler = (productId) => {
    setShowForm(false);
    setActiveProduct(productList[productId]);
  };

  const toggleFormOrDetailsHandler = () => {
    if (showForm)
      return <NewProductForm/>
    else
      return <ActiveProductDetails productShown={activeProduct} onShowForm={showFormHandler}/>
  };

  return (
    <section id="products-manager" className="container flex-container">
      <ProductsTable items={productList} onShowDetails={showActiveProductHandler}/>
      {toggleFormOrDetailsHandler()}
    </section>
  );
}

export default ProductsManager;