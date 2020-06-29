import React from 'react'
import { NavLink } from 'react-router-dom'
export const Header = () => {
    return (
        <>
            {/* ======= Header =======  */}
            <header id="header" className="fixed-top">
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

                    <nav class="nav-menu d-none d-lg-block">
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

                            <li className="drop-down"><NavLink to="#" activeClassName="active">Nous rejoindre</NavLink>
                                <ul>
                                    <li><NavLink to="/nous-rejoindre-medecin" exact={true}> Médecins</NavLink></li>
                                    <li><NavLink to="/nous-rejoindre-pharmacien"> Pharmaciens</NavLink></li>
                                </ul>
                            </li>

                            <li><NavLink to="/contact" activeClassName="active" exact={true}>Contact</NavLink></li>
                        </ul>
                    </nav>

                </div>
            </header><br/><br/>
        </>
    )
}
