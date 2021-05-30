import "./NewProductForm.css";
import {useState} from "react";

function NewProductForm(props) {
  /* hardcoded data */
  const categoryList = ['Sports', 'Casual', 'Formal'];

  const [enteredName, setEnteredName] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };
  const priceChangeHandler = (event) => {
    const number = parseFloat(event.target.value);
    setEnteredPrice(number);
  };
  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newProductData = {
      name: enteredName,
      category: enteredCategory,
      price: enteredPrice,
      description: enteredDescription,
    };

    props.onSaveProductData(newProductData);

    setEnteredName('');
    setEnteredCategory('');
    setEnteredPrice('');
    setEnteredDescription('');
  };

  return (
    <div id="new-product" className="flex-item">
      <div className="card">
        <h2>Add new product</h2>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              required
              id="name"
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <select
              required
              id="category"
              name="category"
              placeholder="Select a category"
              value={enteredCategory}
              onChange={categoryChangeHandler}>
              <option value="">Select a category</option>
              <option value={categoryList[0]}>{categoryList[0]}</option>
              <option value={categoryList[1]}>{categoryList[1]}</option>
              <option value={categoryList[2]}>{categoryList[2]}</option>
            </select>
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              required
              id="price"
              type="number"
              min="0.01"
              step="0.01"
              value={enteredPrice}
              onChange={priceChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              required
              id="description"
              value={enteredDescription}
              onChange={descriptionChangeHandler}
            />
          </div>
          <button type="submit" className="add-product">Save Product</button>
        </form>
      </div>
    </div>
  );
}

export default NewProductForm;