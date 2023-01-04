import React from "react";
import './estilo.css';

export default function Rodape() {
    return (
        <footer>
            <div className="rodape limitar-secao">
                <div>
                    <img src="/assets/logo.png" alt="logo" />
                </div>
                <div className="box">
                    <h4>ENDEREÇO</h4>
                    <p>Av.Bernandino de Campos,98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>

                <div className="box">
                    <h4>CONTATO</h4>
                    <p>info@meusite.com</p>
                    <p>Tel (11) 3456-7890</p>
                </div>

                <div className="box">
                    <h4>HORÁRIOS</h4>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>

            <div className="autor">
                <p>Gelateria. Orgulhosamente desenvolvido por Oziel Marcos.</p>
            </div>

        </footer>
    )
}