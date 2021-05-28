import "./ActiveProductDetails.css";

function ActiveProductDetails() {
  return (
    <div id="product-details" className="flex-item">
      <div className="card">
        <h2>Product Details</h2>
        <div className="detail">
          <div className="label">Name</div>
          <div className="info">Product name, long enough to wrap to the next line</div>
        </div>
        <div className="detail">
          <div className="label">Category</div>
          <div className="info">Category1</div>
        </div>
        <div className="detail">
          <div className="label">Price</div>
          <div className="info">50.90kr</div>
        </div>
        <div className="detail">
          <div className="label">Description</div>
          <div className="info info-description">Lots of information about this product.</div>
        </div>
        <button className="add-product">Add New Product</button>
      </div>
    </div>
  );
}

export default ActiveProductDetails;