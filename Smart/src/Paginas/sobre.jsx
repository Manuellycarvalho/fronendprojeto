import React from 'react';
import { Link } from 'react-router-dom';
import estilos from './Home.module.css';

function Footer() {
    return (
        <footer className={estilos.footer}>
            <div className={estilos.footerContent}>
                <p className={estilos.footerText}>© {new Date().getFullYear()} Projeto Integrado Senai Roberto Mange</p>
                <div className={estilos.footerLinks}>
                    <Link to="/contato" className={estilos.footerLink}>Contato</Link>
                    <Link to="/politica-privacidade" className={estilos.footerLink}>Política de Privacidade</Link>
                </div>
            </div>
        </footer>
    );
}

export function Sobre() {
    return (
        <div className={estilos.container}>
            <div className={estilos.banner}></div>
            <div>
            <h2 className={estilos.title3}>Sobre a SmartyCity</h2>
            </div>

            <div className={estilos.bannersContainer}>
                <div className={`${estilos.banner2} ${estilos.espacoEntreBanners}`}></div>
                <div className={`${estilos.banner2} ${estilos.espacoEntreBanners}`}></div>
            </div>

            <div className={estilos.text}> 
                <h4 className={estilos.Title}>Sobre esse Projeto</h4>
                <h4 className={estilos.noBold}>
                    Este site foi desenvolvido como parte de um projeto integrado do Senai Roberto Mange, realizado pela estudante Manuelly Tristão de Carvalho. O objetivo do projeto é implementar uma solução inovadora para monitoramento ambiental, utilizando sensores distribuídos ao redor da escola. Este sistema coleta e exibe informações cruciais sobre diversos parâmetros ambientais, proporcionando uma visão detalhada e em tempo real das condições ao redor da instituição.
                </h4>
                <Link to="/inicial/sobre" className={estilos.navLink}>
                    <button className={estilos.button}>Saber mais</button>
                </Link>
            </div>

            <div className={estilos.bannersContainer} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div className={`${estilos.banner3} ${estilos.espacoEntreBanners}`}></div>
                <div className={`${estilos.banner3} ${estilos.espacoEntreBanners}`}></div>
            </div>

            <div className={estilos.text2}>
                {/* <h4 className={estilos.Title2}>Sobre esse Projeto</h4> */}
                <h4 className={`${estilos.noBold} ${estilos.textRight}`}>
                     Este site foi desenvolvido como parte de um projeto integrado do Senai Roberto Mange, realizado pela estudante Manuelly Tristão de Carvalho. O objetivo do projeto é implementar uma solução inovadora para monitoramento ambiental, utilizando sensores distribuídos ao redor da escola. Este sistema coleta e exibe informações cruciais sobre diversos parâmetros ambientais, proporcionando uma visão detalhada e em tempo real das condições ao redor da instituição.
                </h4>

                <Link to="/inicial/projeto" className={estilos.navLink}>
                    <button className={estilos.button2}>Saber mais</button>
                </Link>
            </div>

            <div className={estilos.bannersContainer}>
                <div className={`${estilos.banner2} ${estilos.espacoEntreBanners}`}></div>
                <div className={`${estilos.banner2} ${estilos.espacoEntreBanners}`}></div>
            </div>

            <div className={estilos.text}> 
                <h4 className={estilos.Title}>Sobre esse Projeto</h4>
                <h4 className={estilos.noBold}>
                    Este site foi desenvolvido como parte de um projeto integrado do Senai Roberto Mange, realizado pela estudante Manuelly Tristão de Carvalho. O objetivo do projeto é implementar uma solução inovadora para monitoramento ambiental, utilizando sensores distribuídos ao redor da escola. Este sistema coleta e exibe informações cruciais sobre diversos parâmetros ambientais, proporcionando uma visão detalhada e em tempo real das condições ao redor da instituição.
                </h4>
                <Link to="/inicial/sobre" className={estilos.navLink}>
                    <button className={estilos.button}>Saber mais</button>
                </Link>
            </div>

            <Footer />
        </div>
    );
}
