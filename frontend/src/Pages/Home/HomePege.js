import React from "react";
import "../Home/home.css"
import foto from "../../Media/HomePicture.svg"
import ResAbout from "../../components/ResAbout/ResAbout";
import ResServices from "../../components/ResServices/ResServices"





const HomePage = () => {



    return (
        <>
            <div className="homePage__containerPrincipal">
                <div className="homePage__textContainerHero">

                    <h1 className="homePage__titulo">Álom</h1>
                    <h2 className="texto__Hero">Ahora si somos losotros</h2>
                    <h2 className="texto__Hero">Ahora si somos losotros</h2>
                </div>
                <img className="homePage__fotoFondo" src={foto} alt="Foto pc" />
            </div>
            <ResAbout />
            <ResServices/>

        </>
    )
}

export default HomePage