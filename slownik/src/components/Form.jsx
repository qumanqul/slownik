import { useState, useEffect } from "react";
import data from "../data/wbpg.json";
import "../styles/Admin.css";





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

        if (action === "edit" && initialData) {
            setFormData({ ...initialData });
        } else {
            const emptyData = {};
            headers.forEach((h) => (emptyData[h] = ""));
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
        <h2>{action === "add" ? "Add New Entry" : "Edit Entry"}</h2>
        <form onSubmit={handleSubmit}>
            {headers.map((header) => (
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
            <button type="submit">Save</button>
            <button type="button" onClick={() => setAction("watch")}>
                Cancel
            </button>
            </div>
        </form>
        </div>
    );
}
