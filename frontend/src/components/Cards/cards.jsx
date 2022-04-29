import React from "react";
import "./cards.css";
import imgCel from "../../Media/cel.svg";
import imgWeb from "../../Media/web.svg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Card() {
  return (
    <>
      <div className="card">
        <img src={imgCel} alt="Producto" className="img-card" />

        <div className="description">
          <div className="div-h3">
            <h3 className="description-h3">Macchiato mobile</h3>
          </div>
          <button className="boton-city">
            Demo
            <ArrowRightAltIcon />
          </button>
        </div>
      </div>

      <div className="card">
        <img src={imgWeb} alt="Producto" className="img-card" />

        <div className="description">
          <div className="div-h3">
            <h3 className="description-h3">Macchiato web</h3>
          </div>
          <button className="boton-city">
            Demo
            <ArrowRightAltIcon />
          </button>
        </div>
      </div>
    </>
  );
}
export default Card;
