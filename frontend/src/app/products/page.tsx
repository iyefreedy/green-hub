import React from "react";

const ProductPage = () => {
  return (
    <form>
      <div className="form-group fw-bolder">
      <label  htmlFor="name">
        Name
      </label>
      <input
        type="text"
        className="form-control"
        id="name"
        placeholder="Enter name"
      />
      </div>
      <div className="form-group fw-bolder">
      <label  htmlFor="price">
        Price
      </label>
      <input
        type="number"
        className="form-control"
        id="price"
        placeholder="Enter price"
      />
      </div>
      <div className="form-group fw-bolder">
      <label  htmlFor="description">
        Description
      </label>
      <textarea
        className="form-control"
        id="description"
        rows={3}
        placeholder="Enter description"
      ></textarea>
      </div>
      <div className="form-group fw-bolder">
      <label  htmlFor="stock">
        Stock
      </label>
      <input
        type="number"
        className="form-control"
        id="stock"
        placeholder="Enter stock"
      />
      </div>
      <div className="form-group fw-bolder">
      <label  htmlFor="category">
        Category
      </label>
      <select className="form-control" id="category">
        <option>Standard</option>
        <option>Premium</option>
      </select>
      </div>
      <div className="form-group fw-bolder">
      <label  htmlFor="grade">
        Grade
      </label>
      <input
        type="text"
        className="form-control"
        id="grade"
        placeholder="Enter grade"
      />
      </div>
      <div className="form-group fw-bolder">
      <label  htmlFor="type">
        Type
      </label>
      <input
        type="text"
        className="form-control"
        id="type"
        placeholder="Enter type"
      />
      </div>
      <div className="text-center">
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      </div>
    </form>
    );
};

export default ProductPage;

