import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

// Components
import Contact from '../../../components/Contact/Contact'
import Header from '../../../components/Header/Header'
import ProjectCard from '../../../components/ProjectCard/ProjectCard'
import NewsCard from '../../../components/NewsCard/NewsCard'

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
    // {
    //   title: 'Nome do Projeto',
    //   summary: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    // },
    // {
    //   title: 'Nome do Projeto',
    //   summary: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    // },
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

  const news = [
    {
      title: 'Titulo not??cia',
      summary: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      imagePath: 'assets/images/ft.jpg'
    },
    {
      title: 'Titulo not??cia',
      summary: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      imagePath: 'assets/images/ft.jpg'
    },
    {
      title: 'Titulo not??cia',
      summary: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      imagePath: 'assets/images/ft.jpg'
    },
    {
      title: 'Titulo not??cia',
      summary: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      imagePath: 'assets/images/ft.jpg'
    }
  ]

  return (
    <div className='Home'>
      <Header background='transparent'/>

      <div className='Home__banner'>
        <img src='assets/images/banner-2.jpg' alt='Foto do Sidinei Xavier' />

        <div className='banner_text'>
          <h1>Ol?? sou Sidinei Xavier</h1>
          <p>Trabalhando para um futuro melhor</p>
        </div>
      </div>

      <div className='Home__bibliography'>
        <div className='bibliography__text'>
          <h1>Quem ?? Sidinei Xavier</h1>
          <p>Sidinei Xavier foi eleito, em 2016, vereador por Araquari. Formado em Processos Gerenciais pelo
            Centro Universit??rio Leonardo Da Vinci (UNIASSELVI), ?? defensor da participa????o popular nas decis??es
            da C??mara, tanto que, um dos seus mai s s??l idos projetos foi a implanta????o da vota????o eletr??nica.
            Para ele, a pol??tica deve ser transparente e atender ??s demandas dos cidad??os, dando voz a eles.</p>
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
        <h1 className='news__title'>Not??cias</h1>

        <div className="news__align-content">
          <div className="news__align">
            <NewsCard news={news} />
          </div>
        </div>
      </div>

      <Contact />
    </div>
  )
}

export default Home
