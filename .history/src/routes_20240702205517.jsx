import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Favoritos } from "./pages/Favoritos";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}
