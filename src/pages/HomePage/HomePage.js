import React from "react";
import './HomePage.css';
import {InPageNav} from '../../cmp/InPageNav/InPageNav.js';
import HomePagePicture from './frontPage.jpg';

const homePageText = {};
homePageText.p1 = 'Velkommen hos klinisk psykolog Sabrina Leoni. Min praksis kalder jeg for Stille Sted, fordi jeg i samarbejde med mine klienter hjælper dem til at stoppe op og finde hjem til sig selv, så det bliver tydeligere for den enkelte at se, hvad der er vigtigt og meningsfuld, og hvilke pejlemærker der derfor bliver vigtige at navigere efter i dagligdagen og i livet mere bredt.'
homePageText.p2 = 'Jeg har gennem mange år arbejdet med at integrere meditation og mindfulnessøvelser i mit psykologiske virke og har set, hvordan det kan hjælpe mennesker, der kæmper med usikkerhed, forvirring, nedtrykthed, bekymringer og angst- eller stresssymptomer - læs gerne mere under mine måder at arbejde på.'
homePageText.p3 = 'Jeg tager pt. ikke privatklienter, da jeg er på barsel. Jeg regner med at åbne for privatklienter igen efterår 2022.'


export const HomePage = () => {
  return (
    <main>
        <InPageNav />
        <article>
            <section >
                <p>{homePageText.p1}</p>
                <p>{homePageText.p2}</p>
                <p>{homePageText.p3}</p>
            </section>
            <section><img src={HomePagePicture} alt="a field of flowers"/></section>
        </article>

    </main>
    );
};