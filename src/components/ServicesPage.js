import React from 'react'
import { services, products } from '../content/service-produit'

const { teleconsultation, livraison, marketing, teleassistance, teleexpertise, telesurveillance } = services;
const { title, qsante, sensante } = products;

export const ServicePage = () => {
    
    return (
        <main id="main">
            <section id="services" className="services">
                <div className="container">
                    <div className="section-title aos-init aos-animate" data-aos="fade-up">
                        <h2>Nos <strong> Services</strong></h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="icon-box" data-aos="fade-up">
                                <div className="icon"><i className="icofont-computer"></i></div>
                                <h4 className="title">
                                    <a href=""> { teleconsultation.title } </a>
                                </h4>
                                <p className="description">
                                    { teleconsultation.content }
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon"><i className="icofont-chart-bar-graph"></i></div>
                                <h4 className="title">
                                    <a href=""> { teleexpertise.title } </a>
                                </h4>
                                <p className="description">
                                    { teleexpertise.content }
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                                <div className="icon"><i className="icofont-tasks-alt"></i></div>
                                <h4 className="title">
                                    <a href=""> { livraison.title } </a>
                                </h4>
                                <p className="description">
                                    { livraison.content }
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon"><i className="icofont-image"></i></div>
                                <h4 className="title">
                                    <a href=""> { telesurveillance.title } </a>
                                </h4>
                                <p className="description">
                                    { telesurveillance.content }
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon"><i className="icofont-settings"></i></div>
                                <h4 className="title">
                                    <a href=""> { marketing.title } </a>
                                </h4>
                                <p className="description">
                                    { marketing.content }
                                </p>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon"><i className="icofont-earth"></i></div>
                                <h4 className="title">
                                    <a href=""> { teleassistance.title } </a>
                                </h4>
                                <p className="description">
                                    { teleassistance.content }
                                </p>
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
                                    <p style={{textAlign:"justify"}}>{ sensante.description }</p>
                                </div>
                                <div className="tab-pane" id="tab-2">
                                    {/* <figure>
                                        <img src="assets/img/features-2.png" alt="" className="img-fluid"/>
                                    </figure> */}
                                    <p style={{textAlign:"justify"}}>{ qsante.description }</p>
                                </div>
                                <div className="tab-pane" id="tab-3">
                                    <figure>
                                        <img src="assets/img/features-3.png" alt="" className="img-fluid"/>
                                    </figure>
                                </div>
                                <div className="tab-pane" id="tab-4">
                                    <figure>
                                        <img src="assets/img/features-4.png" alt="" className="img-fluid"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}