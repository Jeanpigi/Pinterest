import React, {Component} from 'react';
import Link from 'next/link';

class Platzi extends Component {
    render() {
        return (
            <div>
                <div className="hero">
                    <div className="hero-container">
                        <figure className="badge">
                            <img src="../static/badge.png" alt="badge"></img>
                        </figure>
                        <h1 className="titulo">Prueba de enlace</h1>
                        <Link href="/">
                            <a>Home Page</a>
                        </Link>
                        <div className="description">
                            <p>React es una de las librerías más utilizadas hoy en día para crear aplicaciones web. En este curso podrás dominar la creación de aplicaciones a través de un proyecto que te ayudará a explotar todas las capacidades de esta librería.</p>
                        </div>
                        <form action="" className="form">
                            <p>Regístrate a Platzi</p>
                            <input type="text" placeholder="Nombre"/>
                            <input type="email" placeholder="Correo"/>
                            <input type="submit" />
                        </form>
                        <div className="countdown">
                            <p>Lanzamiento</p>
                            <p>
                                <span>01d</span>
                                <span>03h</span>
                                <span>09m</span>
                                <span>05s</span>
                            </p>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .hero {
                        background: #23475b;
                        color: white;
                        padding: 32px 15px;
                        display: grid;
                        grid-template-columns: minmax(auto, 1024px);
                        justify-content: center;
                    }
                    .hero-container {
                        display: grid;
                        grid-template-columns: 70px 1fr 320px;
                        grid-template-areas: "badge titulo form"
                                            ". description form"
                                            ". countdown form";
                        grid-gap: 10px;
                    }
                    .badge {
                        grid-area: badge;
                    }
                    .badge img {
                        max-width: 70px;
                    }
                    .titulo {
                        grid-area: titulo;
                        font-size: 36px;
                        font-weight: normal;
                        padding-left: 46px;
                        margin: 0;
                        display: flex;
                        align-items: center;
                    }
                    .form {
                        grid-area: form;
                        text-align: center;
                        background: rgba(255, 255, 255, .9);
                        padding: 1.5em;
                        border-radius: 10px;
                    }
                    .form input {
                        width: 100%;
                        padding: 10px;
                        font-size: 16px;
                        border: 1px solid #dbdbe2;
                        border-radius: 5px;
                        box-sizing: border-box;
                        margin-bottom: 10px
                    }
                    .form p {
                        font-size: 20px;
                        color: #3a3b3f;
                        margin-bottom: 1em;
                    }
                    .form button {
                        background: #98ca3f;
                        color: white;
                        padding: 10px 15px;
                        border-radius: 5px;
                        border: none;
                        font-size: 16px;
                        border-bottom: 5px solid #6d932b;
                        display: inline-block;
                    }
                    .countdown {
                        grid-area: countdown;
                    }
                    .countdown p {
                        font-size: 20px;
                        text-align: center;
                        font-weight: 300;
                    }
                    .countdown span {
                        font-size: 33px;
                    }
                    .countdown span:after {
                        content: ":";
                        display: inline-block;
                        margin: 0 5px;
                    }

                    .countdown span:last-child:after {
                        display: none;
                    }
                    p {
                        margin: 0;
                    }
                    .description {
                        grid-area: description;
                    }

                    @media screen and (max-width: 768px) {
                        .hero-container {
                            grid-template-columns: 70px 1fr;
                            grid-template-areas: "badge titulo"
                                                "description description"
                                                "form form"
                                                "countdown countdown";
                        }
                    }  
                `}</style>
                <style global jsx>{`
                    body {
                        font-family: 'Lato', sans-serif;
                        margin: 0;
                    }
                `}</style>
            </div>
            
        )
    }
}

export default Platzi
