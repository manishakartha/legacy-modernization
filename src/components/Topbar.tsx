const Topbar = () => (
  <div className="flex justify-between items-center bg-white shadow px-6 py-4">
    <h2 className="text-xl font-semibold">Source</h2>
    <div className="flex items-center space-x-4">
      <button className="bg-red-500 text-white px-4 py-2 rounded">Download Analysis</button>
      <div className="flex items-center bg-gray-100 p-2 rounded-full">
        <div className="w-8 h-8 bg-blue-500 rounded-full mr-2"></div>
        <div>
          <p className="text-sm font-bold">Alex Smith</p>
          <p className="text-xs text-gray-500">Administrator</p>
        </div>
      </div>
    </div>
  </div>
);

export default Topbar;
