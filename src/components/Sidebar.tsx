const Sidebar = () => (
  <aside className="bg-[#1E1E2D] text-white w-64 h-full flex flex-col">
    <div className="p-6 text-xl font-bold text-pink-400">Legacy Modernization</div>
    <button className="bg-red-500 mx-4 my-2 py-2 rounded text-white">+ Add Source</button>
    <nav className="flex flex-col space-y-2 mt-4">
      {["Technical Analysis", "Executive Summary", "Source", "Transformations", "Output", "Lineage", "Code Gen"].map((item) => (
        <button
          key={item}
          className={`px-6 py-2 text-left hover:bg-pink-400 ${
            item === "Source" ? "bg-blue-700" : ""
          }`}
        >
          {item}
        </button>
      ))}
    </nav>
    <div className="mt-auto p-4 text-sm">Logout</div>
  </aside>
);

export default Sidebar;
