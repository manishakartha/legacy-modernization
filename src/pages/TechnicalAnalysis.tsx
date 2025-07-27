import { useState } from "react";
import { useReactTable, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, flexRender } from "@tanstack/react-table";
import Topbar from "../components/Topbar";

// Sample Data
const defaultData = new Array(24).fill(0).map((_, i) => ({
    nodeId: [19, 53, 20, 101][i % 4],
    nodeName: "DateTimeNow",
    fieldName: "DateTimeNow",
    description: i === 1 ? "This knode contains text-based calculations" : "Generates the current date and time",
    transformationType: ["Custom Calculation", "DateTime Format", "GroupBy", "Sum"][i % 4],
}));

// Table Columns
const defaultColumns = [
    { header: "Node ID", accessorKey: "nodeId" },
    { header: "Node Name", accessorKey: "nodeName" },
    { header: "Field Name", accessorKey: "fieldName" },
    { header: "Description", accessorKey: "description" },
    { header: "Transformation Type", accessorKey: "transformationType" },
];

export default function TechnicalAnalysis() {
    const [tab, setTab] = useState("transformations");
    const [data] = useState(() => [...defaultData]);
    const [columns] = useState(() => [...defaultColumns]);
    // const [columnFilters, setColumnFilters] = useState([]);

    const table = useReactTable({
        data,
        columns,
        // state: { columnFilters },
        // onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div className="flex-1 overflow-y-auto bg-gray-100">
            <Topbar heading={'Technical Analysis'} />
            <div className="p-4">
                <div className="flex space-x-6 border-b mb-4 text-blue-800 font-semibold">
                    <button
                        onClick={() => setTab("transformations")}
                        className={`pb-2 ${tab === "transformations" ? "border-b-4 border-blue-500" : ""}`}
                    >
                        Transformations ({data.length})
                    </button>
                    <button
                        onClick={() => setTab("custom")}
                        className={`pb-2 ${tab === "custom" ? "border-b-4 border-blue-500" : ""}`}
                    >
                        Custom Calculations (0)
                    </button>
                </div>

                {/* Transformations Table */}
                {tab === "transformations" && (
                    <div>
                        <table className="min-w-full bg-white border rounded shadow-sm">
                            <thead className="bg-blue-800 text-white">
                                {table.getHeaderGroups().map(headerGroup => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map(header => (
                                            <th key={header.id} className="p-2 text-left">
                                                {flexRender(header.column.columnDef.header, header.getContext())}
                                                {header.column.getCanFilter() && (
                                                    <input
                                                        className="mt-1 w-full px-2 py-1 text-black rounded"
                                                        placeholder={`Filter...`}
                                                        //   value={(header.column.getFilterValue() ?? "")}
                                                        onChange={e => header.column.setFilterValue(e.target.value)}
                                                    />
                                                )}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody>
                                {table.getRowModel().rows.map(row => (
                                    <tr key={row.id} className="even:bg-gray-100">
                                        {row.getVisibleCells().map(cell => (
                                            <td key={cell.id} className="p-2">
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Pagination */}
                        <div className="flex justify-between items-center mt-4">
                            <div>
                                Showing {table.getRowModel().rows.length} of {data.length} results
                            </div>
                            <div className="flex space-x-2">
                                <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className="px-3 py-1 border rounded disabled:opacity-50">Previous</button>
                                <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className="px-3 py-1 border rounded disabled:opacity-50">Next</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Placeholder for Custom Calculations */}
                {tab === "custom" && <div className="text-gray-500">No custom calculations available.</div>}
            </div>
        </div>
    );
}
