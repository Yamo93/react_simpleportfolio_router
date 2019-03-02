import React from 'react';
import './WhatIDo.css';

const WhatIDo = (props) => {
    return (
        <>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation</h2>
            <h3>I'm especially good at</h3>
            <ul>
                <li>product design & development</li>
                <li>UX research & design</li>
                <li>responsive web design</li>
                <li>WP development</li>
                <li>accessiblity & SEO</li>
                <li>infrastructure design & build</li>
            </ul>
            
            <h3>Talk to me about</h3>
            <ul>
                <li>accessibility</li>
                <li>the indie web</li>
                <li>open source</li>
                <li>progressive enhancement</li>
                <li>responsive design</li>
                <li>resilient web design</li>
                <li>semantic markup</li>
            </ul>
            <p class="last-p">If none of those words mean anything to you, no worries, I speak human, too.</p>
        </>
    );
};

export default WhatIDo;