import React from 'react';
import ClimaReport from '../ClimaReport/ClimaReport';
import NavBar from '../NavBar/NavBar';
import Calendar from '../calendario/calendario';
import UbicacionUser from '../UbicacionUser/ubicacion';
import CalidadDelAire from '../calidaddelAire/calidaddelAire';
import HoraActual from '../HoraActual/horaActual';
import CompocisionDeAire from '../compocisionDelAire/compocisionDelAire';
import RecomendacionesClima from '../recomendacionClima/recomendacionClima';
import RecomendacionesAire from '../recomendacionesAire/recomendacionesAire';
import Footer from '../footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PgHome-styles.css';

const PgHome = () => {
    return (
        <div className="col-12 justify-content-center:">
            <section className="ParteSuperior">
                <section className="bienvenida container text-center py-5">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1>LifeBreathe</h1>
                            <p className="lead">
                                Una plataforma que te ayuda a monitorear la calidad del aire en tiempo real utilizando tu ubicación. 
                                Proporciona recomendaciones dependiendo de tu ubicación para cuidar tu salud y tomar decisiones sobre tu entorno.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img 
                                src="https://media2.giphy.com/media/l43kyjWpfkkrQpyfje/giphy.gif?cid=6c09b9520k3yo8zo6adjgdfoztah4dd1pkfhjzhhpl978ru4&ep=v1_stickers_search&rid=giphy.gif&ct=s" 
                                alt="gif-animado" 
                                className="img-fluid rounded"
                            />
                        </div>
                    </div>
                </section>
                <section className="text-center py-5" id="clima">
                    <h1>Pronóstico del día</h1>
                        <div className="container">
                            <div className="row justify-content-center">
                            {/* Sección Pronóstico ajustada para pantallas pequeñas y grandes */}
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                            <div className="product-card "><ClimaReport /></div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                            <div className="product-card"><HoraActual /></div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-15 col-lg-3 mb-4">
                            <div className="product-card  h-100"><UbicacionUser /></div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-15 col-lg-3 mb-8">
                            <div className="product-card"><CalidadDelAire /></div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className='recomendaciones container text-center py-5' id="recomendaciones">
                <h1>Recomendaciones para su Salud</h1>
                <div className='row g-4 mt-3'>
                    <div className='col-12 col-md-6'><RecomendacionesClima /></div>
                    <div className='col-12 col-md-6'><RecomendacionesAire /></div>
                </div>
            </section>
            <section className='compocision container text-center py-5' id="compocision">
                <h1>Composición del Aire</h1>
                <p>
                    Aquí podrás conocer los componentes del aire y su impacto en la salud. Además, al seleccionar un punto en el mapa, 
                    obtendrás información en tiempo real sobre la calidad del aire en esa ubicación.
                </p>
                <div className='mt-3'><CompocisionDeAire /></div>
            </section>
        </div>
    );
};

export default PgHome;


