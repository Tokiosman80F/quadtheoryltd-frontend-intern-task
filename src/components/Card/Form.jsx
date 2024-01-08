

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-semibold mb-2">Product Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="text-sm text-gray-600">
            Product Name
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
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
