import styles, { layout } from '../style';
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import '../App.css';
import '../index.css';
import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import CustomCursor from "./CustomCursor";
import Arrow from './Arrow';
import { motion, useInView, useMotionValue, useMotionTemplate, useTransform, animate } from "framer-motion";
import { downWithFade, riseWithFade, riseWithMoreFade, riseWithMoreFade2, riseWithMoreFade3, SFade, OFade, HFade, EFade, UFade, MFade, AFade, BFade, CFade, DFade, FFade, GFade  } from './animations';
import BoEVideo from '../assets/BoE_video.mp4';
import BoEVideo2 from '../assets/BoE-video2.mp4';
import McKVideo from '../assets/McK-video.mp4';
import KanVideo from '../assets/kan-recording.mp4';
var KanLandingNew1 = require('../assets/Kan_landing_new_1.png');
var KanLandingNew2 = require('../assets/Kan_landing_new_2.png');
var BoELanding1 = require('../assets/BoE_landing_1.png');
var BoELanding2 = require('../assets/BoE_landing_2.png');
var McKLanding1 = require('../assets/McK_landing_1.png');
var McKLanding2 = require('../assets/McK_landing_2.png');
var FidoLandingNew = require('../assets/Fido_landing_new.png');
var BoE = require('../assets/boe_logo.png');
var Veryday = require('../assets/veryday_logo.png');
var Crayon = require('../assets/crayon.png');
var Volvo = require('../assets/volvo-logo.png');
var Reg = require('../assets/regulatory.png');
var Risk = require('../assets/risk.png');
var People = require('../assets/people.png');
var Advocacy = require('../assets/advocacy.png');
var Pharma = require('../assets/pharma.png');
var Visual = require('../assets/visual.png');
var UX = require('../assets/ux.png');
var App = require('../assets/app.png');
var Car = require('../assets/car.png');
var Complex = require('../assets/Complex.png');
var Thinking = require('../assets/Thinking.png');
var User = require('../assets/User.png');
var Brain = require('../assets/brain.png');
var Philips = require('../assets/philips.png');
var Amore = require('../assets/amorepacific.png');
var Bank = require('../assets/bank.png');
var Insta = require('../assets/logo-instagram.png');
var Email = require('../assets/at-sign@3x.png');
var LinkedIn = require('../assets/logo-linkedin.png');
var Youtube = require('../assets/youtube_icon.png');

const COLORS = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C'];

const Home = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    const [isHovered6, setIsHovered6] = useState(false);
    const [isHovered7, setIsHovered7] = useState(false);
    const [isHovered8, setIsHovered8] = useState(false);
    const [isHovered9, setIsHovered9] = useState(false);
    const [isHovered10, setIsHovered10] = useState(false);
    const [isHovered11, setIsHovered11] = useState(false);
    const [isHovered12, setIsHovered12] = useState(false);
    const [isHovered13, setIsHovered13] = useState(false);
    const [isHovered14, setIsHovered14] = useState(false);
    const [isHovered15, setIsHovered15] = useState(false);
    const [isHovered16, setIsHovered16] = useState(false);
    const [isHovered17, setIsHovered17] = useState(false);
    const [isHovered18, setIsHovered18] = useState(false);
    const [isHovered19, setIsHovered19] = useState(false);
    const [isHovered20, setIsHovered20] = useState(false);
    const [isHovered21, setIsHovered21] = useState(false);
    const [isHovered22, setIsHovered22] = useState(false);
    const [isHovered23, setIsHovered23] = useState(false);

    return(
    <motion.section className="" initial="initial" animate="animate"  > 
        {/* <div className="min-h-[70vh] transition-all ease-in-out delay-150 duration-1000" style={{ backgroundImage: isHoveredBottom ? "radial-gradient(60% 20% at 50% 85%, #ECFDDB, transparent" : "radial-gradient(60% 20% at 50% 85%, white, transparent"}}> */}
        <div className="flex-col mt-36">
            <div className="one-line">
                <AnimatedText className={`${styles.heading1}`} text="Soheum Hwang" />
                <motion.span class="grey-italics" variants={SFade}> (</motion.span>
                <motion.span class="grey-italics" variants={OFade}>s</motion.span>
                <motion.span class="grey-italics" variants={HFade}>o</motion.span>
                <motion.span class="grey-italics mr-2" variants={EFade}>? </motion.span>
                <motion.span class="grey-italics" variants={UFade}> h</motion.span>
                <motion.span class="grey-italics" variants={MFade}>m</motion.span>
                <motion.span class="grey-italics" variants={AFade}>m</motion.span>
                <motion.span class="grey-italics" variants={BFade}>m</motion.span>
                <motion.span class="grey-italics" variants={CFade}>.</motion.span>
                <motion.span class="grey-italics" variants={DFade}>.</motion.span>
                <motion.span class="grey-italics" variants={FFade}>.</motion.span>
                <motion.span class="grey-italics" variants={GFade}>)</motion.span> 
            </div>
            <motion.div className="mt-2" variants={riseWithMoreFade}>
                <motion.paragraph className={`${styles.paragraph3}`}>Hey 🇬🇧, Hej 🇸🇪, 안녕하세요 🇰🇷</motion.paragraph>
            </motion.div>
        </div>
        <motion.div className="mt-12 flex" variants={riseWithMoreFade2}>
            <div className="justify-start flex-col basis-2/12">
                <a href="https://drive.google.com/file/d/1m7AMO-KRl-YbCw8SUdZ_WBI1eJKsY6jk/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <HoveredText className={`font-pretendard font-light tracking-tight text-[1.15rem] leading-normal mr-6 mb-2`} text="Link to CV" />
                </a>
                <a href={"mailto:sohheum@gmail.com?body=Hello! Let's grab a coffee"}>
                <HoveredText2 className={`font-pretendard font-light tracking-tight text-[1.15rem] leading-normal mr-6`} text="Coffee chat?" />
                </a>
            </div>
            <div className="basis-3/12"></div>
            <div className="justify-start flex-col basis-6/12">
            <body3 className={`${styles.body3}`}>I discover and design digital experiences that</body3>
            <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered19(true) }
                onMouseLeave={() => setIsHovered19(false)}
                >
                <body2 className={`${styles.body2} ml-1`}> unravel complexity</body2>
                <motion.img src={Complex} alt="veryday" className="boe mr-1" animate={{ width: isHovered19 ? '1.1rem' : '0rem' }} /></div>
                <body3 className={`${styles.body3}`}> with a focus on </body3>
                <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered20(true) }
                onMouseLeave={() => setIsHovered20(false)}
                >
                    <motion.img src={User} alt="veryday" className="boe mr-1" animate={{ width: isHovered20 ? '1.1rem' : '0rem' }} />
                    <body2 className={`${styles.body2} `}>user needs.</body2></div>
                <body3 className={`${styles.body3}`}> I converge </body3>
                <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered21(true) }
                onMouseLeave={() => setIsHovered21(false)}
                >
                    <motion.img src={App} alt="veryday" className="boe mr-1" animate={{ width: isHovered21 ? '1.1rem' : '0rem' }} />
                    <body2 className={`${styles.body2} `}>technology and humans</body2></div>
                <body3 className={`${styles.body3}`}> through </body3>
                <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered15(true) }
                onMouseLeave={() => setIsHovered15(false)}
                >
                     <motion.span className={`${styles.body2} `}>digital UX, </motion.span>
                    <motion.img src={UX} alt="veryday" className="boe mr-1" animate={{ width: isHovered15 ? '1.1rem' : '0rem' }} />
                </div>
                <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered14(true) }
                onMouseLeave={() => setIsHovered14(false)}
                >
                    <body2 className={`${styles.body2} `}>strategic thinking </body2> 
                    <motion.img src={Brain} alt="veryday" className="boe mr-1" animate={{ width: isHovered14 ? '1.1rem' : '0rem' }} />
                </div>
                <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered4(true) }
                onMouseLeave={() => setIsHovered4(false)}
                >
                    <body2 className={`${styles.body2} `}> and visual storytelling.</body2> 
                    <motion.img src={Visual} alt="veryday" className="boe mr-1" animate={{ width: isHovered4 ? '1.1rem' : '0rem' }} />
                </div><br /> <br />

                <body3 className={`${styles.body3} `}>Leveraging design both as a</body3>
                <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered23(true) }
                onMouseLeave={() => setIsHovered23(false)}
                >
                    <motion.img src={Advocacy} alt="veryday" className="boe mr-1" animate={{ width: isHovered23 ? '1.1rem' : '0rem' }} />
                    <body2 className={`${styles.body2} mr-1`}> way of thinking</body2> </div>
                <body3 className={`${styles.body3} `}>and as a practical tool for solving</body3>
                <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered22(true) }
                onMouseLeave={() => setIsHovered22(false)}
                >
                    <motion.img src={Thinking} alt="veryday" className="boe mr-1" animate={{ width: isHovered22 ? '1.1rem' : '0rem' }} />
                    <body2 className={`${styles.body2} mr-1`}> real-world challenges,</body2> </div>
                <body3 className={`${styles.body3} `}>I'm currently at </body3>
                <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered(true) }
                onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.img src={BoE} alt="bank of england" className="boe mr-1" animate={{ width: isHovered ? '1.1rem' : '0rem' }} />
                <body2 className={`${styles.body2} mr-1`}>Bank of England </body2>
                </div>
                <body3 className={`${styles.body3} `}>as part of a transformation programme to redefine the </body3> 
                <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered18(true) }
                onMouseLeave={() => setIsHovered18(false)}
                >
                    <motion.img src={Bank} alt="veryday" className="boe mr-1" animate={{ width: isHovered18 ? '1.1rem' : '0rem' }} />
                    <body2 className={`${styles.body2} mr-1`}>future of data collection. </body2></div>
                <body3 className={`${styles.body3} mr-2`}>Previously, I was at</body3>
                <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered2(true) }
                onMouseLeave={() => setIsHovered2(false)}
                >
                    <motion.img src={Veryday} alt="veryday" className="boe" animate={{ width: isHovered2 ? '1.1rem' : '0rem' }} />
                    <body2 className={`${styles.body2} `}>McKinsey Design.</body2> 
                </div>
                <body3 className={`${styles.body3} mr-1 `}> I did my master's at</body3>
                <body2 className={`${styles.body2}`}>Umeå Institute of Design,</body2>
                <body3 className={`${styles.body3}`}> working with </body3>
                <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered17(true) }
                onMouseLeave={() => setIsHovered17(false)}
                >
                    <motion.img src={Philips} alt="veryday" className="boe mr-1" animate={{ width: isHovered17 ? '1.1rem' : '0rem' }} />
                    <body2 className={`${styles.body2}`}>Philips, </body2>
                </div>
                <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered16(true) }
                onMouseLeave={() => setIsHovered16(false)}
                >
                    <motion.img src={Amore} alt="veryday" className="boe mr-1  ml-1" animate={{ width: isHovered16 ? '1.1rem' : '0rem' }} />
                    <body2 className={`${styles.body2} `}> Amorepacific, and </body2>
                </div>
                <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered13(true) }
                onMouseLeave={() => setIsHovered13(false)}
                >
                    <motion.img src={Volvo} alt="bank of england" className="boe mr-2 ml-1" animate={{ width: isHovered13 ? '1.1rem' : '0rem' }} />
                    <body2 className={`${styles.body2} `}>Volvo Cars.</body2>
                </div>
            </div>
        </motion.div>
        {/* <div className={` h-[400px] w-full flex justify-center items-center`}
         onMouseEnter={() => setIsHoveredBottom(true)}
         onMouseLeave={() => setIsHoveredBottom(false)} 
         >
        </div> */}
        {/* </div> */}

        <motion.div variants={riseWithMoreFade3} className="mt-24">
        <div className="w-full flex justify-start pt-12 border-t-[1px] border-t-grey">
            <div className="basis-5/12 flex-col">
                <paragraph className={`${styles.paragraph3}`}>At the Bank of England, I'm</paragraph>
            </div>
            <div className="basis-7/12 flex-col">
            <body3 className={`${styles.body3}`}>Driving</body3>
            <body2 className={`${styles.body2}`}> the future transformation of data collection </body2>
            <body3 className={`${styles.body3}`}>at the Bank of England. Collaborating with </body3>
            <body2 className={`${styles.body2} pb-2 mr-1`}>business stakeholders, technology teams, and end users, </body2>
            <body3 className={`${styles.body3}`}>I’m drafting the future while balancing </body3>
            <body2 className={`${styles.body2}`}>user needs and </body2>
            <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered11(true) }
                onMouseLeave={() => setIsHovered11(false)}
                >
                <motion.img src={Reg} alt="bank of england" className="boe mr-1" animate={{ width: isHovered11 ? '1.1rem' : '0rem' }} />
                <body2 className={`${styles.body2} mr-2 pb-2`}>regulatory requirements </body2>
            </div>
            <body3 className={`${styles.body3}`}>using a </body3>
            <body2 className={`${styles.body2}`}>systems thinking approach.</body2> <br /><br />
            <body3 className={`${styles.body3}`}>Through </body3>
            <body2 className={`${styles.body2} `}>co-creation workshops, design artefacts, and prototypes, </body2>
            <body3 className={`${styles.body3}`}>I guide stakeholders through an </body3>
            <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered5(true) }
                onMouseLeave={() => setIsHovered5(false)}
                >
                <motion.img src={Crayon} alt="veryday" className="boe mr-1" animate={{ width: isHovered5 ? '1.1rem' : '0rem' }} />
            <body2 className={`${styles.body2} mb-2 mr-1`}>iterative design process </body2>
            </div>
            <body3 className={`${styles.body3}`}>to help them envision the future.</body3>
            </div>
        </div>
        <div className="w-full flex justify-start mt-8">
            <div className="basis-5/12 flex-col">
            </div>
            <div className="basis-7/12 pr-2 flex-col">
                <video class="rounded-xl" src={BoEVideo2} autoPlay muted loop />
            </div>
        </div>
        <div className="w-full flex justify-start mt-16 ">
            <div className="basis-5/12 flex-col">
            </div>
            <div className="basis-7/12 flex-col">
            <body3 className={`${styles.body3}`}>Introducing a </body3>
            <body2 className={`${styles.body2} pb-2 mr-2`}>user-centred design approach</body2>
            <body3 className={`${styles.body3}`}>to </body3>
            <body2 className={`${styles.body2} `}>AI implementation,</body2>
            <body3 className={`${styles.body3}`}>working closely with </body3>
            <body2 className={`${styles.body2} pb-2 mr-2`}>data scientists and engineers</body2>
            <body2 className={`${styles.body2}`}>to optimize AI models, address risks, and test concepts with users.</body2>
            <body3 className={`${styles.body3}`}> These </body3>
            <body2 className={`${styles.body2} mb-2`}>innovative methods </body2>
            <body3 className={`${styles.body3}`}>require extensive </body3>
            <body2 className={`${styles.body2}`}>change management, persuasive storytelling, and advocacy </body2>
            <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered6(true) }
                onMouseLeave={() => setIsHovered6(false)}
                >
                    <motion.img src={Advocacy} alt="veryday" className="boe " animate={{ width: isHovered6 ? '1.1rem' : '0rem' }} />
                    <body2 className={`${styles.body2} pb-2`}>within the organisation.</body2> 
            </div>
            </div>
        </div>
        <div className="w-full flex justify-start mt-8">
            <div className="basis-5/12 flex-col">
            </div>
            <div className="basis-7/12 pr-2 flex-col">
                {/* <img 
                    class="rounded-xl" 
                    src={ BoELanding2 }
                    alt="Kan" 
                /> */}
                 <video class="rounded-xl" src={BoEVideo} autoPlay muted loop />
            </div>
        </div>

        <div className="w-full flex justify-start mt-16 ">
            <div className="basis-5/12 flex-col">
            </div>
            <div className="basis-7/12 flex-col">
                <body3 className={`${styles.body3}`}>Building the Bank's </body3>
                <body2 className={`${styles.body2} mr-1`}>very first design system,</body2>
                <body3 className={`${styles.body3} mr-1`}>defining</body3>
                <body2 className={`${styles.body2} mr-1`}>reusable UI components</body2>
                <body3 className={`${styles.body3} mr-1`}>that align with the brand, driving</body3>
                <body2 className={`${styles.body2} mr-1`}>awareness across the organisation</body2>
                <body3 className={`${styles.body3} mr-1`}>for its rollout, and getting</body3>
                <body2 className={`${styles.body2} mr-1`}>internal buy-in for its </body2>
                <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered3(true) }
                onMouseLeave={() => setIsHovered3(false)}
                >
                <motion.img src={People} alt="veryday" className="boe " animate={{ width: isHovered3 ? '1.1rem' : '0rem' }} />
                <body2 className={`${styles.body2} `}>adoption.</body2>
                </div>
            </div>
        </div>
        </motion.div> 

        <Link to ="/kan" rel="noreferrer">
        <motion.div className="w-full flex justify-start mt-24 pt-12 border-t-[1px] border-t-grey" variants={riseWithMoreFade}>
            <div className="basis-5/12 flex-col">
                <paragraph className={`${styles.paragraph3}`}>At McKinsey, I have been</paragraph>
            </div>
            <div className="basis-7/12 flex-col">
            <body3 className={`${styles.body3}`}>Part of </body3>
            <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered9(true) }
                onMouseLeave={() => setIsHovered9(false)}
                >
                <motion.img src={App} alt="veryday" className="boe" animate={{ width: isHovered9 ? '1.1rem' : '0rem' }} />
                <body2 className={`${styles.body2} mr-1`}>digital business building, </body2>
            </div>
            <body3 className={`${styles.body3} mr-2`}>working cross-functionally to create</body3>
            
                <body2 className={`${styles.body2}`}>concept prototypes</body2>
            <body2 className={`${styles.body2}`}> and launch new feature releases. </body2>
            <body3 className={`${styles.body3}`}>Working together with </body3>
            <body2 className={`${styles.body2}`}>business analysts, engineers and data technologists, </body2>
            <body3 className={`${styles.body3}`}>I implemented </body3>
            <body2 className={`${styles.body2}`}>design solutions </body2>
            <body3 className={`${styles.body3}`}>to transform customer experience for clients predominantly in the </body3>
            <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered8(true) }
                onMouseLeave={() => setIsHovered8(false)}
                >
                <motion.img src={Bank} alt="veryday" className="boe mr-1" animate={{ width: isHovered8 ? '1.1rem' : '0rem' }} />
                <body2 className={`${styles.body2} mr-1`}>banking </body2>
            </div>
            <body3 className={`${styles.body3}`}>and </body3>
            <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered7(true) }
                onMouseLeave={() => setIsHovered7(false)}
                >
                <motion.img src={Pharma} alt="veryday" className="boe mr-1" animate={{ width: isHovered7 ? '1.1rem' : '0rem' }} />
                <body2 className={`${styles.body2} mr-1`}>pharma sector.</body2>
            </div>
            </div>
        </motion.div>
        <motion.div className="w-full flex justify-start mt-8" variants={riseWithMoreFade}>
            <div className="basis-5/12 flex-col">
            </div>
            <div className="basis-7/12 pr-2 flex-col">
            <motion.video className="rounded-xl" src={KanVideo} autoPlay muted loop whileHover={{ scale: 1.01 }} transition={{ duration: 0.5 }}/>
            </div>
        </motion.div>
        </Link>
        <Link to ="/hyper" rel="noreferrer">
        <motion.div className="w-full flex justify-start mt-16" variants={riseWithMoreFade}>
            <div className="basis-5/12 flex-col">
            </div>
            <div className="basis-7/12 flex-col">
            <body3 className={`${styles.body3}`}>Developing </body3>
            <body2 className={`${styles.body2}`}>GenAI proof of concepts</body2>
            <body3 className={`${styles.body3}`}> for clients in </body3>
            <body2 className={`${styles.body2}`}>banking and technology, </body2>
            <body3 className={`${styles.body3}`}>utilizing </body3>
            <body2 className={`${styles.body2}`}>human-centered frameworks </body2>
            <body3 className={`${styles.body3}`}>to identify </body3>
            <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered10(true) }
                onMouseLeave={() => setIsHovered10(false)}
                >
                <body2 className={`${styles.body2}`}>AI use cases and assess potential risks. </body2>
                <motion.img src={Risk} alt="veryday" className="boe mr-2" animate={{ width: isHovered10 ? '1.1rem' : '0rem' }} />
            </div>
            <body3 className={`${styles.body3}`}>As a deigner, I was ensuring </body3>
            <body2 className={`${styles.body2}`}>user needs and business requirements</body2>
            <body3 className={`${styles.body3}`}> to be implemented in GenAI outputs</body3>
            </div>
        </motion.div>
        <motion.div className="w-full flex justify-start mt-8" variants={riseWithMoreFade}>
            <div className="basis-5/12 flex-col">
            </div>
            <div className="basis-7/12 pr-2 flex-col">
            <motion.video class="rounded-xl" src={McKVideo} autoPlay muted loop whileHover={{ scale: 1.01 }} transition={{ duration: 0.5 }}/>
            </div>
        </motion.div>
        </Link>

        <Link to ="/fido" rel="noreferrer">
        <motion.div className="w-full flex justify-start mt-24 pt-12 border-t-[1px] border-t-grey" variants={riseWithMoreFade}>
            <div className="basis-5/12 flex-col">
                <paragraph className={`${styles.paragraph3}`}>During my master's at Umeå,</paragraph>
            </div>
            <div className="basis-7/12 flex-col">
            <body3 className={`${styles.body3}`}>I explored how </body3>
            <body2 className={`${styles.body2}`}>autonomy and trust </body2>
            <body3 className={`${styles.body3}`}>can be balanced in </body3>
            <body2 className={`${styles.body2}`}>autonomous vehicles</body2>
            <body3 className={`${styles.body3}`}> together with </body3>
            <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered12(true) }
                onMouseLeave={() => setIsHovered12(false)}
                >
                <motion.img src={Volvo} alt="veryday" className="boe mr-2" animate={{ width: isHovered12 ? '1.1rem' : '0rem' }} />
                <body2 className={`${styles.body2} mb-2 `}>Volvo Cars</body2>
            </div>
            <body2 className={`${styles.body2} ml-2 `}>at Umeå Institute of Design.</body2> 
            </div>
        </motion.div>
        <motion.div className="w-full flex justify-start mt-8" variants={riseWithMoreFade}>
            <div className="basis-5/12 flex-col">
            </div>
            <div className="basis-7/12 pr-2 flex-col">
                <motion.img 
                    class="rounded-xl" 
                    src={ FidoLandingNew }
                    alt="Kan" whileHover={{ scale: 1.01 }} transition={{ duration: 0.5 }}
                />
            </div>
        </motion.div>
        </Link>

       

      <div className="w-full flex justify-between items-center mt-24 mb-12 md:flex-row flex-col pt-6 border-t-[0.7px] border-t-black ">
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

  </motion.section>

    )
    }


    const cursorVariants = {
        blinking: {
          opacity: [0, 0, 1, 1],
          transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "linear",
            times: [0, 0.5, 0.5, 1]
          }
        }
      };
    const defaultAnimations = {
        hidden: {
            opacity: 0,
            y: 3,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };
    const defaultAnimations2 = {
        hidden: {
            opacity: 0,
            y: 3,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
        movedUp: {
            y: -200,
            opacity: 1,
            transition: "string"
        },
    };

    export const AnimatedText2 = ({ once, text, className, el: Wrapper = "p", onComplete }) => {
        const ref= useRef(null);
        const isInView = useInView(ref, { amount: 0.5, once });
        const [hasAnimated, setHasAnimated] = useState(false);

        return(
            React.createElement(Wrapper, { className },
                <span className="sr-only">{text}</span>,
                <motion.span
                    ref={ref}
                    initial="hidden"
                    animate={isInView && !hasAnimated ? "visible": hasAnimated ? "movedUp" : "hidden"}
                    transition={{ staggerChildren: 0.1 }}
                    aria-hidden
                    onAnimationComplete={() => {
                        if (isInView && !hasAnimated) {
                            setHasAnimated(true);
                            onComplete && onComplete();
                        }
                    }}
                >
                    {text.split(" ").map((word, wordIndex) => (
                        <span key={wordIndex} className="inline-block">
                            {word.split("").map((char, charIndex) => (
                                <motion.span
                                    key={charIndex}
                                    className="inline-block"
                                    variants={defaultAnimations2}
                                >
                                    {char}
                                </motion.span>
                            ))}
                            <span className="inline-block">&nbsp;</span>
                        </span>
                    ))}
                </motion.span>
        )
    );
    }
    export const AnimatedText = ({ once, text, className, el: Wrapper = "p" }) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { amount: 0.5, once });
    
        return (
            React.createElement(Wrapper, { className },
                <span className="sr-only">{text}</span>,
                <motion.span
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ staggerChildren: 0.1 }}
                    aria-hidden
                >
                    {text.split(" ").map((word, wordIndex) => (
                        <span key={wordIndex} className="inline-block">
                            {word.split("").map((char, charIndex) => (
                                <motion.span
                                    key={charIndex}
                                    className="inline-block"
                                    variants={defaultAnimations}
                                >
                                    {char}
                                </motion.span>
                            ))}
                            <span className="inline-block">&nbsp;</span>
                        </span>
                    ))}
                </motion.span>
            )
        );
    };

    const hoverAnimations = {
        hidden: {
            opacity: 1,
            y: -3,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };
    export const HoveredText = ({ once, text, className, el: Wrapper = "p" }) => {
        const [isHovered, setIsHovered] = useState(false);
        return (
            React.createElement(Wrapper, { className },
                <span className="sr-only">{text}</span>,
                <motion.span
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    initial="hidden"
                    animate={isHovered ? "visible" : "hidden"}
                    transition={{ staggerChildren: 0.1 }}
                    aria-hidden
                >
                    {text.split(" ").map((word, wordIndex) => (
                        <span key={wordIndex} className="inline-block">
                            {word.split("").map((char, charIndex) => (
                                <motion.span
                                    key={charIndex}
                                    className={`inline-block ${isHovered ? "text-darkgreen" : "text-grey"}`}
                                    variants={hoverAnimations}
                                >
                                    {char}
                                </motion.span>
                            ))}
                            <span className="inline-block">&nbsp;</span>
                        </span>
                    ))}
                </motion.span>
            )
        );
    };
    export const HoveredText2 = ({ once, text, className, el: Wrapper = "p" }) => {
        const [isHovered, setIsHovered] = useState(false);
        return (
            React.createElement(Wrapper, { className },
                <span className="sr-only">{text}</span>,
                <motion.span
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    initial="hidden"
                    animate={isHovered ? "visible" : "hidden"}
                    transition={{ staggerChildren: 0.1 }}
                    aria-hidden
                >
                    {text.split(" ").map((word, wordIndex) => (
                        <span key={wordIndex} className="inline-block">
                            {word.split("").map((char, charIndex) => (
                                <motion.span
                                    key={charIndex}
                                    className={`inline-block ${isHovered ? "text-darkyellow" : "text-grey"}`}
                                    variants={hoverAnimations}
                                >
                                    {char}
                                </motion.span>
                            ))}
                            <span className="inline-block">&nbsp;</span>
                        </span>
                    ))}
                </motion.span>
            )
        );
    };

   

   


        
 




export default Home

// import styles, { layout } from '../style';
// import React from 'react';
// import { useState, useRef } from 'react';
// import '../App.css';
// import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
// import CustomCursor from "./CustomCursor";
// var FidoLanding = require('../assets/Fido_landing.png');
// var FidoLanding2 = require('../assets/Fido_landing2.png');
// var FidoLanding3 = require('../assets/Fido_landing4.jpg');
// var FidoLanding4 = require('../assets/Fido_landing5.jpg');
// var KanLanding = require('../assets/Kan_landing.png');
// var KanLanding2 = require('../assets/Kan_landing2.png');
// var KanLanding3 = require('../assets/Kan_landing3.jpg');
// var KanLanding4 = require('../assets/Kan_landing4.jpg');
// // var McKLanding = require('../assets/McK_landing.png');
// // var McKLanding2 = require('../assets/McK_landing_2.png');
// var HypeLanding = require('../assets/Hype_landing.png');
// var HypeLanding2 = require('../assets/Hype_landing2.png');
// var DataLanding = require('../assets/Data_landing.png');
// var AiLanding = require('../assets/Ai_landing.png');
// var AiLanding2 = require('../assets/Ai_landing_2.png');
// var JoulLanding = require('../assets/Joul_landing.png');
// var JoulLanding2 = require('../assets/Joul_landing2.png');
// var Insta = require('../assets/logo-instagram.png');
// var Email = require('../assets/at-sign@3x.png');
// var LinkedIn = require('../assets/logo-linkedin.png');
// var Youtube = require('../assets/youtube_icon.png');
// var Aboutme_1 = require('../assets/aboutme_1.png');
// var Aboutme_2 = require('../assets/aboutme_2.png');
// var Aboutme_3 = require('../assets/aboutme_3.png');
// var Aboutme_4 = require('../assets/aboutme_4.png');

// const Home = () => {
//     const cursor = useRef(null)
//     const changePosition = (e) => {
//         cursor.current.style.top = `${e.clientY}px`;
//         cursor.current.style.left = `${e.clientX}px`;
//     }

//     const [isKanHovered, setIsKanHovered] = useState(false);
//     const [isFidoHovered, setIsFidoHovered] = useState(false);
//     const [isJoulHovered, setIsJoulHovered] = useState(false);
//     const [isMeHovered, setIsMeHovered] = useState(false);
//     const [isHypeHovered, setIsHypeHovered] = useState(false);

//     return(
        
//     <section className="w-full flex justify-start items-start overflow-hidden" onMouseMove={changePosition}>
//     <div
//         className={`cursor-style ${isKanHovered ? 'kan-hovered' : ''} ${isFidoHovered ? 'fido-hovered' : ''} ${isJoulHovered ? 'joul-hovered' : ''} ${isHypeHovered ? 'hype-hovered' : ''}
//         ${isMeHovered ? 'me-hovered' : ''}`}
//         ref={cursor}
//       ></div>
//     <div className="flex-1 flex-col">
//       <div className="semi-title">
//         <div className={`${styles.boxWidth}`}>
//             <body1 className={`${styles.body1} + text-grey`}>👋🏻 Hello, Hej, 안녕!<br /><br /></body1>
//             {/* <h1 className={`${styles.heading1}`}>My name is Soheum</h1> <p class="grey-italics">- so? hmmm...</p> */}
//         </div>
//         <div className={`${styles.boxWidth} + one-line`}>
//             <h1 className={`${styles.heading1}`}>My name is Soheum</h1> 
//             <p class="grey-italics"> - so? hmmm...</p>
//         </div>
//         <div className={`${styles.boxWidth} + mt-2`}>
//             <body1 className={`${styles.body1}`}>Product designer at </body1> 
//             <a href="https://transformingdatacollection.co.uk/" target="_blank" rel="noopener noreferrer">
//                 <body1 className={`${styles.body1} + text-light-grey`} id="exp-text1">Bank of England, transforming data collection </body1> 
//             </a>
//             <body1 className={`${styles.body1}`} id="exp-text2">converging </body1>
//             <body1 className={`${styles.body1} + blue`} >AI and humans</body1>
//             <body1 className={`${styles.body1}`} id="exp-text2"> through </body1>
//             <body1 className={`${styles.body1} + blue`} >strategic thinking and visual explorations</body1>
//         </div>

//         <div className={`${styles.boxWidth} + mt-6`}>
//         <Link to ="/aboutme" rel="noreferrer">
//             <body1 className={`${styles.body1} + text-light-grey + me`}
//             onMouseEnter={() => setIsMeHovered(true)}
//             onMouseLeave={() => setIsMeHovered(false)}
//             >💬  more about me</body1>
//         </Link>
//         </div>

//         <div className={`${styles.boxWidth} + mt-24`}>
//             <h2 className={`${styles.heading2}`}>Selected works</h2> 
//         </div>
//         <div className={`${styles.boxWidth} + ${styles.flexCenter}`}>
//             <div className={`work-left mr-2`} >
//                 <Link to ="/hyper" rel="noreferrer">
//                     <img 
//                         class="rounded-xl mb-2 hype-cursor" 
//                         src={ HypeLanding }
//                         alt="Kan" 
//                         onMouseEnter={(e) => {setIsHypeHovered(true);
//                         e.currentTarget.src = HypeLanding2; }}
//                         onMouseLeave={(e) => {setIsHypeHovered(false);
//                         e.currentTarget.src = HypeLanding; }}
//                     />
//                 </Link>
//                 <paragraph className={`${styles.paragraph}`}>Human-centred thinking in AI</paragraph> <br />
//                 <paragraph className={`${styles.link}`}>Protected work at McKinsey - password mentioned in CV</paragraph>
//             </div>
//             <div className={`work-right ml-2`}>
//                 <Link to ="/kan" rel="noreferrer">
//                     <img class="rounded-xl mb-2 fido-cursor" 
//                     src={ KanLanding3 }
//                     alt="Kan" 
//                     onMouseEnter={(e) => {setIsKanHovered(true);
//                     e.currentTarget.src = KanLanding3; }}
//                     onMouseLeave={(e) => {setIsKanHovered(false);
//                     e.currentTarget.src = KanLanding4; }} 
//                     />
//                 </Link>
//                 <paragraph className={`${styles.paragraph}`}>Kan - digital financial health service for employees</paragraph> <br />
//                 <paragraph className={`${styles.link}`}>Business building project at McKinsey</paragraph>
//             </div> 
//         </div>

//         <div className={`${styles.boxWidth} + mt-12`}>
//             <h2 className={`${styles.heading2}`}>Recent works</h2> 
//         </div>
//         <div className={`${styles.boxWidth} + ${styles.flexCenter}`}>
//             <Link to ="/fido" rel="noreferrer">
//              <div className={`work-right mr-4`}>
//                 <img class="rounded-xl mb-2" src={FidoLanding3} alt="Fido" 
//                     onMouseEnter={(e) => {setIsFidoHovered(true);
//                     e.currentTarget.src = FidoLanding3; }}
//                     onMouseLeave={(e) => {setIsFidoHovered(false);
//                     e.currentTarget.src = FidoLanding4; }}/>
//                 <paragraph className={`${styles.paragraph}`}>Autonomy & trust in autonomous vehicles </paragraph> <br />
//                 <paragraph className={`${styles.link}`}>IxDA 2023 Winner in Disrupting | Sponsored by Volvo Cars</paragraph>
//             </div> 
//             </Link>

//             <div className={`work-left mr-2`}>
//                 {/* <a href={"mailto:soheum@naver.com?body=Hello! I want to know more about your work in McKinsey"}> */}
//                     <img class="rounded-xl mb-2" src={DataLanding} alt="McKinseywork" onMouseOver={e => (e.currentTarget.src = DataLanding)} onMouseOut={e => (e.currentTarget.src = DataLanding )}/>
//                 {/* </a> */}
//                 <paragraph className={`${styles.paragraph}`}>Data-centric design process</paragraph><br />
//                 <paragraph className={`${styles.link}`}>WIP Personal Exploration - Figma plugin</paragraph>
//             </div>
            

//             <div className={`work-right ml-2`}>
//                 <a href="https://designawards.core77.com/Interaction/95544/JOUL-exploring-sustainability-through-play" target="_blank" rel="noopener noreferrer">
//                     <img class="rounded-xl mb-2 joul-cursor" src={JoulLanding} alt="Fido" 
//                         onMouseEnter={(e) => {setIsJoulHovered(true);
//                         e.currentTarget.src = JoulLanding; }}
//                         onMouseLeave={(e) => {setIsJoulHovered(false);
//                         e.currentTarget.src = JoulLanding2; }}/>
//                 </a>
//                 <paragraph className={`${styles.paragraph}`}>Exploring sustainability through play</paragraph> <br />
//                 <paragraph className={`${styles.link}`}>Core77 Student Runner Up 2020</paragraph>
//             </div> 
//         </div>
    
//       </div>

//       <div className="w-full flex justify-between items-center mt-24 md:flex-row flex-col pt-6 border-t-[0.7px] border-t-black ">
//         <p className="font-pretendard font-light tracking-tight text-[1rem] text-black">
//             All Rights Reserved by Soheum Hwang, built by me!
//         </p>
//         <div className="flex flex-row md:mt-0 mt-6">
//             <a href={"https://www.instagram.com/sohmnm/"}>
//                 <img class="w-[1.25rem] h-[1.25rem] mr-2 object-contain cursor-pointer" src={Insta} />
//             </a>
//             <a href={"https://www.linkedin.com/in/so-heum-hwang/"}>
//             <img class="w-[1.25rem] h-[1.25rem]  mr-2 object-contain cursor-pointer" src={LinkedIn} />
//             </a>
//             <a href={"mailto:sohheum@gmail.com?body=Hello! Let's grab a coffee"}>
//             <img class="w-[1.25rem] h-[1.25rem] mr-2 object-contain cursor-pointer" src={Email} />
//             </a>
//             <a href={"https://www.youtube.com/@sohmnm"}>
//             <img class="w-[1.25rem] h-[1.25rem] object-contain cursor-pointer" src={Youtube} />
//             </a>
            
            
//         </div>
//       </div>
//     </div>
//   </section>
//     )
//     }

// export default Home