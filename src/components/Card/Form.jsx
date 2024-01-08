import React, { useState } from 'react';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    let Name = form.name.value;
    let Price = form.price.value;

    const dataInfo = {  Name, Price };
    setFormData(dataInfo);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData(null);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-semibold mb-2">Product Form</h2>

      {isSubmitted && (
        <div className="mb-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
          Form submitted successfully!{' '}
          <button
            onClick={handleReset}
            className="text-sm font-semibold ml-2 text-green-800 cursor-pointer"
          >
            Reset
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="text-sm text-gray-600">
            Dish Name
          </label>
          <input
            type="text"
            name="name"
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter Item Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="text-sm text-gray-600">
            Price
          </label>
          <input
            type="number"
            name="price"
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter price"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="imageUrl" className="text-sm text-gray-600">
            Image URL
          </label>
          <input
            type="text"
            name="imageUrl"
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
