import { useState, useEffect } from "react";
import data from "../data/wbpg.json";
import "../styles/Admin.css";
import renderWork from "../renderFunctions/renderWork.js";

export default function Form({ 
    action, 
    section, 
    setAction, 
    onSubmit, 
    initialData 
    }) {
    const [formData, setFormData] = useState({});
    const headers = section ? Object.keys(data[section.id]?.data?.[0] || {}) : [];

    useEffect(() => {
        if (!section) return;

        const sectionData = data[section.id]?.data || [];

        if (action === "edit" && initialData) {
        setFormData({ ...initialData });
        } else {
        const emptyData = {};
        headers.forEach((h) => (emptyData[h] = ""));

        const nextId =
            sectionData.length > 0
            ? Math.max(...sectionData.map((item) => Number(item.id) || 0)) + 1
            : 1;

        if (headers.includes("id")) {
            emptyData.id = nextId;
        }

        setFormData(emptyData);
        }
    }, [action, section, initialData]);

    const handleChange = (e, header) => {
        setFormData({ ...formData, [header]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="form-container">
        <div style={{ borderRight: "1px solid black", paddingRight: "20px" }}>
            <h2>{action === "add" ? "Add New Entry" : "Edit Entry"}</h2>
            <h2>{section.label}</h2>
            <form onSubmit={handleSubmit} style={{ minWidth: "300px" }}>
            {headers
                .filter((header) => header !== "id")
                .map((header) => (
                <div key={header} className="form-field">
                    <label>{header}</label>
                    <input
                    type="text"
                    value={formData[header] || ""}
                    onChange={(e) => handleChange(e, header)}
                    />
                </div>
                ))}
            <div className="form-buttons">
                <button
                style={{ backgroundColor: "green", height: "30px" }}
                type="submit"
                >
                Save
                </button>
                <button
                style={{
                    backgroundColor: "red",
                    height: "30px",
                    marginTop: "10px",
                }}
                type="button"
                onClick={() => setAction("watch")}
                >
                Cancel
                </button>
            </div>
            </form>
        </div>

        <div>
            <p
            dangerouslySetInnerHTML={{
                __html: renderWork(formData, section.full_label),
            }}
            ></p>
        </div>
        </div>
    );
}
