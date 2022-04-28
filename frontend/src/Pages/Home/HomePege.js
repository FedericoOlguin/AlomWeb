import React from "react";
import "../Home/home.css"
import foto from "../../Media/HomePicture.svg"





const HomePage = () => {



    return (
        <div className="containerPrincipal">
            <div className="textContainerHero">

                <h1>Álom</h1>
                <h2 className="textoHero">Ahora si somos losotros</h2>
                <h2 className="textoHero">Ahora si somos losotros</h2>
            </div>
                <img className="fotoFondo" src={foto} alt="Foto pc" />
        </div>

    )
}

export default HomePage