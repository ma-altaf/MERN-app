import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Error from "./pages/Error";
import Home from "./pages/Home";
import AuthContext from "./context/AuthContext";

function App() {
    return (
        <BrowserRouter>
            <AuthContext>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </AuthContext>
        </BrowserRouter>
    );
}

export default App;
