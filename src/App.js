import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/Cards";
import CardDetails from "./components/CardDetails";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart" element={<CardDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
