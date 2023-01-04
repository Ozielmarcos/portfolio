import React from "react";
import './estilo.css';
import Rodape from "../../componentes/Rodape";

import Topo from "../../componentes/Topo";

const Home = () => (
    <main>
        <Topo />
        <section className="container-banner">
            <div className="banner">
                <div className="limitar-secao">
                    <h1>SORVETE ARTESANAL</h1>
                </div>
            </div>

        </section>

        <section className="container">

            <div>
                <img src="/assets/banner-sabores.jpg" alt="banner sabores"></img>
            </div>

            <div className="texto">
                <h2>NOSSOS SABORES</h2>
                <h3>Novos e deliciosos!</h3>

                <p className='paragrafo'>Sorvete bom é aquele feito com os melhores ingredientes!
                    Aqui na gelateria todos os nossos produtos são naturais, à
                    base de frutas e sem nenhum conservante! Também temos
                    opções sem lactose e sem açúcar. Venha conhecer e perceber
                    que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
                </p>
            </div>

        </section>

        <section className="container inverter">
            <div>
                <img src="/assets/eventos-image.jpg" alt="imagem evento" />
            </div>

            <div className="texto">
                <h2>NOSSOS EVENTOS</h2>
                <h3>Delícias com sorvete!</h3>

                <p className='paragrafo'>Mais do que uma sorveteria, uma extensão da sua casa!
                    Estamos aqui prontinho para te atender e oferecer os melhores eventos
                    com os melhores sorvetes da sua vida! Venha nos conhecer e passar
                    um tempo aqui com a gente.
                </p>
            </div>


        </section>

        <section className="container">

            <div>
                <img src="/assets/sobre-image.jpg" alt="imagem sobre" />
            </div>

            <div className="texto">
                <h2>SOBRE NÓS</h2>
                <h3>Alegria em cada casquinha!</h3>

                <p className='paragrafo'>Venha tomar o melhor sorvete aqui da região com a gente!
                    Nós estamos há anos no mercado produzindo o que tem de melhor
                    para nossos clientes e você não pode ficar de fora dessa.
                    Venha nos fazer uma visita e  aproveite o melhor atendimento
                    e o melhor sorvete da cidade.
                </p>
            </div>

        </section>

        <Rodape />

    </main>
)
export default Home;