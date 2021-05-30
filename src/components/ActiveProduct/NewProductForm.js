import "./NewProductForm.css";

function NewProductForm() {

  /* hardcoded data */
  const categoryList = ['Sports', 'Casual', 'Formal'];

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
              <option value={categoryList[0]}>{categoryList[0]}</option>
              <option value={categoryList[1]}>{categoryList[1]}</option>
              <option value={categoryList[2]}>{categoryList[2]}</option>
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