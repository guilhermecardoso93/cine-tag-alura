import { Outlet } from "react-router-dom";
import { FavoritosProvider } from "../../contexto/favoritos";

import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";

export function PaginaBase() {
  return (
    <main>
      <Header />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Footer />
    </main>
  );
}
