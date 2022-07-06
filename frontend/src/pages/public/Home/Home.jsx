import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

// Components
import Header from '../../../components/Header/Header'
import ProjectCard from '../../../components/ProjectCard/ProjectCard'

function Home () {
  window.addEventListener('scroll', () => {
    const headerTag = document.querySelector('.Header')
    if (window.scrollY > 10) {
      headerTag.classList.remove('transparent')
      headerTag.classList.add('dark')
    } else {
      headerTag.classList.remove('dark')
      headerTag.classList.add('transparent')
    }
  })

  const examples = [
    {
      title: 'Nome do Projeto',
      summary: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Nome do Projeto',
      summary: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Nome do Projeto',
      summary: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Nome do Projeto',
      summary: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Nome do Projeto',
      summary: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Nome do Projeto',
      summary: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Nome do Projeto',
      summary: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Nome do Projeto',
      summary: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    }
  ]

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

      <div className='Home__projects'>
        <h1 className='projects__title'>Projetos Aprovados</h1>

        <div className='projects__section-cards'>
          <div className="projects__section-cards-align">
            <ProjectCard projects={examples}/>
          </div>
        </div>

        <Link to='#' className='projects__button'>Ver todos os projetos</Link>
      </div>

      <div className="Home__news">
        <h1 className='news__call-title'>Venha conferir as noticias abaixo sobre a nossa cidade</h1>
        <h1 className='news__title'>Notícias</h1>
      </div>
    </div>
  )
}

export default Home
