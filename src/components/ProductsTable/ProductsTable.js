import "./ProductsTable.css";
import ProductsTableRow from "./ProductsTableRow";

function ProductsTable() {
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
          <ProductsTableRow />
          <ProductsTableRow />
          <ProductsTableRow />
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;