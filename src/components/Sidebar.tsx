import { NavLink } from "react-router-dom";

const Sidebar = () => (
  <aside className="bg-[#1E1E2D] text-white w-64 h-full flex flex-col">
    <div className="p-6 text-xl font-bold text-pink-400">Legacy Modernization</div>
    <button className="bg-red-500 mx-4 my-2 py-2 rounded text-white">+ Add Source</button>
    <nav className="flex flex-col space-y-2 mt-4">
      {["Technical Analysis", "Executive Summary", "Source", "Transformations", "Output", "Lineage", "Code Gen"].map((item) => (
        <NavLink
          key={item}
          to={`/${item.toLowerCase().replace(/\s+/g, '')}`}
          className={({ isActive }) => isActive ? "px-6 py-2 text-left bg-blue-700" : "px-6 py-2 text-left hover:bg-blue-700"}
          // className={`px-6 py-2 text-left hover:bg-pink-400 ${
          //   ({isActive} : {isActive: boolean}) => isActive ? "bg-blue-700" : ""
          //   // item === "Source" ? "bg-blue-700" : ""
          // }`}
        >
          {item}
        </NavLink>
      ))}
      {/* <nav className="flex flex-col gap-2"> */}
        {/* <NavLink to="/source" className={({ isActive }) => isActive ? "font-bold text-white" : "text-white"}>
          Source
        </NavLink>
        <NavLink to="/codegen" className={({ isActive }) => isActive ? "font-bold text-white" : "text-white"}>
          Code Gen
        </NavLink> */}
      {/* </nav> */}
    </nav>
    <div className="mt-auto p-4 text-sm">Logout</div>
  </aside>
);

export default Sidebar;
