import Home from "./pages/Home"
import "./styles/reset.css"
import "./styles/style.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Cadastro from "./pages/Cadastro"
import Pagamentos from "./pages/Pagamentos"
import Consulta from "./pages/Consulta"

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cadastro" element={<Cadastro />} />
                <Route path="/pagamentos" element={<Pagamentos />} />
                <Route path="/consulta" element={<Consulta />} />
            </Routes>
        </Router>

    )
}
