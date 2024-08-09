"use client";

import React, { useState } from "react";
import axios from "axios";

const MyForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: 0,
    grade: "",
    desc: "",
    stock: 0,
    type: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("/api/products", formData);
      // Handle success
      console.log("Form submitted successfully!");
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
<div className="form-group row">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
    </div>
  </div>
  <div className="form-group row"/>
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
    </div>



      <div className="form-group row">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group row">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          className="form-control"
          id="price"
          placeholder="Enter price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="desc">Description</label>
        <textarea
          className="form-control"
          id="desc"
          placeholder="Enter description"
          value={formData.desc}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="stock">Stock</label>
        <input
          type="number"
          className="form-control"
          id="stock"
          placeholder="Enter stock"
          value={formData.stock}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          className="form-control"
          id="category"
          placeholder="Enter category"
          value={formData.category}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="grade">Grade</label>
        <input
          type="text"
          className="form-control"
          id="grade"
          placeholder="Enter grade"
          value={formData.grade}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="type">Type</label>
        <input
          type="text"
          className="form-control"
          id="type"
          placeholder="Enter type"
          value={formData.type}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlFile1">Example file input</label>
        <input
          type="file"
          className="form-control-file"
          id="exampleFormControlFile1"
        />
      </div>
      <div className="col-auto my-1">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default MyForm;
