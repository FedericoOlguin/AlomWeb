import React from "react";
import "../Services/Services"
import foto from "../../Media/HomePicture.svg"
import ServicesHero from "../../Media/services-page.svg"
import "./services.css"





const Services = () => {



    return (<>
        <div className="containerPrincipal">
            <div className="textContainerHero">

                <h1>Servicios</h1>
                <h2 className="textoHero">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugiat ullam quos officiis? Est laboriosam consequatur inventore distinctio perferendis ipsa optio excepturi quidem, commodi adipisci. Iure odit sunt necessitatibus voluptas?</h2>
                
            </div>
                <img className="fotoFondo" src={ServicesHero} alt="Foto pc" />
        </div>
        <div className="container__secundario__servicios">

        </div>

        </>
    )
}

export default Services