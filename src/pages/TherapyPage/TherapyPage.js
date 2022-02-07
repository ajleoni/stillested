import React from "react";
import './TherapyPage.css';
import officePicture from './01-Therapy.jpg';
import stribe01 from './stribe01.jpg';
import stribe02 from './stribe02.jpg';
import stribe03 from './stribe03.jpg';
import stribe04 from './stribe04.jpg';

import stribe05 from './wt01.jpg';
import stribe06 from './wt02.jpg';
import stribe07 from './wt03.jpg';
import stribe08 from './wt04.jpg';

const style1 = {backgroundImage:`url(${stribe01})`};
const style2 = {backgroundImage:`url(${stribe02})`};
const style3 = {backgroundImage:`url(${stribe03})`};
const style4 = {backgroundImage:`url(${stribe04})`};

const style5 = {backgroundImage:`url(${stribe05})`};
const style6 = {backgroundImage:`url(${stribe06})`};
const style7 = {backgroundImage:`url(${stribe07})`};
const style8 = {backgroundImage:`url(${stribe08})`};


const therapyText = {};
therapyText.h2 = 'Terapi med unge og voksne';
therapyText.p1 = 'Jeg har som klinisk psykolog specialiseret mig i arbejdet med unge og voksne, der oplever udfordringer i daglidagen, der påvirker deres trivsel og mentale sundhed. ';
therapyText.p2 = 'Typiske problemstillinger som jeg arbejder med omhandler:';
therapyText.b1 = 'Stress og psykosomatiske symptomer';
therapyText.b2 = 'Forskellige former for utryghed eller angst';
therapyText.b3 = 'Uro, opmærksomhedsvanskeligheder, ADHD';
therapyText.b4 = 'Tristhed, manglende energi, isolation';
therapyText.b5 = 'Eksistentielle og relationelle tematikker i ungdomsårene';

const midText = {};
midText.p1 ='Er du ung og overvejer du terapi, så læs mere her. (under opbygning';
midText.p2 =<p>Er du forælder og ønsker forældrerådgivningsforløb baseret på bevidst nærvær i forældreskabet - <a href='http://www.stillested.dk/mindfulness-til-foraeldre'>så læs mere her</a></p>;
midText.p3 ='Min psykologpraksis ligger i hjertet af Vanløse - 500 meter fra Vanløse metro- og togstation. Når vejret tillader det, afholdes sessioner enten udenfor i haven eller i drivhuset. Ved dårligt vejr holder vi til i mit hyggelige kliniklokale.';
midText.h3 ='Ydelser og priser:';
midText.b1 ='En konsultation (50 min.) - 900 Kr.';
midText.b2 ='Studenterpris (50 min.) - 600 Kr.';
midText.b3 ='Et forløb (9 sessioner) - 5.000 Kr.';

const wtText = {};
wtText.h3 ='Walk and talk sessioner';
wtText.p1 ='I perioder kan det være rart at være i bevægelse under en terapisession. Derfor tilbyder jeg sessioner, hvor vi går rundt om Damhusengen, mens vi taler. Det tager ca. 50 minutter at gå hele vejen rundt om engen. Jeg tilbyder walk and talks i al slags vejr og alle fire årstider. Vi tilpasser tempo efter dine ønsker og behov, og kan gøre stop undervejs for forskellige øvelser. Ved Damhusengen kan dit blik få lov at dvæle og se langt, hvilket i sig selv virker beroligende for nervesystemet, samtidig kan bevægelsen hjælpe med at løsne op og frigøre energi i dit system.';
wtText.p2 ='Se billeder fra Damhusengen nedenfor:';



export const TherapyPage = () => {
  return (
    <>
    <section className='article-left-text-50 flex'>
      <article>
        <h2>{therapyText.h2}</h2>
        <p>{therapyText.p1}</p>
        <p>{therapyText.p2}</p>
        <ul>
          <li>{therapyText.b1}</li>
          <li>{therapyText.b2}</li>
          <li>{therapyText.b3}</li>
          <li>{therapyText.b4}</li>
          <li>{therapyText.b5}</li>
        </ul>
      </article>
      <aside>
        <div>
          <img src={officePicture}></img>
        </div>
      </aside>
    </section>
    <section className='flex'>
      <article>
        <br /><br />
        <p>{midText.p1}</p>
        {midText.p2}
      </article>
      <aside className='green-card'>
        <h3>{midText.h3}</h3>
        <ul>
          <li>{midText.b1}</li>
          <li>{midText.b2}</li>
          <li>{midText.b3}</li>
        </ul>
      </aside>
    </section>
    <p>{midText.p3}</p>
    <section className='carousel flex'>
      <div className='carousel-img' style={style1}></div>
      <div className='carousel-img' style={style2}></div>
      <div className='carousel-img' style={style3}></div>
      <div className='carousel-img' style={style4}></div>
     </section>
     <section>
       <h3>{wtText.h3}</h3>
       <p>{wtText.p1}</p>
       <p>{wtText.p2}</p>
     </section>
     <section className='carousel flex'>
      <div className='carousel-img' style={style5}></div>
      <div className='carousel-img' style={style6}></div>
      <div className='carousel-img' style={style7}></div>
      <div className='carousel-img' style={style8}></div>
     </section>
     
    </>
    );
};