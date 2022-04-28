import React from "react";
import "./resAbout.css"

import { Link as LinkRouter } from "react-router-dom"




const ResAbout = () => {
    return (
        <div className="aboutContainer">
            <h2 className="textCenter">A little about us</h2>
            <div className="centrarContainer">
                <div className="aboutContainerBody">
                    <p className="textResAbout">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam voluptate cum, consectetur deserunt at adipisci perspiciatis blanditiis deleniti eum odit ipsa reprehenderit beatae non aperiam id sit laudantium, cupiditate officiis maxime et. Exercitationem minima, et odio doloremque nesciunt obcaecati architecto, inventore repellat qui maiores adipisci, dignissimos facere ad fugit ex modi cum illum velit dolores eius! Consequatur iure quam deleniti, voluptas dignissimos perferendis sapiente officia ipsa quibusdam natus magnam deserunt odio </p>
                </div>
                <div className="aboutContainerBody botonContainer">


                    <button className="buttonAbout"> See More</button>

                </div>
            </div>
        </div>
    )
}
export default ResAbout