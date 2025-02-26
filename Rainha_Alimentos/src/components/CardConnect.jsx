import React from 'react'

export default function CardConnect() {
  return (
    <div className={styler.desc_rainha}>
            <img src={img} width={500} alt="Logo" />
            <h1>SEJA NOSSO REPRESENTANTE</h1>
            <p>
              Faça parte da Rainha Alimentos, uma empresa que valoriza qualidade e tradição.  
              Como nosso representante, você terá acesso a produtos de alta excelência, suporte dedicado  
              e uma parceria sólida para impulsionar seus negócios.  
            </p>
            <NavLink to='/teste' className={styler.botao}>QUERO SABER MAIS</NavLink>
          </div>
  )
}
