import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./_sections/header";
import Main from "./_sections/main";
import Footer from "./_sections/footer";
import ProjectDetails from "./assets/pages/portfolio";

export default function App() {
  return (
    <Router>
      <div id="wrapper" className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio/:id" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}