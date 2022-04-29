import React from "react";
import "../Services/Services";
import foto from "../../Media/HomePicture.svg";
import ServicesHero from "../../Media/services-page.svg";
import "./services.css";
import MobileDev from "../../Media/mobile_development.svg";
import WebDev from "../../Media/web_developer.svg";
import CoWorking from "../../Media/co-working.svg";

const Services = () => {
  return (
    <>
      <div className="containerPrincipal">
        <div className="textContainerHero">
          <h1>Servicios</h1>
          <h2 className="textoHero">
            Ofrecemos un completo espectro de servicios para ayudar a que las
            organizaciones funcionen mejor. Todo, desde la creación de normas de
            excelencia, hasta capacitar a su gente para trabajar de maneras más
            efectivas, evaluando cómo lo está haciendo y ayudándole a
            desempeñarse mejor en el futuro. Muy pocos de los demás hacen esto,
            y ninguno lo ha hecho por tanto tiempo como nosotros.
          </h2>
        </div>
        <img className="foto__fondo" src={ServicesHero} alt="Foto pc" />
      </div>
      <div className="container__secundario__servicios">
        <div className="servicios__cartas">
          <img className="servicios__foto" src={MobileDev} alt="mobile" />
          <div>
            <h2>Soporte</h2>
            <p className="services__parrafo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sint!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, minima? Maxime quaerat quisquam quos modi perspiciatis
              officiis quo beatae possimus!
            </p>
          </div>
        </div>
        <div className="servicios__cartas foto-invertida ">
          <img
            className="servicios__foto invertir "
            src={WebDev}
            alt="mobile"
          />
          <div>
            <h2>Soporte</h2>
            <p className="services__parrafo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sint!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, minima? Maxime quaerat quisquam quos modi perspiciatis
              officiis quo beatae possimus!
            </p>
          </div>
        </div>
        <div className="servicios__cartas">
          <img className="servicios__foto" src={CoWorking} alt="mobile" />
          <div>
            <h2>Soporte</h2>
            <p className="services__parrafo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sint!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, minima? Maxime quaerat quisquam quos modi perspiciatis
              officiis quo beatae possimus!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
