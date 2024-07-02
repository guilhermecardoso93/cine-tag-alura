import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Titulo } from "../../components/Titulo";
import { Footer } from "../../components/Footer";

import "./styles.module.css";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <>
      <Header />
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <Card id="1" capa="https://s4.static.brasilescola.uol.com.br/img/2019/09/panda.jpg" titulo="oi" />
      <Footer />
    </>
  );
}
