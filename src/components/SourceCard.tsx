const SourceCard = () => (
  <div className="bg-white border rounded-xl shadow p-4 max-w-sm">
    <div className="bg-blue-800 text-white text-sm font-semibold rounded-t-md px-3 py-2">
      Source Name : Text Input Manual Date
    </div>
    <div className="p-3">
      <p><strong>Connection ID:</strong> 386c4a5d-7dc2-4988-8d07-3df7fe1adf79</p>
      <p className="my-2 text-sm text-gray-600">
        <strong>Description:</strong> This node manually inputs date and text data into the workflow.
      </p>
      <p><strong>Connection Type:</strong> Text Input</p>
    </div>
    <div className="text-center">
      <button className="mt-2 border border-red-500 text-red-500 px-4 py-1 rounded-full hover:bg-red-100 text-sm">View More</button>
    </div>
  </div>
);

export default SourceCard;
