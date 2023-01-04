import React from "react";
import './estilo.css';
import Rodape from "../../componentes/Rodape";
import Topo from "../../componentes/Topo";


const Sobre = () => (
    <div>
        <Topo />

        <div className="banner-sobre">
            <h1>A GELATERIA</h1>
        </div>


        <div className="texto-sobre">

            <h2>Sobre Nós</h2>
            <h3>Nós simplesmente amamos sorvete!</h3>

            <p>Somos uma empresa apaixonada pqlo que faz. Colocamos amor em
                cada sorvete produzido. Fazemos o melhor sorvete para os nossos
                clientes e gostamos de receber elogios. Estamos operando desde
                2008 com as melhores matérias-primas para a produção final
                do sorvete. Vendemos tanto para varejo como para atacado.
            </p>
            <p>Nossos clientes podem comprar os nossos sorvetes e degustar
                na nossa loja ou levar para sua residência e aproveitar
                junto com a família. Também vendemos para estabelecimentos
                e criamos eventos como festa de aniversário, formaturas
                e eventos empresariais. Para contratar os nossos serviços,
                basta entrar em contato conosco, iremos proporcionar o
                melhor atendimento e os melhores produtos para você fazer
                a sua festa mais saborosa, com o melhor sorvete da cidade.
            </p>
        </div>

        <div className="container-imagens">

            <img src="/assets/sobre-image.jpg" alt="imagem sobre" />
            <img src="/assets/sorveteria.jpg" alt="imagem sorveteria" />

        </div>

        <Rodape />
    </div>
);
export default Sobre;