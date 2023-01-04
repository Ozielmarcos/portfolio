import React from "react";
import './estilo.css';
import { Link } from 'react-router-dom';



export default function Topo() {
    return (
        <header>
            <div className="topo limitar-secao">

                <img src="/assets/logo.png" alt="logo" />

                <div className="links-topo">
                    <Link className="link" to='/'>Home</Link>

                    <Link className="link" to='/sabores'>Sabores</Link>

                    <Link className="link" to='/sobre'>Sobre</Link>
                </div>

            </div>
        </header>
    )
}