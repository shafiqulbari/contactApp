import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactProvider } from "./context/ContactContext";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";

const App = () => {
  return (
    <ContactProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddContact />} />
        </Routes>
      </BrowserRouter>
    </ContactProvider>
  );
};

export default App;
