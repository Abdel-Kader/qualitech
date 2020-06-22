import React from 'react';
import { apropos } from '../content/a-propos'

const { content1, content2, content3, historique, mission, valeur } = apropos;
export const AboutPage = () => {
    return (
        <div>
            <section id="about-us" className="about-us">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" data-aos="fade-right"></div>
                        <div className="col-xl-7 pl-0 pr-lg-1 d-flex align-items-stretch">
                            <div className="content d-flex flex-column">
                                <div className="row">
                                    <div className="col-md-12 icon-box" data-aos="fade-up">
                                        <p>{content1}</p>
                                    </div>
                                    <div className="col-md-12 icon-box" data-aos="fade-up" data-aos-delay="100">
                                        <p>{content2}</p>
                                    </div>
                                    <div className="col-md-12 icon-box" data-aos="fade-up" data-aos-delay="200">
                                        <p> {content3} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="team" className="team section-bg">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2><strong>{historique.title}</strong></h2>
                        <p> { historique.content } </p>
                    </div>
                </div>
            </section>
            <section id="team" className="team section-bg">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2><strong>{mission.title}</strong></h2>
                        <p> { mission.content } </p>
                    </div>
                </div>
            </section>
            <section id="team" className="team section-bg">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2><strong>{valeur.title}</strong></h2>
                        <p> { valeur.content } </p>
                        <br/><div style={{textAlign:'justify', justifyItems:'baseline', display:'grid', justifyContent: 'center'}}>
                            <ul className="about-ul">
                                <li>{ valeur.list1 }</li>
                                <li>{ valeur.list2 }</li>
                                <li>{ valeur.list3 }</li>
                                <li>{ valeur.list4 }</li>
                                <li>{ valeur.list5 }</li>
                                <li>{ valeur.list6 }</li>
                                <li>{ valeur.list7 }</li>
                            </ul>
                        
                        </div>
                        
                        
                    </div>
                </div>
            </section>
        </div>
        
    )
}
