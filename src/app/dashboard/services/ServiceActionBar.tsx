import { FiBell } from "react-icons/fi";

export default function ServiceActionBar() {
    return (
        <div style={{ backgroundColor: "#fff", padding: "10px 15px", borderRadius: "10px", marginBottom: "20px" }}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div className="action-bar fs-4 font-semibold mb-2">Action Bar</div>
                <button className="text-orange-600 py-2 px-3 mx-2 rounded flex items-center" style={{ background: "#fff", border: "1px dashed orange" }}>
                    All Catetogories <FiBell className="ml-2" />
                </button>
            </div>
            <div className="flex space-x-3 mt-2">
                <button className="text-orange-600 py-2 px-3 rounded flex items-center" style={{ background: "#fff", border: "1px dashed orange" }}>
                    All Services <FiBell className="ml-2" />
                </button>
                <button className="text-orange-600 py-2 px-3 rounded flex items-center" style={{ background: "#fff", border: "1px dashed orange" }}>
                    Add New Service <FiBell className="ml-2" />
                </button>
                <button className="text-orange-600 py-2 px-3 rounded flex items-center" style={{ background: "#fff", border: "1px dashed orange" }}>
                    Add New Category <FiBell className="ml-2" />
                </button>
            </div>
        </div>
    )
}