import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./_sections/header";
import Main from "./_sections/main";
import Footer from "./_sections/footer";
import ProjectDetails from "./assets/pages/portfolio";

export default function App() {
  return (
    <Router>
      <div id="wrapper" className="relative flex flex-col z-10">
        <div id="backgroundcolor" className="absolute inset-0 w-full z-[-1]"></div>
        <div id="background" className="absolute top-0 left-0 w-[100%] h-[100%] opacity-15 inset-0 z-[-1]"></div>
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