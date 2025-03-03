import styles from './About.module.css';

import img from '../../assets/logo.png';
const logos = [
  "https://www.rainhaalimentos.ind.br/public/arquivos/upload/4c4cbd55ac1604e2921a7a2ca4672580.jpg",
  "https://www.rainhaalimentos.ind.br/public/arquivos/upload/049b944fd82e47d0b9d3233ab197c137.jpg",
  "https://www.rainhaalimentos.ind.br/public/arquivos/upload/0bec9313279b39f2c538cd9003e8202f.jpg",
  "https://www.rainhaalimentos.ind.br/public/arquivos/upload/4e748173b1546fb3129dfc696e397f02.jpg",
  "https://www.rainhaalimentos.ind.br/public/arquivos/upload/135e1306ce37be1fb58fe991d66adfee.jpg",
  "https://www.rainhaalimentos.ind.br/public/arquivos/upload/ce1771dbe35bcfde6b1be85281381229.jpg",
  "https://www.rainhaalimentos.ind.br/public/arquivos/upload/1c5fb82f3d705128a714233ff3804a85.jpg",
  "https://www.rainhaalimentos.ind.br/public/arquivos/upload/eb7e7021515447086128b9cb9a4cc46e.jpg",
  "https://www.rainhaalimentos.ind.br/public/arquivos/upload/8cd8971446e3405a2ceafead65549dc1.jpg" ,
  "https://www.rainhaalimentos.ind.br/public/arquivos/upload/95e24a829a4b9d3ac70117986b5f7858.jpg","https://www.rainhaalimentos.ind.br/public/arquivos/upload/1b28368374e3d9842ae2d9498b413a6e.jpg",
];

const About = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.image}>
        <img
          src={img}
          alt="Rainha Alimentos"
        />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            O prazer de saborear através da nossa paixão por alimentos.
          </h2>
          <p className={styles.paragraph}>
            A Rainha Alimentos atua no mercado com paixão pela culinária com fusão na inovação tecnológica tendo como compromisso a qualidade.
          </p>
          <p className={styles.paragraph}>
            Somos uma empresa dedicada à produção e comercialização de alimentos industrializados, trazendo praticidade e sabor para a sua mesa. Nossa equipe é formada por profissionais desde especialistas em gastronomia até engenheiros de alimentos altamente qualificados.
          </p>
          <p className={styles.paragraph}>
            Acreditamos firmemente que a qualidade é a base de tudo o que fazemos. Mantemos rigorosos padrões em todas as nossas operações, garantindo alimentos seguros e saborosos. Comprometidos com a sustentabilidade, buscamos minimizar nosso impacto ambiental.
          </p>
        </div>
      </div>
    </div>
    <div className={styles.card}>
    <h2 className={styles.title}>Experiência de Mercado</h2>
      <p className={styles.description}>
        Há mais de 10 anos atendendo empresas no ramo de Food Service, Atacado e Varejo. Entre elas, as maiores redes de Cozinhas Industriais, Atacadistas, Supermercados, Distribuidores e Prefeituras.
      </p>
      <div className={styles.logoGrid}>
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} className={styles.logo} />
        ))}
      </div>
    </div>
    </>
  );
};

export default About;