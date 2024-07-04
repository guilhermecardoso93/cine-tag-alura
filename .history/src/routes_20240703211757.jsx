import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

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
          </Routes>
        </FavoritosProvider>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}
