import styles, { layout } from '../style';
import React from 'react';
import '../App.css';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
var FidoLanding = require('../assets/Fido_landing.png');
var FidoLanding2 = require('../assets/Fido_landing2.png');
var KanLanding = require('../assets/Kan_landing.png');
var KanLanding2 = require('../assets/Kan_landing2.png');
var CureateLanding = require('../assets/Cureate_landing.png');
var AiLanding = require('../assets/Ai_landing.png');
var JoulLanding = require('../assets/Joul_landing.png');
var Insta = require('../assets/logo-instagram.png');
var Email = require('../assets/at-sign@3x.png');
var LinkedIn = require('../assets/logo-linkedin.png');
var Youtube = require('../assets/youtube_icon.png');
var Aboutme_1 = require('../assets/aboutme_1.png');
var Aboutme_2 = require('../assets/aboutme_2.png');
var Aboutme_3 = require('../assets/aboutme_3.png');
var Aboutme_4 = require('../assets/aboutme_4.png');

const Home = () => (
    <section className="w-full flex justify-start items-start overflow-hidden">
    <div className="flex-1 flex-col">
      <div className="semi-title">
        <div className={`${styles.boxWidth}`}>
            <body1 className={`${styles.body1} + text-grey`}>👋🏻 Hello, Hej, 안녕!<br /><br /></body1>
            {/* <h1 className={`${styles.heading1}`}>My name is Soheum</h1> <p class="grey-italics">- so? hmmm...</p> */}
        </div>
        <div className={`${styles.boxWidth} + one-line`}>
            <h1 className={`${styles.heading1}`}>My name is Soheum</h1> 
            <p class="grey-italics"> - so? hmmm...</p>
        </div>
        <div className={`${styles.boxWidth} + mt-2`}>
            <body1 className={`${styles.body1}`}>Product designer at </body1> 
            <a href="https://transformingdatacollection.co.uk/" target="_blank" rel="noopener noreferrer">
                <body1 className={`${styles.body1} + text-light-grey`} id="exp-text1">Bank of England, transforming data collection </body1> 
            </a>
            <body1 className={`${styles.body1}`} id="exp-text2">converging </body1>
            <body1 className={`${styles.body1} + blue`} >AI and humans</body1>
            <body1 className={`${styles.body1}`} id="exp-text2"> through </body1>
            <body1 className={`${styles.body1} + blue`} >strategic thinking and visual explorations</body1>
        </div>

        <div className={`${styles.boxWidth} + mt-6`}>
        <Link to ="/aboutme" rel="noreferrer">
            <body1 className={`${styles.body1} + text-light-grey`}>💬  more about me</body1>
        </Link>
        </div>

        <div className={`${styles.boxWidth} + mt-24`}>
            <h2 className={`${styles.heading2}`}>Selected works</h2> 
        </div>
        <div className={`${styles.boxWidth} + ${styles.flexCenter}`}>
            <div className={`work-left mr-2`}>
                <Link to ="/kan" rel="noreferrer">
                    <img class="rounded-xl mb-2" src={KanLanding} alt="Kan" onMouseOver={e => (e.currentTarget.src = KanLanding2)} onMouseOut={e => (e.currentTarget.src = KanLanding )}/>
                </Link>
                <paragraph className={`${styles.paragraph}`}>Kan - digital financial health service for employees</paragraph> <br />
                <paragraph className={`${styles.link}`}>Business building project at McKinsey</paragraph>

            </div>
            <div className={`work-right ml-2`}>
                <Link to ="/fido" rel="noreferrer">
                    <img class="rounded-xl mb-2" src={FidoLanding} alt="Fido" onMouseOver={e => (e.currentTarget.src = FidoLanding2)} onMouseOut={e => (e.currentTarget.src = FidoLanding )} />
                </Link>
                <paragraph className={`${styles.paragraph}`}>Enhancing autonomy and trust in autonomous vehicles</paragraph> <br />
                <paragraph className={`${styles.link}`}>IxDA 2023 Winner in Disuprting</paragraph>
            </div> 
        </div>

        <div className={`${styles.boxWidth} + mt-12`}>
            <h2 className={`${styles.heading2}`}>Recent works</h2> 
        </div>
        <div className={`${styles.boxWidth} + ${styles.flexCenter}`}>
             <div className={`work-right mr-4`}>
                <img class="rounded-xl mb-2" src={AiLanding} alt="Fido" />
                <paragraph className={`${styles.paragraph}`}>Human-centered thinking in AI</paragraph> <br />
                <paragraph className={`${styles.link}`}>Protected work at McKinsey - contact for more info</paragraph>
            </div> 
            <div className={`work-left mr-2`}>
                <a href="https://soheum.github.io/kureate/" rel="noopener noreferrer">
                    <img class="rounded-xl mb-2" src={CureateLanding} alt="Fido" />
                </a>
                <paragraph className={`${styles.paragraph}`}>Curate + Create, personal visual lens</paragraph> <br />
                <paragraph className={`${styles.link}`}>Personal project</paragraph>
            </div>

            <div className={`work-right ml-2`}>
                <a href="https://designawards.core77.com/Interaction/95544/JOUL-exploring-sustainability-through-play" target="_blank" rel="noopener noreferrer">
                    <img class="rounded-xl mb-2" src={JoulLanding} alt="Fido" />
                </a>
                <paragraph className={`${styles.paragraph}`}>Exploring sustainability through play</paragraph> <br />
                <paragraph className={`${styles.link}`}>Core77 Student Runner Up 2020</paragraph>
            </div> 
        </div>

        {/* <div className={`${styles.boxWidth} + mt-12`}>
            <h2 className={`${styles.heading2}`}>About me</h2> 
        </div>
        <div className={`${styles.boxWidth} + ${styles.flexCenter}`}>
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
        </div> */}

    
      </div>

      <div className="w-full flex justify-between items-center mt-24 md:flex-row flex-col pt-6 border-t-[0.7px] border-t-black ">
        <p className="font-pretendard font-light tracking-tight text-[1rem] text-black">
            All Rights Reserved by Soheum Hwang, built by me!
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
            <a href={"https://www.instagram.com/sohmnm/"}>
                <img class="w-[1.25rem] h-[1.25rem] mr-2 object-contain cursor-pointer" src={Insta} />
            </a>
            <a href={"https://www.linkedin.com/in/so-heum-hwang/"}>
            <img class="w-[1.25rem] h-[1.25rem]  mr-2 object-contain cursor-pointer" src={LinkedIn} />
            </a>
            <a href={"mailto:sohheum@gmail.com?body=Hello! Let's grab a coffee"}>
            <img class="w-[1.25rem] h-[1.25rem] mr-2 object-contain cursor-pointer" src={Email} />
            </a>
            <a href={"https://www.youtube.com/@sohmnm"}>
            <img class="w-[1.25rem] h-[1.25rem] object-contain cursor-pointer" src={Youtube} />
            </a>
            
            
        </div>
      </div>
    </div>
  </section>

)

export default Home