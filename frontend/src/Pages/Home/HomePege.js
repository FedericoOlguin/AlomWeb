import React from "react";
import "../Home/home.css"
import foto from "../../Media/HomePicture.svg"
import ResAbout from "../../components/ResAbout/ResAbout";
import Contactohome from "../../components/ContactoHome/ContactoHome";




const HomePage = () => {



    return (
        <>
            <div className="containerPrincipal">
                <div className="textContainerHero">

                    <h1 className="homePage__titulo">Álom</h1>
                    <h2 className="textoHero">Ahora si somos losotros</h2>
                    <h2 className="textoHero">Ahora si somos losotros</h2>
                </div>
                <img className="fotoFondo" src={foto} alt="Foto pc" />
            </div>
            <ResAbout />
            <Contactohome/>

        </>
    )
}

export default HomePage