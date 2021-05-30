import "./ActiveProductDetails.css";

function ActiveProductDetails(props) {
  return (
    <div id="product-details" className="flex-item">
      <div className="card">
        <h2>Product Details</h2>
        <div className="detail">
          <div className="label">Name</div>
          <div className="info">{props.productShown.name}</div>
        </div>
        <div className="detail">
          <div className="label">Category</div>
          <div className="info">{props.productShown.category}</div>
        </div>
        <div className="detail">
          <div className="label">Price</div>
          <div className="info">{props.productShown.price.toFixed(2)} kr</div>
        </div>
        <div className="detail">
          <div className="label">Description</div>
          <div className="info info-description">{props.productShown.description}</div>
        </div>
        <button className="add-product" onClick={props.onShowForm}>Add New Product</button>
      </div>
    </div>
  );
}

export default ActiveProductDetails;