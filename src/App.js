import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import ScrollToTop from "./utils/scrollToTop";

function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Navbar />
                <Routes>
                    <Route
                        path="https://Matthew160503.github.io/my-portfolio/"
                        element={<Home />}
                    />
                    <Route
                        path="https://Matthew160503.github.io/my-portfolio/projects"
                        element={<Projects />}
                    />
                    <Route
                        path="https://Matthew160503.github.io/my-portfolio/project/:id"
                        element={<ProjectPage />}
                    />
                    <Route
                        path="https://Matthew160503.github.io/my-portfolio/contacts"
                        element={<Contacts />}
                    />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
