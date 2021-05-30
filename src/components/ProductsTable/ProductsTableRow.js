import "./ProductsTableRow.css";

function ProductsTableRow(props) {
  const showDetailsHandler = (event) => {
    const productId = parseInt(event.target.value);
    props.onShowDetails(productId);
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.category}</td>
      <td className="right">{props.price.toFixed(2)}kr</td>
      <td><button value={props.id} onClick={showDetailsHandler}>Details</button></td>
      {/*<td><button className="test">Edit</button></td> ////need to stack 2 buttons on narrow widths//// */}
    </tr>
  );
}

export default ProductsTableRow;