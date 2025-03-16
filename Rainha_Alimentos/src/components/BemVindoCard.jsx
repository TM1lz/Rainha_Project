import logo from "../assets/logo.png";

const BemVindoCard = () => {
  return (
    <div style={{ padding: '20px', margin: '10px', textAlign: 'center', borderRadius: '15px', maxWidth: '100vh', marginBottom: '20px', background: 'linear-gradient(135deg, #DE0B27, #F57C00)', position: 'relative', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease-in-out' }}>
      <div style={{ marginBottom: '20px' }}>
        <img src={logo} alt="Logo" style={{ height: '70px', transition: 'transform 0.3s ease-in-out' }} />
      </div>
      <h1 style={{ fontSize: '2.2em', color: '#fff', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '10px', textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }}>
        Bem-vindo à nossa fábrica de sabores!
      </h1>
      <p style={{ color: '#e8e8e8', fontSize: '1.2em', marginTop: '10px', lineHeight: '1.6' }}>
        Aqui, cada produto é feito com carinho e dedicação para levar até você o melhor sabor e qualidade.
        Experimente nossos hambúrgueres suculentos, almôndegas irresistíveis e kibes crocantes. 
      </p>
      <p style={{ color: '#f0f0f0', fontSize: '1.1em', marginTop: '15px', fontStyle: 'italic' }}>Aproveite e leve o sabor da nossa fábrica para a sua mesa!</p>
      <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ fontSize: '1.1em', color: '#fff', fontWeight: 'bold', marginBottom: '20px', letterSpacing: '1px' }}>Role para baixo e veja os produtos em destaque!</p>
        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', animation: 'bounce 2s infinite' }}>
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '50px', height: '50px', fill: '#fff', transform: 'rotate(0deg)', transition: 'transform 0.3s ease-in-out' }}
          >
            <path d="M12 19l-7-7 1.41-1.41L12 16.17l5.59-5.58L19 12z" />
          </svg>
        </button>
      </div>
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(10px);
            }
            60% {
              transform: translateY(5px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default BemVindoCard;
