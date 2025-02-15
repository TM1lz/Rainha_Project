import Carrosel from "../../components/Carrossel";
import styler from "./Home.module.css";

export default function Home() {
  return (
    <div className={styler.i}>
      <div className={styler.carrosel}>
        <Carrosel />
      </div>
      <div className={styler.container}></div>
      
      {/* Primeiro Box */}
      <div className={styler.box_hamb}>
        <div className={styler.desc_hamb}>
          <h2>Título da Descrição</h2>
          <p>
            Essa é uma descrição ao lado da imagem. O layout foi feito para ser
            limpo e agradável. A ideia é que, ao lado de cada texto, tenha uma
            imagem que represente visualmente o conteúdo de maneira atraente e
            interessante.
          </p>
        </div>
        <div className={styler.img_hamb}></div>
      </div>

      {/* Segundo Box */}
      <div className={styler.box_almdg}>
        <div className={styler.desc_almdg}>
          <p>
            Essa é uma descrição ao lado da imagem. O layout foi feito para ser
            limpo e agradável. A ideia é que, ao lado de cada texto, tenha uma
            imagem que represente visualmente o conteúdo de maneira atraente e
            interessante.
          </p>
          <h2>Título da Descrição</h2>
        </div>
        <div className={styler.img_almdg}></div>
      </div>

      {/* Terceiro Box */}
      <div className={styler.box_custom}>
        <div className={styler.desc_custom}>
          <h2>Título da Descrição</h2>
          <p>
            Essa é uma descrição ao lado da imagem. O layout foi feito para ser
            limpo e agradável. A ideia é que, ao lado de cada texto, tenha uma
            imagem que represente visualmente o conteúdo de maneira atraente e
            interessante.
          </p>
        </div>
        <div className={styler.img_custom}></div>
      </div>
    </div>
  );
}
