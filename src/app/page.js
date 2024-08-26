import Link from "next/link";
import styles from "./page.module.css";
import Nav from "./components/nav";
import Carousel from "./components/carousel";

export default function Home() {
  return (
    <main className={styles.container}>
        <Nav /> 
      <div className={styles.container_02}>
        <div className={styles.conteudo}>
          <h1>
            Desafafio Workshop Fabrica de Software 2024.2
          </h1>
          <p className={styles.paragrafo}>
            Aqui temos um carrossel de imagens da rotação atual dos mapas no modo competitivo do Valorant.
          </p>
        </div>
        <Carousel />
      </div>
    </main>
  );
}
