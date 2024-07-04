import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FavoritosProvider } from "./contexto/favoritos";

import { Home } from "./pages/Home";
import { Favoritos } from "./pages/Favoritos";
import { Player } from "./pages/Player";
import { NaoEncontrada } from "./pages/NaoEncontrada";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
            <Route path=":id" element={<Player />}></Route>
            <Route path="*" element={<NaoEncontrada />}></Route>
          </Routes>
        </FavoritosProvider>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}
