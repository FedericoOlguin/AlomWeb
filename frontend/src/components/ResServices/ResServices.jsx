import React from "react";
import "./resServices.css"





function ResServices() {
    return (
        <>
            <h2 className="textCenter">Our ecosystem</h2>
            <div className="serviceContainer">
                <div className="serviceContainer__servicio">
                    <h3>Titulo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, similique facilis totam est omnis non.</p>
                </div>
                <div className="serviceContainer__servicio">
                    <img className="serviceContainer__imagen" src="https://images.pexels.com/photos/8177853/pexels-photo-8177853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                </div>
                <div className="serviceContainer__servicio ">
                    <img className="serviceContainer__imagen" src="https://images.pexels.com/photos/3473525/pexels-photo-3473525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                </div>
                <div className="serviceContainer__servicio">
                    <h3>Titulo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, similique facilis totam est omnis non.</p>
                </div>
            </div>
        </>

    )
}
export default ResServices