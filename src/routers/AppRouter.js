import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from '../components/Header'
import { HomePage } from '../components/HomePage'
import { AboutPage } from '../components/AboutPage'
import { ContactPage } from '../components/ContactPage'
import { ServicePage } from '../components/ServicesPage'
import { Footer } from '../components/Footer'
import { OurSolutionPage } from '../components/OurSolutionPage'
import { RejoindreMedecin } from '../components/RejoindreMedecin'
import { RejoindrePharmacie } from '../components/RejoindrePharmacie'


const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/a-propos" component={AboutPage} />
          <Route path="/services" component={ServicePage} exact={true} />
          <Route path="/notre-solution" component={OurSolutionPage} exact={true} />
          <Route path="/nous-rejoindre-medecin" component={RejoindreMedecin} />
          <Route path="/nous-rejoindre-pharmacien" component={RejoindrePharmacie} />
          <Route path="/contact" component={ContactPage} />
          {/* 
          <Route path="/equipe" component={PortfolioItemPage} />
          <Route path="/vision-et-valeur" component={PortfolioItemPage} />
          <Route path="/nous-rejoindre-medecin" component={PortfolioItemPage} />
          <Route path="/nous-rejoindre-pharmaciens" component={PortfolioItemPage} />
          <Route path="/actualite" component={PortfolioItemPage} />
          <Route path="/carrière-emploi" component={PortfolioItemPage} />
          <Route path="/carrière-stage" component={PortfolioItemPage} />
          <Route path="/actualite" component={PortfolioItemPage} />
          <Route component={NotFoundPage} /> */}
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
  
  export default AppRouter;
  