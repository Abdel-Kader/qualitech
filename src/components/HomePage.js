import React from 'react';
import { Link } from 'react-router-dom'
import { apropos } from '../content/a-propos'
import { services, products } from '../content/service-produit'


const { content1, content2, content3, historique, mission } = apropos;

const { teleconsultation, livraison, marketing, teleassistance, teleexpertise, telesurveillance } = services;
const { title, qsante, sensante } = products;
export const HomePage = () => {
    return (
        <div>
            <section id="hero">
                <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

                    <div className="carousel-inner" role="listbox">
                        {/* Slide 1 */}
                        <div className="carousel-item active" style={{backgroundImage: "url(assets/img/slide/slide-1.jpg)"}}>
                            <div className="carousel-container">
                                <div className="carousel-content animated fadeInUp">
                                    <h2>Bienvenue à <span>Qualitech</span></h2>
                                    <p> { content1 } </p>
                                </div>
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div className="carousel-item" style={{backgroundImage: "url(assets/img/slide/slide-2.jpg)"}}>
                            <div className="carousel-container">
                                <div className="carousel-content animated fadeInUp">
                                    <h2>Qualitech Santé</h2>
                                    <p> { content2 } </p>
                                </div>
                            </div>
                        </div>

                        {/* Slide 3 */}
                        <div className="carousel-item" style={{backgroundImage: "url(assets/img/slide/slide-3.jpg)"}}>
                            <div className="carousel-container">
                                <div className="carousel-content animated fadeInUp">
                                    <h2>Qualitech Santé</h2>
                                    <p> { content3 } </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon bx bx-left-arrow" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>

                    <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon bx bx-right-arrow" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                    <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                </div>
            </section>
            <main id="main">
                <section id="cta" className="cta">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center text-lg-left">
                                <h3>Notre Historique</h3>
                                <p> {historique.content} </p>
                                <br/>
                                <p> {mission.content} </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="services" className="services">
                    <div className="container">
                        <div className="section-title aos-init aos-animate" data-aos="fade-up">
                            <h2>Nos <strong> Services</strong></h2>
                        </div>
                        <div className="row">
                            <div class="col-md-6" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon-box2">
                                    <i className="icofont-computer"></i>
                                    <h4><Link to="/services">{ teleconsultation.title }</Link></h4>
                                    <p className="description">{ teleconsultation.resume }</p>
                                    
                                </div>
                            </div>
                            
                            <div className="col-md-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon-box2">
                                    <i className="icofont-chart-bar-graph"></i>
                                    <h4><Link to="/services">{ teleexpertise.title }</Link></h4>
                                    <p className="description">{ teleexpertise.content }</p>
                                    <br/>
                                </div>
                            </div>
                            <div className="col-md-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon-box2">
                                    <i className="icofont-tasks-alt"></i>
                                    <h4><Link to="/services">{ livraison.title }</Link></h4>
                                    <p className="description">{ livraison.resume }</p>
                                </div>
                            </div>
                            <div className="col-md-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon-box2">
                                    <i className="icofont-image"></i>
                                    <h4><Link to="/services">{ telesurveillance.title }</Link></h4>
                                    <p className="description">{ telesurveillance.content }</p>
                                </div>
                            </div>
                            <div className="col-md-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon-box2">
                                    <i className="icofont-settings"></i>
                                    <h4><Link to="/services">{ marketing.title }</Link></h4>
                                    <p className="description">{ marketing.content }</p>
                                </div>
                            </div>
                            
                            <div className="col-md-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon-box2">
                                    <i className="icofont-settings"></i>
                                    <h4><Link to="/services">{ teleassistance.title }</Link></h4>
                                    <p className="description">{ teleassistance.content }</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
                <section id="features" className="features">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Nos <strong>Produits</strong> </h2>
                            <p>
                                { title }
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 mb-5 mb-lg-0" data-aos="fade-right">
                                <ul className="nav nav-tabs flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active show" data-toggle="tab" href="#tab-1">
                                            <h4> { sensante.title } </h4>
                                            <p> { sensante.resume } </p>
                                        </a>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <a className="nav-link" data-toggle="tab" href="#tab-2">
                                            <h4> { qsante.title } </h4>
                                            <p> { qsante.resume }</p>
                                        </a>
                                    </li>
                                    {/* <li className="nav-item mt-2">
                                        <a className="nav-link" data-toggle="tab" href="#tab-3">
                                            <h4>Pariatur explicabo vel</h4>
                                            <p>Velit veniam ipsa sit nihil blanditiis mollitia natus.</p>
                                        </a>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <a className="nav-link" data-toggle="tab" href="#tab-4">
                                            <h4>Nostrum qui quasi</h4>
                                            <p>Ratione hic sapiente nostrum doloremque illum nulla praesentium id</p>
                                        </a>
                                    </li> */}
                                </ul>
                            </div>
                            <div className="col-lg-7 ml-auto" data-aos="fade-left" data-aos-delay="100">
                                <div className="tab-content">
                                    <div className="tab-pane active show" id="tab-1">
                                        <figure>
                                            <img src="assets/img/features-3.png" alt="" className="img-fluid"/>
                                        </figure>
                                        {/* <p style={{textAlign:"justify"}}>{ sensante.descript }</p> */}
                                    </div>
                                    <div className="tab-pane" id="tab-2">
                                        <figure>
                                            <img src="assets/img/features-2.png" alt="" className="img-fluid"/>
                                        </figure>
                                        {/* <p style={{textAlign:"justify"}}>{ qsante.description }</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="services" className="services section-bg">
                    <div className="container">
                        <div className="section-title aos-init aos-animate" data-aos="fade-in">
                            <h2>Notre <strong> solution</strong></h2>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in">
                                <div class="icon-box icon-box-pink">
                                    <div class="icon"><i class="bx bxl-dribbble"></i></div>
                                    <h4 class="title"><a href="">Médecins</a></h4>
                                    <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="100">
                                <div class="icon-box icon-box-cyan">
                                    <div class="icon"><i class="bx bx-file"></i></div>
                                    <h4 class="title"><a href="">Pharmaciens</a></h4>
                                    <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
                                <div class="icon-box icon-box-green">
                                    <div class="icon"><i class="bx bx-tachometer"></i></div>
                                    <h4 class="title"><a href="">Collectivités</a></h4>
                                    <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</p>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
                                <div class="icon-box icon-box-blue">
                                    <div class="icon"><i class="bx bx-world"></i></div>
                                    <h4 class="title"><a href="">Entreprise</a></h4>
                                    <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
                                <div class="icon-box icon-box-blue">
                                    <div class="icon"><i class="bx bx-world"></i></div>
                                    <h4 class="title"><a href="">Établissement Sanitaire</a></h4>
                                    <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
                                <div class="icon-box icon-box-blue">
                                    <div class="icon"><i class="bx bx-world"></i></div>
                                    <h4 class="title"><a href="">Établissement Scolaire et Pénitencier</a></h4>
                                    <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
        
    )
}
