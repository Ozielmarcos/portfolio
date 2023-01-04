import React from "react";
import './estilo.css';
import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";

const Sabores = () => (
    <main>
        <Topo />
        <section className="capa">

            <div className="titulo">
                <h1>NOSSOS SABORES</h1>
            </div>
        </section>

        <section className="sabores-container">

            <h2>SABORES DE SORVETE</h2>

            <div className="container-limitar-secao">

                <div className="box-card">

                    <div className="card">
                        <img src="/assets/sabor-oreo.png" alt="sabor oreo" />

                        <h3>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo.
                            Uma explosão de sabor.
                        </p>
                    </div>

                    <div className="card">
                        <img src="/assets/sabor-pistache.png" alt="sabor pistache" />

                        <h3>Sorvete Pistache</h3>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>

                    </div>

                    <div className="card">
                        <img src="/assets/sabor-cookies-avela.png" alt="sabor cookies e avelã" />

                        <h3>Sorvete Cookies & Avelã</h3>
                        <p>O nosso melhor sorvete.
                            Você vai adorar o sabor.
                        </p>
                    </div>

                    <div className="card">
                        <img src="/assets/sorbet-kiwi.png" alt="sabor kiwi" />

                        <h3>Sorvete de Kiwi</h3>
                        <p>Delicioso e refrescante sorvete sabor kiwi.
                            Rico em vitamina C.
                        </p>
                    </div>

                    <div className="card">
                        <img src="/assets/sorbet-morango.png" alt="sabor morango" />

                        <h3>Sorvete de Morango</h3>
                        <p>Sorvete de morango gourmet.
                            Tradicional e saboroso.
                        </p>
                    </div>

                    <div className="card">
                        <img src="/assets/sorbet-limao.png" alt="sabor limão" />

                        <h3>Sorvete de Limão Siciliano</h3>
                        <p>O incrível sorvete gourmet de limão siciliano
                            vai te encantar.
                        </p>
                    </div>

                </div>

            </div>

        </section>
        <Rodape />
    </main>
);
export default Sabores;