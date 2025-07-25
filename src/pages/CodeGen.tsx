import { useState } from "react";
import Topbar from "../components/Topbar";

const CodeGen = () => {
    const [jiraKey, setJiraKey] = useState("");

    const handleGenerate = () => {
        alert(`Generate code for: ${jiraKey}`);
    };

    return (
        <div className="flex-1 overflow-y-auto bg-gray-100">
            <Topbar heading={'Code Gen'} />
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex justify-end gap-4">
                        <button className="border px-4 py-1 rounded-full border-blue-500 text-blue-500 hover:bg-blue-100">
                            Create JIRA Ticket
                        </button>
                        <button className="border px-4 py-1 rounded-full border-blue-500 text-blue-500 hover:bg-blue-100">
                            Git Hub
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="Enter JIRA Issue Key"
                        className="border border-gray-300 rounded-full px-4 py-2 w-1/3"
                        value={jiraKey}
                        onChange={(e) => setJiraKey(e.target.value)}
                    />
                    <button
                        onClick={handleGenerate}
                        className="bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600"
                    >
                        Generate Code
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CodeGen;
