import React from "react";

const MyForm: React.FC = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          className="form-control"
          id="category"
          placeholder="Enter category"
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          className="form-control"
          id="price"
          placeholder="Enter price"
        />
      </div>
      <div className="form-group">
        <label htmlFor="grade">Grade</label>
        <input
          type="text"
          className="form-control"
          id="grade"
          placeholder="Enter grade"
        />
      </div>
      <div className="form-group">
        <label htmlFor="desc">Description</label>
        <textarea
          className="form-control"
          id="desc"
          rows={3}
          placeholder="Enter description"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="stock">Stock</label>
        <input
          type="number"
          className="form-control"
          id="stock"
          placeholder="Enter stock"
        />
      </div>
      <div className="form-group">
        <label htmlFor="type">Type</label>
        <input
          type="text"
          className="form-control"
          id="type"
          placeholder="Enter type"
        />
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1">Example file input</label>
          <input
            type="file"
            className="form-control-file"
            id="exampleFormControlFile1"
          />
        </div>
      </form>
      <div className="col-auto my-1">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default MyForm;
