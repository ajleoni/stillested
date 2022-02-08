import React from "react";
import './ContactPage.css';
import contactProfile from './contactProfile.jpg'

const contactInfo = {};
contactInfo.h2 = 'Kontakt information';
contactInfo.p1 = 'Du er altid velkommen til at ringe eller skrive, hvis du har nogle spørgsmål.';
contactInfo.p2 = 'Hvis jeg ikke tager telefonen, når du ringer, så er du velkommen til at sende en sms med information om, hvornår du ønsker at blive ringet op.';

contactInfo.l1 = 'Email: ';
contactInfo.l2 = 'Telefon: ';
contactInfo.l3 = 'LinkedIn: ';
contactInfo.c1 = 'sabrina.j.leoni@gmail.com';
contactInfo.c2 = '27 21 12 01';
contactInfo.c3 = <a href='https://www.linkedin.com/in/sabrinaleoni'>https://www.linkedin.com/in/sabrinaleoni</a>;



export const ContactPage = () => {
  return (
    <section className='article-3-columns flex'>
      <article className='1of3-columns'>
        <h2>{contactInfo.h2}</h2>
        <p>{contactInfo.p1}</p>
        <p>{contactInfo.p2}</p>
      </article>
      <aside className='1of3-columns'>
        <div>
          <img src={contactProfile} alt="Sabrina Justesen Leoni"></img>
        </div>
      </aside>
      <article className='1of3-columns'>
      <p className='contact-details'><strong>{contactInfo.l1}</strong>{contactInfo.c1}</p>
      <p className='contact-details'><strong>{contactInfo.l2}</strong>{contactInfo.c2}</p>
      <p className='contact-details'><strong>{contactInfo.l3}</strong>{contactInfo.c3}</p>
      </article>
    </section>
  );
};