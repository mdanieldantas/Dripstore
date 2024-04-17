import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos"
import MeusPedidos from "./pages/MeusPedidos"
import Categorias from "./pages/Categorias"


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="categorias" element={<Categorias />} />
          <Route path="meusPedidos" element={<MeusPedidos />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
