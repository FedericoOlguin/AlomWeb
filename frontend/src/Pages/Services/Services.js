import React from "react";
import "../Services/Services"
import foto from "../../Media/HomePicture.svg"





const Services = () => {



    return (
        <div className="containerPrincipal">
            <div className="textContainerHero">

                <h1>Átom</h1>
                <h2 className="textoHero">Hola Soy un Services </h2>
                
            </div>
                <img className="fotoFondo" src={foto} alt="Foto pc" />
        </div>

    )
}

export default Services