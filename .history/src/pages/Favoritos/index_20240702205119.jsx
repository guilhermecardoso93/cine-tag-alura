import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { Titulo } from "../../components/Titulo";

export function Favoritos() {
  return (
    <div>
      <Header />
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Favoritos</h1>
      </Titulo>
    </div>
  );
}
