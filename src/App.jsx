import { Header } from "./Header";
import { Login } from "./Login";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { EmployeesHome } from "./EmployeesHome";
import { TodosNew } from "./TodosNew";
import { Punchin } from "./Punchin";
function App() {
  return (
    <BrowserRouter>
      <div className="footer">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/todos" element={<Home />} />
          <Route path="/todos/new" element={<TodosNew />} />
          <Route path="/employees" element={<EmployeesHome />} />
          <Route path="/employees/punchin" element={<Punchin />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
