import { Link, Route } from 'react-router-dom'
import { MainMenu, AboutMenu } from './menus'
//import './stylesheets/pages.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeComp from './components/Home'
import BdrComp from './components/Bdr'
import CostComp from './components/Cost'
import RuHeader from './components/RuHeader'
import RuFooter from './components/RuFooter'
import RuHomeComp from './components/RuHome'
import RuBdrComp from './components/RuBdr'

export const Home = () =>
    <div>
        <Header />
        <HomeComp />
        <Footer />
    </div>
export const Cost = () =>
    <div>
        <Header />
        <CostComp />
        <Footer />
    </div>
export const Bdr = () =>
    <div>
        <Header />
        <BdrComp />
        <Footer />
    </div>

export const RuHome = () =>
    <div>
        <RuHeader />
        <RuHomeComp />
        <RuFooter />
    </div>
export const RuBdr = () =>
    <div>
        <RuHeader />
        <RuBdrComp />
        <RuFooter />
    </div>
    
export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>Resource not found at '{location.pathname}'</h1>
    </div>
