import styles from './Almondegainfo.module.css';

import imgAlmondegaBovino from "../../assets/img/AlmondegaP.jpg";
import imgAlmondegaMista from "../../assets/img/AlmondegaP.jpg";

const Almondegainfo = () => {


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Sabor e qualidade em cada mordida
      </h1>
      <p className={styles.subtitle}>
        A combinação perfeita entre a suculência da carne bovina e a leveza do frango em nossas deliciosas almôndegas.
      </p>
      <div className={styles.textContainer}>
        <div className={styles.textBlock}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>ALMÔNDEGA DE CARNE BOVINA</h2>
            <p className={styles.text}>Almôndega 25g | Caixa 10kg</p>
            <p className={styles.description}>
              A Almôndega de carne bovina da Rainha Alimentos é um clássico irresistível, perfeita para diversas receitas. Feita com carne bovina selecionada, oferece uma textura macia e um sabor marcante. Ideal para acompanhar massas, molhos ou ser apreciada como aperitivo, agrada aos paladares mais exigentes.
            </p>
          </div>
          <img src={imgAlmondegaBovino} alt="Caixa Almôndega Bovino" className={styles.image} />
        </div>
        <div className={styles.textBlock}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>ALMÔNDEGA DE CARNE BOVINA E DE FRANGO</h2>
            <p className={styles.text}>Almôndega 25g | Caixa 10kg</p>
            <p className={styles.description}>
              A Almôndega mista de carne bovina e de frango da Rainha Alimentos traz uma combinação equilibrada e deliciosa. Com a suculência da carne bovina e a leveza do frango, é ideal para quem busca variedade sem abrir mão do sabor e da qualidade.
            </p>
          </div>
          <img src={imgAlmondegaMista} alt="Caixa Almôndega Mista" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Almondegainfo;

