import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";

import { CreateGame } from "./pages/CreateGame";
import { Home } from "./pages/Home";
import { LoginForm } from "./pages/LoginForm";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-game" element={<CreateGame />} />
                    <Route path="/login" element={<LoginForm />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
