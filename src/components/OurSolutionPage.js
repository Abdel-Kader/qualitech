import React from 'react';
import { solution } from '../content/solutions';
import { Link } from 'react-router-dom'

const { medecins, pharmaciens, collectivites, entreprise, sanitaire, scolaire, penitencier  } = solution;
export const OurSolutionPage = () => {
    return(
        <main id="main">
            <section id="pricing" class="pricing">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 mt-4 mt-md-0">
                            <div class="box" data-aos="fade-right">
                                <h3> { medecins.title } </h3>
                                <p style={{textAlign:'justify'}}>
                                    { medecins.description }
                                </p>
                                <ul>
                                    <li>{ medecins.avantage1 }</li>
                                    <li>{ medecins.avantage2 }</li>
                                    <li>{ medecins.avantage3 }</li>
                                </ul>
                                <p> { medecins.proces_medecine } </p>
                                <ul>
                                    <li>{ medecins.etape1 }</li>
                                    <li>{ medecins.etape2 }</li>
                                    <li>{ medecins.etape3 }</li>
                                    <li>{ medecins.etape4 }</li>
                                </ul>
                                <div class="btn-wrap">
                                    <Link to="nous-rejoindre-medecin" className="btn-buy">Nous rejoindre</Link>
                                    {/* <a href="#" class="btn-buy"></a> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 mt-4 mt-md-0">
                            <div class="box" data-aos="fade-up">
                                <h3>{ pharmaciens.title }</h3>
                                <p style={{textAlign:'justify'}}>
                                    { pharmaciens.description }
                                </p>
                                <ul>
                                    <li>{ pharmaciens.avantage1 }</li>
                                    <li>{ pharmaciens.avantage2 }</li>
                                    <li>{ pharmaciens.avantage3 }</li>
                                    <li>{ pharmaciens.avantage4 }</li>
                                    <li>{ pharmaciens.avantage5 }</li>
                                    <li>{ pharmaciens.avantage6 }</li>
                                </ul>
                                <div class="btn-wrap">
                                <Link to="nous-rejoindre-pharmacien" className="btn-buy">Nous contacter</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 mt-4">
                            <div class="box" data-aos="fade-left">
                                <h3>{ collectivites.title }</h3>
                                <p style={{textAlign: 'justify'}}>
                                    {collectivites.description}
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 mt-4">
                            <div class="box" data-aos="fade-left">
                                <h3>{ entreprise.title }</h3>
                                <p style={{textAlign: 'justify'}}>
                                { entreprise.description }
                                </p>
                                <ul>
                                    <li> { entreprise.avantage1 } </li>
                                    <li> { entreprise.avantage2 } </li>
                                    <li> { entreprise.avantage3 } </li>
                                    <li> { entreprise.avantage4 } </li>
                                    <li> { entreprise.avantage5 } </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mt-4">
                            <div class="box" data-aos="fade-left">
                                <h3> { sanitaire.title} </h3>
                                <p style={{textAlign: 'justify'}}>
                                    { sanitaire.description }
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mt-4">
                            <div class="box" data-aos="fade-left">
                                <h3> { scolaire.title } </h3>
                                <p style={{textAlign: 'justify'}}>
                                    { scolaire.description }
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mt-4">
                            <div class="box" data-aos="fade-left">
                                <h3> { penitencier.title } </h3>
                                <p style={{textAlign: 'justify'}}>
                                    { penitencier.description }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}