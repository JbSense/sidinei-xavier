import React from 'react'
import './styles.css'

// Components
import Header from '../../../components/Header/Header'

const Home = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      document.querySelector('.Header').classList.remove('dark')
    } else {
      document.querySelector('.Header').classList.add('dark')
    }
  })

  return (
    <div className='Home'>
      <Header background='transparent'/>

      <div className='Home__banner'>
        <img src='assets/images/banner-2.jpg' alt='Foto do Sidinei Xavier' />

        <div className='banner_text'>
          <h1>Olá sou Sidinei Xavier</h1>
          <p>Trabalhando para um futuro melhor</p>
        </div>
      </div>

      <div className='Home__bibliography'>
        <div className='bibliography__text'>
          <h1>Quem é Sidinei Xavier</h1>
          <p>Sidinei Xavier foi eleito, em 2016, vereador por Araquari. Formado em Processos Gerenciais pelo
            Centro Universitário Leonardo Da Vinci (UNIASSELVI), é defensor da participação popular nas decisões
            da Câmara, tanto que, um dos seus mai s sól idos projetos foi a implantação da votação eletrônica.
            Para ele, a política deve ser transparente e atender às demandas dos cidadãos, dando voz a eles.</p>
        </div>

        <img className='bibliography__perfil_image' src='assets/images/perfil.jpg' alt='Foto de perfil Sidinei Xavier' />
      </div>
    </div>
  )
}

export default Home
