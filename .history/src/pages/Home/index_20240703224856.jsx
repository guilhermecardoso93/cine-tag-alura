import { useEffect, useState } from "react";

import { Banner } from "../../components/Banner";
import { Titulo } from "../../components/Titulo";
import { Card } from "../../components/Card";

import styles from "./styles.module.css";

export function Home() {
  const [videos, setVideos] = useState([]);
  const api =
    "https://my-json-server.typicode.com/guilhermecardoso93/cinetag-api/videos";

  useEffect(() => {
    fetch(api)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, []);

  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
}
