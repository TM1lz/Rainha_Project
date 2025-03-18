import Carrosel from "../../components/Carrossel";
import styler from "./Home.module.css";
import { NavLink } from "react-router-dom";

import img from '../../assets/logo.png';
import almdg from '../../assets/wall.img/amlgjpeg.jpg';
import hambg from '../../assets/wall.img/hambjpeg.jpg';
import kibe from '../../assets/wall.img/kibejpeg.jpg';
import TesteCard from "../../components/BemVindoCard";

export default function Home() {
  return (
    <div className={styler.i}>
      <div className={styler.carrosel}>
        <Carrosel />
      </div>
      <div className={styler.container}></div>
      <TesteCard></TesteCard>
      <h2 className={styler.produtos_destaque}>Produtos em Destaque</h2>

      <div className={styler.box_hamb}>
        <div className={styler.desc_hamb}>
          <h2>HAMBÚRGUER ARTESANAL</h2>
          <p>
            Feito com ingredientes selecionados e carne 100% bovina, nosso hambúrguer traz o sabor  
            irresistível da tradição. Suculento, macio e perfeito para qualquer ocasião,  
            é a escolha ideal para quem busca qualidade e sabor incomparáveis.
          </p>
          <NavLink to="/hamburguer" className={styler.botao}>SAIBA MAIS</NavLink>
        </div>
        <div className={styler.img_hamb}>
          <img src={hambg} alt="Hambúrguer Artesanal" />
        </div>
      </div>

      <div className={styler.box_almdg}>
        <div className={styler.desc_almdg}>
          <p>
            Nossas almôndegas são preparadas com temperos exclusivos e carne de altíssima qualidade.  
            Versáteis e deliciosas, são perfeitas para acompanhar massas, sanduíches ou mesmo para  
            serem saboreadas sozinhas. Surpreenda-se com essa explosão de sabor!
          </p>
          <h2>ALMÔNDEGAS SABOROSAS</h2>
          <NavLink to="/almondega" className={styler.botao}>SAIBA MAIS</NavLink>
        </div>
        <div className={styler.img_almdg}>
          <img src={almdg} alt="Almôndegas Saborosas" />
        </div>
      </div>

      <div className={styler.box_custom}>
        <div className={styler.desc_custom}>
          <h2>KIBE CROCANTE</h2>
          <p>
            Inspirado na autêntica culinária árabe, nosso kibe combina crocância por fora e  
            um recheio suculento por dentro. Feito com trigo especial e temperos selecionados,  
            é uma opção deliciosa para qualquer momento do dia.
          </p>
          <NavLink to="/kibe" className={styler.botao}>SAIBA MAIS</NavLink>
        </div>
        <div className={styler.img_custom}>
          <img src={kibe} alt="Kibe Crocante" />
        </div>
      </div>
      <div className={styler.desc_rainha}>
            <img src={img} width={500} alt="Logo" />
            <h1>SEJA NOSSO REPRESENTANTE</h1>
            <p>
              Faça parte da Rainha Alimentos, uma empresa que valoriza qualidade e tradição.  
              Como nosso representante, você terá acesso a produtos de alta excelência, suporte dedicado  
              e uma parceria sólida para impulsionar seus negócios.  
            </p>
            <NavLink to='/conect' className={styler.botao}>JUNTE-SE </NavLink>
          </div>
    </div>
  );
}
