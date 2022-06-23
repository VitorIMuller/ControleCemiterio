import Home from "./pages/Home"
import "./styles/reset.css"
import "./styles/style.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Cadastro from "./pages/Cadastro"
import Pagamentos from "./pages/Pagamentos"
import Consulta from "./pages/Consulta"
import CadastroSepultado from "./pages/CadastroSepultado"
import PersonalInformationForm from "./components/Form"

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cadastro" element={<PersonalInformationForm />} />
                <Route path="/pagamentos" element={<Pagamentos />} />
                <Route path="/consulta" element={<Consulta />} />
                <Route path="/cadastroSepultado" element={<CadastroSepultado />} />
            </Routes>
        </Router>

    )
}
