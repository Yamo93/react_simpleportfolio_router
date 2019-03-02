import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './MainPage.css';

import NavBar from '../../components/NavBar/NavBar';

import FrontInfo from '../../components/FrontInfo/FrontInfo';
import WhatIDo from '../../components/WhatIDo/WhatIDo';
import MyApproach from '../../components/MyApproach/MyApproach';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';

import Footer from '../../components/Footer/Footer';

class MainPage extends Component {

    render() {
        return (
            <section className="right-main">
            <NavBar />
            
            <div className="front-main">
                <Route path="/" exact component={FrontInfo} />
                <Route path="/what-i-do" component={WhatIDo} />
                <Route path="/my-approach" component={MyApproach} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />

            </div>
            
            <Footer />
        
            </section>
        );
    }
}

export default MainPage;