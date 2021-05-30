import "./ProductsTable.css";
import ProductsTableRow from "./ProductsTableRow";

function ProductsTable(props) {
  const showDetailsHandler = (productId) => {
    props.onShowDetails(productId);
  };

  return (
    <div className="flex-item">
      <h2>Products List (table)</h2>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
        </thead>

        <tbody>
        {props.items.map((product) => (
          <ProductsTableRow
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            description={product.description}
            onShowDetails={showDetailsHandler}
          />))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;