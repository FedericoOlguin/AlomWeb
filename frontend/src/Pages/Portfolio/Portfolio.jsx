import React, { useEffect, useState } from "react";
import "./portfolio.css";
import SvgService from "../../Media/services.svg";
import Card from "../../components/Cards/cards";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import scrollUp from "../../Media/scrollUp.svg";

function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY <= 500) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div id="titulo" className="div__portfolio-titulo">
        <h1 className="portfolio__titulo">Nuestro Portafolio</h1>
      </div>

      <div id="div__portfolio-ppal">
        <img src={SvgService} alt="Equipo de trabajo álom" />
        <div className="div__portfolio-logo">
          <img src="" alt="" />
        </div>
      </div>
{/* TODO COMENTARIO PARA BORRAR */}
      <a href="#titulo">
        {/* <ArrowUpwardIcon className={color ? ("scarollUp") : ("scarollUp2")} /> */}
        <img
          alt="scroll"
          src={scrollUp}
          className={color ? "scarollUp" : "scarollUp2"}
        />
      </a>

      <div className="div__portfolio-parrafo">
        <h2 className="portfolio__subtitulo">Álom</h2>
        <p className="portfolio__parrafo">
          Somos una empresa que nace de la visión de un grupo de amigos y su
          pasión por la programación. Construimos soluciones de Software de
          forma inteligente, orientadas a las necesidades y requerimientos del
          cliente cuidando siempre la experiencia del usuario. Estamos
          comprometidos con cada proyecto que realizamos y siempre estamos
          buscando escalar nuestra experiencia. Como parte de la vivencia del
          equipo hemos desarrollado aplicaciones desde la conformación de su
          manejo de datos (backend) hasta la visualización que va a experimentar
          el usuario (frontend y UI), tanto a nivel web como mobile.
        </p>
      </div>
      <div id="div__portfolio-filtros">
        <button className="button__portfolio">Web</button>
        <button className="button__portfolio">Móvil</button>
      </div>
      <div id="div__portfolio-cartas">
        <Card />
        <Card />
      </div>
    </>
  );
}
export default Portfolio;
