import styles from './Carrosel.module.css';
import { useState, useEffect } from 'react';

// Importar a imagem corretamente do diretório assets
import imgHamb from '../assets/img/HamburguerW.jpg';
import imgKibe from '../assets/img/KibeW.jpg';
import imgAlmond from '../assets/img/AlmondegaW.jpg';


function Carrosel() {
  // Defina as imagens manualmente
  const data = [
    { id: 0, img: imgHamb },
    {id: 1 , img: imgKibe }, 
    {id: 2 , img: imgAlmond }
    // Adicione mais imagens conforme necessário
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para mudar o slide automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000); // Muda a imagem a cada 4 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, [data.length]);

  // Função para selecionar o slide manualmente ao clicar nos indicadores
  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles['carousel-container']}>
  <div className={styles.carousel}>
    <div
      className={styles['carousel-slides']}
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {data.map((item) => (
        <div key={item.id} className={styles['carousel-item']}>
          <img src={item.img} alt={`slide-${item.id}`} />
        </div>
      ))}
    </div>
  </div>

  {/* Indicadores de navegação em bolinhas */}
  <div className={styles['carousel-indicators']}>
    {data.map((_, index) => (
      <span
        key={index}
        className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
        onClick={() => handleIndicatorClick(index)}
      />
    ))}
  </div>
</div>

  );
}

export default Carrosel;
