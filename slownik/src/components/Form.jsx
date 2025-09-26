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

        if (action === "edit" && initialData) {
            setFormData({ ...initialData });
        } else {
            const emptyData = {};
            headers.forEach((h) => (emptyData[h] = ""));
            setFormData(emptyData);
        }
    }, [action, section, initialData]);



    const handleChange = (e, header) => {
        setFormData({ ...formData, [header]: e.target.value })
        console.log(section);
        console.log(formData);
        };



    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };



    return (
        <div className="form-container">
            <div style={{borderRight: "1px solid black", paddingRight: "20px"}}>
                <h2>{action === "add" ? "Add New Entry" : "Edit Entry"}</h2>
                <h2>{section.label}</h2>
                <form onSubmit={handleSubmit} style={{minWidth: "300px"}}>
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
            <div>
                <p
                    dangerouslySetInnerHTML={{
                        __html: renderWork(formData, section.full_label),
                    }}>
                    </p>
            </div>
        </div>
    );
}
