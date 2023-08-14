import styles, { layout } from '../style';
import React from 'react';
import '../App.css';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
var FidoLanding = require('../assets/Fido_landing.png');
var MckLanding = require('../assets/Mck_landing.png');
var CureateLanding = require('../assets/Cureate_landing.png');
var UxLanding = require('../assets/Ux_landing.png');
var JoulLanding = require('../assets/Joul_landing.png');
var Insta = require('../assets/logo-instagram.png');
var Email = require('../assets/at-sign@3x.png');
var LinkedIn = require('../assets/logo-linkedin.png')

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
            <body1 className={`${styles.body1}`} id="exp-text1">interaction designer at Mckinsey Design, </body1> 
            <body1 className={`${styles.body1}`} id="exp-text2">converging AI and humans through digital and tangible experiences</body1>
        </div>

        <div className={`${styles.boxWidth} + mt-24`}>
            <h2 className={`${styles.heading2}`}>Selected works</h2> 
        </div>
        <div className={`${styles.boxWidth} + ${styles.flexCenter}`}>
            <div className={`work-left mr-2`}>
                <a href="https://awards.ixda.org/projects/fido-enhancing-trust-between-driver-and-ai-system-in-semi-autonomous-vehicles"target="_blank" rel="noopener noreferrer">
                {/* <Link to ="/fido" target="_blank" rel="noreferrer"> */}
                    <img class="rounded-xl mb-2" src={FidoLanding} alt="Fido" />
                </a>
                {/* </Link> */}
                <paragraph className={`${styles.paragraph}`}>Enhancing autonomy and trust in autonomous vehicles</paragraph> <br />
                <paragraph className={`${styles.link}`}>Master's thesis</paragraph>

            </div>
            <div className={`work-right ml-2`}>
                {/* <Link to ="/fido" target="_blank" rel="noreferrer"> */}
                    <img class="rounded-xl mb-2" src={MckLanding} alt="Fido" />
                {/* </Link> */}
                <paragraph className={`${styles.paragraph}`}>Incorporating human-centered thinking in AI</paragraph> <br />
                <paragraph className={`${styles.link}`}>Protected work at Mckinsey</paragraph>
            </div> 
        </div>

        <div className={`${styles.boxWidth} + mt-12`}>
            <h2 className={`${styles.heading2}`}>Recent works</h2> 
        </div>
        <div className={`${styles.boxWidth} + ${styles.flexCenter}`}>
            <div className={`work-left mr-2`}>
                <a href="https://soheum.github.io/kureate/" target="_blank" rel="noopener noreferrer">
                    <img class="rounded-xl mb-2" src={CureateLanding} alt="Fido" />
                </a>
                <paragraph className={`${styles.paragraph}`}>Curate + Create, personal visual lens</paragraph> <br />
                <paragraph className={`${styles.link}`}>Personal project</paragraph>

            </div>
            <div className={`work-right ml-2`}>
                {/* <Link to ="/fido" target="_blank" rel="noreferrer"> */}
                    <img class="rounded-xl mb-2" src={UxLanding} alt="Fido" />
                {/* </Link> */}
                <paragraph className={`${styles.paragraph}`}>UX/UI projects</paragraph> <br />
                <paragraph className={`${styles.link}`}>Freelance projects</paragraph>
            </div> 
            <div className={`work-right ml-2`}>
                <a href="https://designawards.core77.com/Interaction/95544/JOUL-exploring-sustainability-through-play" target="_blank" rel="noopener noreferrer">
                    <img class="rounded-xl mb-2" src={JoulLanding} alt="Fido" />
                </a>
                <paragraph className={`${styles.paragraph}`}>Exploring sustainability through play</paragraph> <br />
                <paragraph className={`${styles.link}`}>Project during master’s</paragraph>
            </div> 
        </div>

        <div className={`${styles.boxWidth} + mt-12`}>
            <h2 className={`${styles.heading2}`}>About me</h2> 
        </div>
    
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[0.7px] border-t-black ">
        <p className="font-pretendard font-light tracking-tight text-[1rem] text-black">
            2022 Soheum Hwang. All Rights Reserved. 
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
            <a href={"https://www.instagram.com/sohmnm/"}>
                <img class="w-[1.25rem] h-[1.25rem] mr-2 object-contain cursor-pointer" src={Insta} />
            </a>
            <a href={"https://www.linkedin.com/in/so-heum-hwang/"}>
            <img class="w-[1.25rem] h-[1.25rem]  mr-2 object-contain cursor-pointer" src={LinkedIn} />
            </a>
            <a href={"mailto:soheum@naver.com?body=Hello! Let's grab a coffee"}>
            <img class="w-[1.25rem] h-[1.25rem] object-contain cursor-pointer" src={Email} />
            </a>
            
            
        </div>
      </div>
    </div>
  </section>

)

export default Home