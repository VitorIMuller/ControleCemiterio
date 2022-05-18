import Home from "./pages/Home"
import "./styles/reset.css"
import "./styles/style.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />

            </Routes>
        </Router>

    )
}
