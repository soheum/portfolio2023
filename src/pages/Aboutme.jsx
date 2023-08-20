import styles, { layout } from '../style';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
var Aboutme_1 = require('../assets/aboutme_1.png');
var Aboutme_2 = require('../assets/aboutme_2.png');
var Aboutme_3 = require('../assets/aboutme_3.png');
var Aboutme_4 = require('../assets/aboutme_4.png');

const Aboutme = () => (
    <section className="w-full flex justify-start items-start overflow-hidden">
    <div className="flex-1 flex-col">
      <div className="semi-title">
        <div className={`${styles.boxWidth}`}>
            <Link to ="/" target="_blank" rel="noreferrer">
            <body1 className={`${styles.body1} + text-grey`}>👈🏻 back<br /><br /></body1>
            </Link>
        </div>
        <div className={`${styles.boxWidth} + one-line`}>
            <h1 className={`${styles.heading1}`}>So more about me...</h1> 
        </div>
        <div class="xl:max-w-[1280px] + mt-2 + w-6/12">
            <body1 className={`${styles.body1}`}>check out my </body1>
            <a href="https://drive.google.com/file/d/1SWDqLtnJXlOsOdGGHrGepOx_SYbeHLs-/view"target="_blank" rel="noopener noreferrer">
                <body1 className={`${styles.body1} + blue`} >resume </body1>
            </a>
            <body1 className={`${styles.body1}`} >or email me at </body1>
            <a href={"mailto:soheum@naver.com?body=Hello! Let's grab a coffee"}>
                <body1 className={`${styles.body1} + blue`} >sohheum@gmail.com </body1> 
            </a>
        </div>
        <div className={`${styles.boxWidth} + ${styles.flexCenter} + mt-24`}>
            <div className={`aboutme mr-2`}>
                <Link to ="/aboutme" target="_blank" rel="noreferrer">
                    <img class="rounded-xl mb-2" src={Aboutme_1} alt="aboutme" />
                </Link>
            </div>
            <div className={`aboutme mr-2`}>
                <Link to ="/aboutme" target="_blank" rel="noreferrer">
                    <img class="rounded-xl mb-2" src={Aboutme_2} alt="aboutme" />
                </Link>
            </div> 
            <div className={`aboutme mr-2`}>
                <Link to ="/aboutme" target="_blank" rel="noreferrer">
                    <img class="rounded-xl mb-2" src={Aboutme_3} alt="aboutme" />
                </Link>
            </div> 
            <div className={`aboutme mr-2`}>
                <Link to ="/aboutme" target="_blank" rel="noreferrer">
                    <img class="rounded-xl mb-2" src={Aboutme_4} alt="aboutme" />
                </Link>
            </div> 
        </div>
     </div>

     <div className="xl:max-w-[1280px] + mt-12 + w-7/12">
         <body1 className={`${styles.body1}`}>I'm an interaction designer at Mckinsey Design (Veryday) based in Stockholm, Sweden.</body1> <br /><br />
         <body1 className={`${styles.body1}`}>I design </body1>
         <body2 className={`${styles.body2}`}>creative digital solutions and create impact across industries</body2>
         <body1 className={`${styles.body1}`}> by collaborating with business consultants, engineers, researchers and cross-functional stakeholders. </body1> <br /><br />
         <body1 className={`${styles.body1}`}>I bring my </body1>
         <body2 className={`${styles.body2}`}>digital craft skills, iterative prototyping and analytical thinking</body2>
         <body1 className={`${styles.body2}`}> in creating human-centered solutions.</body1> <br /><br />
         <body1 className={`${styles.body1}`}>I enjoy speculating about</body1>
         <body2 className={`${styles.body2}`}> how AI can empower human skills</body2>
         <body1 className={`${styles.body1}`}> by envisioning the future of digital experiences with </body1>
         <body2 className={`${styles.body2}`}>pen & paper, prototyping tools or front-end code. </body2> <br /><br />
         <body1 className={`${styles.body1}`}>Outside of design, you can find me drawing, going to yoga classes, jogging or having a coffee in one of my favourite cafes in Stockholm.</body1> <br /><br />
     </div>
     
    </div>
    </section>
)

export default Aboutme