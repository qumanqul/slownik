import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css";
import List from "../components/List";
import Menu from "../components/Menu";
import Form from "../components/Form";
import rawData from "../data/wbpg_fixed.json";

export default function Admin() {
    const navigate = useNavigate();
    const [section, setSection] = useState(null);
    const [page, setPage] = useState(1);
    const [action, setAction] = useState("watch");
    const [editIndex, setEditIndex] = useState(null);
    const [data, setData] = useState(rawData);

    useEffect(() => {
        const loggedIn = localStorage.getItem("isLoggedIn") === "true";
        if (!loggedIn) {
        navigate("/login");
        }
    }, [navigate]);

    function handleAdd(newRow) {
        if (!section) return;
        const updated = { ...data };
        updated[section.id].data.push(newRow);
        setData(updated);
        setAction("watch");
    }

    function handleEdit(updatedRow) {
        if (!section || editIndex === null) return;
        const updated = { ...data };
        updated[section.id].data[editIndex] = updatedRow;
        setData(updated);
        setEditIndex(null);
        setAction("watch");
    }

    function handleDelete(index) {
        if (!section) return;
        const updated = { ...data };
        updated[section.id].data.splice(index, 1);
        setData(updated);
    }

    function render() {
        switch (action) {
        case "watch":
            return (
            <List
                section={section}
                page={page}
                setPage={setPage}
                setAction={setAction}
                setEditIndex={setEditIndex}
                data={data}
                handleDelete={handleDelete}
            />
            );
        case "edit":
            return (
            <Form
                action={action}
                section={section}
                setAction={setAction}
                onSubmit={handleEdit}
                initialData={data[section.id].data[editIndex]}
            />
            );
        case "add":
            return (
            <Form
                action={action}
                section={section}
                setAction={setAction}
                onSubmit={handleAdd}
            />
            );
        default:
            return null;
        }
    }

    return (
        <div>
        <div className="h1-div">
            <h1>Admin page</h1>
            <button
            onClick={() => {
                localStorage.removeItem("isLoggedIn");
                navigate("/login");
            }}
            >
            Logout
            </button>
        </div>
        <div className="admin-page">
            <Menu setSection={setSection} setPage={setPage} setAction={setAction} />
            {section ? render() : <p>Select a menu item</p>}
        </div>
        </div>
    );
}
