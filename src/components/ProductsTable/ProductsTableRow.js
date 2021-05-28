import "./ProductsTableRow.css";

function ProductsTableRow() {
  return (
    <tr>
      <td>Product name, long enough to wrap to the next line</td>
      <td>Category1</td>
      <td className="right">50,90kr</td>
      <td><button className="test">Details</button></td>
      {/*<td><button className="test">Edit</button></td> ////need to stack 2 buttons on narrow widths//// */}
    </tr>
  );
}

export default ProductsTableRow;