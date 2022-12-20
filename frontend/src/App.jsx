import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { CreateGame } from "./pages/CreateGame";
import { Home } from "./pages/Home";
import { LoginForm } from "./pages/LoginForm";
import { NumPlayerForm } from "./pages/NumPlayerForm";
import { PlayerCharacterForm } from "./pages/PlayerCharacterForm";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-game" element={<CreateGame />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/num-players" element={<NumPlayerForm />} />
                    <Route path="/players-character-form" element={<PlayerCharacterForm />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
