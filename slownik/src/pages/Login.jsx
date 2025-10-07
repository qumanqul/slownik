import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        // Example static credentials
        const ADMIN_USER = "admin";
        const ADMIN_PASS = "1234";

        if (username === ADMIN_USER && password === ADMIN_PASS) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/admin");
        } else {
        setError("Invalid username or password");
        }
    }

    return (
        <div className="login-container">
        <h2>Login to Admin Panel</h2>
        <form onSubmit={handleSubmit} className="login-form">
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <button type="submit">Login</button>
            {error && <p className="error">{error}</p>}
        </form>
        </div>
    );
}
