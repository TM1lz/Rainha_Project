
import styles from "./HambInfo.module.css";
import imgHambBovino from "../../assets/img/HamburguerPBovino.jpg";
import imgHambMisto from "../../assets/img/HamburguerPMisto.jpg";

const HambInfo = () => {
  const burgers = [
    { weight: "56g", className: styles.burgerRed },
    { weight: "90g", className: styles.burgerBlue },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Uma explosão de sabores em cada mordida
      </h1>
      <p className={styles.subtitle}>
        A combinação perfeita entre a suculência da carne bovina e a leveza do frango em nossos irresistíveis hambúrgueres.
      </p>
      <div className={styles.burgerContainer}>
        {burgers.map((burger, index) => (
          <div key={index} className={`${styles.burger} ${burger.className}`}>
            {burger.weight}
          </div>
        ))}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textBlock}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>HAMBÚRGUER DE CARNE BOVINA</h2>
            <p className={styles.text}>Hambúrguer 90g | Caixa 3.240kg</p>
            <p className={styles.text}>Hambúrguer 56g | Caixa 2.016kg</p>
            <p className={styles.description}>
              O Hambúrguer de carne bovina da Rainha Alimentos é um clássico da gastronomia, conhecido por sua versatilidade e sabor inconfundível. Feito a partir de carne bovina, esse produto oferece uma experiência culinária deliciosa e reconfortante. Sua popularidade se deve à possibilidade de ser personalizado com uma infinidade de ingredientes, temperos e acompanhamentos, adaptando-se aos mais variados gostos e preferências.
            </p>
          </div>
          <img src={imgHambBovino} alt="Caixa Hambúrguer Bovino" className={styles.image} />
        </div>
        <div className={styles.textBlock}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>HAMBÚRGUER DE CARNE BOVINA E DE FRANGO</h2>
            <p className={styles.text}>Hambúrguer 56g | Caixa 2.016kg</p>
            <p className={styles.description}>
              O Hambúrguer misto de carne bovina e de frango da Rainha Alimentos é uma opção culinária que combina o melhor de dois mundos: a suculência da carne bovina e a leveza da carne de frango. Esta combinação apresenta uma alternativa que mescla a intensidade e a suavidade de sabores, agradando tanto aos apreciadores da carne bovina quanto aos que preferem opções mais leves.
            </p>
          </div>
          <img src={imgHambMisto} alt="Caixa Hambúrguer Misto" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default HambInfo;
