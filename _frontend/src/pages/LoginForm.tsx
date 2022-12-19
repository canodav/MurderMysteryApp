import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";

export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch("http://localhost:4000/api/user/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                email,
            }),
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.error) {
                    setError(json.error);
                } else {
                    localStorage.setItem("token", json.email);
                    navigate("/");
                }
            });
    };
    return (
        <div>
            <Header />
            <div id="app-content">
                <div className="login-form">
                    <h3>Login</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={username} onChange={(event) =>setUsername(event.target.value)}/>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        <button type="submit">Login</button>
                    </form>
                    {error && <p>{error}</p>}
                </div>
            </div>
        </div>
    );
};
