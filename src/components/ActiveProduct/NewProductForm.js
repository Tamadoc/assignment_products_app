import "./NewProductForm.css";

function NewProductForm() {
  return (
    <div id="new-product" className="flex-item">
      <div className="card">
        <h2>Add new product</h2>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" required/>
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <select id="category" name="category" required>
              <option value="category-1">Category1</option>
              <option value="category-2">Category2</option>
              <option value="category-3">Category2</option>
            </select>
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input id="price" type="number" min="0.01" step="0.01" required/>
          </div>
          <div>
            <label htmlFor="description" type="text">Description</label>
            <textarea id="description"  required />
          </div>
          <button type="submit" className="add-product">Save Product</button>
        </form>
      </div>
    </div>
  );
}

export default NewProductForm;