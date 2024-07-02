import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import "./styles.module.css";

export function Home() {
  return (
    <>
      <Header />
      <Banner imagem='home'/>
      <Footer />
    </>
  );
}
