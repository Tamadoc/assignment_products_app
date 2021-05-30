import "./ProductsManager.css";
import {useState} from "react";
import ProductsTable from "./ProductsTable/ProductsTable";
import NewProductForm from "./ActiveProduct/NewProductForm";
import ActiveProductDetails from "./ActiveProduct/ActiveProductDetails";

/* Hardcoded content*/
const DUMMY_DATA = [
  {
    id: 1,
    name: 'Sportswear',
    category: 'Sports',
    price: 149.90,
    description: 'This is a detailed description of the product',
  },
  {
    id: 2,
    name: 'T-shirt',
    category: 'Casual',
    price: 95.9,
    description: 'This is a detailed description of the product',
  },
  {
    id: 3,
    name: 'Sports shoes, with a name long enough to wrap to the next line',
    category: 'Sports',
    price: 599,
    description: 'This is a detailed description of the product',
  },
  {
    id: 4,
    name: 'Suit',
    category: 'Formal',
    price: 1500,
    description: 'This is a detailed description of the product. It is several sentences long. That means it is long enough to wrap to the next line',
  }
];
function ProductsManager() {
  const [productList, setProductList]  = useState(DUMMY_DATA);

  const [showForm, setShowForm] = useState(true);
  const showFormHandler = () => {
    setShowForm(true);
  };

  const [activeProduct, setActiveProduct] = useState();
  const showActiveProductHandler = (productId) => {
    setShowForm(false);

    const product = productList.find(product => product.id === productId);
    setActiveProduct(product);
  };

  const saveDataHandler = (newProductData) => {
    const fullProductData = {
      ...newProductData,
      id: productList.length + 1,
    };

    setProductList(prevProductList => {
      return [fullProductData, ...prevProductList];
    });
  };

  const toggleFormOrDetailsHandler = () => {
    if (showForm)
      return <NewProductForm onSaveProductData={saveDataHandler}/>;
    else
      return <ActiveProductDetails productShown={activeProduct} onShowForm={showFormHandler}/>;
  };

  return (
    <section id="products-manager" className="container flex-container">
      <ProductsTable items={productList} onShowDetails={showActiveProductHandler}/>
      {toggleFormOrDetailsHandler()}
    </section>
  );
}

export default ProductsManager;