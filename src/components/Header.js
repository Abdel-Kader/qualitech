import React from 'react'
import { NavLink } from 'react-router-dom'
export const Header = () => {
    return (
        <>
            <section id="topbar" className="d-none d-lg-block">
                <div className="container d-flex">
                    <div className="contact-info mr-auto">
                        <i className="icofont-envelope"></i><a href="mailto:contact@example.com">contact@example.com</a>
                        <i className="icofont-phone"></i> +1 5589 55488 55
                    </div>
                    <div className="social-links">
                        <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
                        <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
                        <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
                        <a href="#" className="skype"><i className="icofont-skype"></i></a>
                        <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
                    </div>
                </div>
            </section>

            {/* ======= Header =======  */}
            <header id="header">
                <div className="container d-flex">

                    <div className="logo mr-auto">
                        <h1 className="text-light">
                            <strong>
                                <NavLink to="/" activeClassName="is-active" exact={true}>Qualitech</NavLink>
                            </strong>
                        </h1>
                        {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                        {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
                    </div>

                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li><NavLink to="/" activeClassName="active" exact={true}>Acceuil</NavLink></li>
                            <li><NavLink to="/a-propos" activeClassName="active" exact={true}>A propos</NavLink></li>
                            {/* <li className="drop-down"><a href="#">A propos</a>
                                <ul>
                                    <li><a href="#">Qui sommes nous</a></li>
                                    <li><a href="#">Notre équipe</a></li>
                                    <li><a href="#">Visions & Valeurs</a></li>
                                </ul>
                            </li> */}
                            <li><NavLink to="/services" activeClassName="active" exact={true}>Produits et services</NavLink></li>
                            
                            <li><NavLink to="/notre-solution" activeClassName="active" exact={true}>Notre solution</NavLink></li>
                            {/* <li className="drop-down"><a href="">Nos produits</a>
                                <ul>
                                    <li><a href="#">Service 1</a></li>
                                    <li><a href="#">Service 2</a></li>
                                    <li><a href="#">Service 3</a></li>
                                </ul>
                            </li>
                            <li className="drop-down"><a href="">Nos services</a>
                                <ul>
                                    <li><a href="#">Service 1</a></li>
                                    <li><a href="#">Service 2</a></li>
                                    <li><a href="#">Service 3</a></li>
                                </ul>
                            </li> */}
                            {/* <li className="drop-down"><a href="#">Notre solution</a>
                                <ul>
                                    <li><a href="#"> Médecins </a></li>
                                    <li><a href="#"> Pharmaciens </a></li>
                                    <li><a href="#"> Collectivités </a></li>
                                    <li><a href="#"> Établissement Scolaire </a></li>
                                    <li><a href="#"> Établissement Sanitaire </a></li>
                                </ul>
                            </li> */}

                            <li className="drop-down"><a href="#">Nous rejoindre</a>
                                <ul>
                                    <li><a href="#">Médecins</a></li>
                                    <li><a href="#">Pharmaciens</a></li>
                                </ul>
                            </li>
                            {/* <li><a href="testimonials.html">Actualités</a></li> */}
                            
                            <li><NavLink to="/contact" activeClassName="active" exact={true}>Contact</NavLink></li>
                        </ul>
                    </nav>

                </div>
            </header>
        </>
    )
}