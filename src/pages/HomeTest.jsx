import styles, { layout } from '../style';
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import '../App.css';
import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import CustomCursor from "./CustomCursor";
import { motion, useInView } from "framer-motion";
import { downWithFade, riseWithFade, riseWithMoreFade, SFade, OFade, HFade, EFade, UFade, MFade, AFade, BFade, CFade, DFade, FFade, GFade  } from './animations';
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
var Brain = require('../assets/brain.png');
var Philips = require('../assets/philips.png');
var Amore = require('../assets/amorepacific.png');
var Bank = require('../assets/bank.png');
var Insta = require('../assets/logo-instagram.png');
var Email = require('../assets/at-sign@3x.png');
var LinkedIn = require('../assets/logo-linkedin.png');
var Youtube = require('../assets/youtube_icon.png');


const HomeTest = () => {
    // const cursor = useRef(null)
    // const changePosition = (e) => {
    //     cursor.current.style.top = `${e.clientY}px`;
    //     cursor.current.style.left = `${e.clientX}px`;
    // }

    // const [isKanHovered, setIsKanHovered] = useState(false);
    // const [isFidoHovered, setIsFidoHovered] = useState(false);
    // const [isJoulHovered, setIsJoulHovered] = useState(false);
    // const [isMeHovered, setIsMeHovered] = useState(false);
    // const [isHypeHovered, setIsHypeHovered] = useState(false);
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

    return(

    <motion.section className="w-full flex flex-col justify-start items-start overflow-hidden mt-12" initial="initial" animate="animate" >
        {/* <div className="w-full flex justify-between items-center mb-20"> */}
        <div className="flex">
                <AnimatedText className={`${styles.heading1} `} text="Soheum Hwang" />
                <motion.span class="grey-italics" variants={SFade}>  ( </motion.span>
                <motion.span class="grey-italics" variants={OFade}>  s </motion.span>
                <motion.span class="grey-italics" variants={HFade}>  o </motion.span>
                <motion.span class="grey-italics mr-2" variants={EFade}>  ? </motion.span>
                <motion.span class="grey-italics" variants={UFade}> h</motion.span>
                <motion.span class="grey-italics" variants={MFade}> m</motion.span>
                <motion.span class="grey-italics" variants={AFade}> m</motion.span>
                <motion.span class="grey-italics" variants={BFade}> m</motion.span>
                <motion.span class="grey-italics" variants={CFade}> .</motion.span>
                <motion.span class="grey-italics" variants={DFade}> .</motion.span>
                <motion.span class="grey-italics" variants={FFade}> .</motion.span>
                <motion.span class="grey-italics" variants={GFade}> )</motion.span>
            {/* <p className="font-pretendard">want to grab coffee?</p> */}
        </div>

        <motion.div className="w-full flex justify-start pt-6" variants={riseWithFade}>
            <div className="basis-4/12 flex-col one-line">
                <a href="https://drive.google.com/file/d/1m7AMO-KRl-YbCw8SUdZ_WBI1eJKsY6jk/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <paragraph className={`${styles.paragraph3} mr-6`}>Link to CV</paragraph>
                </a>
                <a href={"mailto:sohheum@gmail.com?body=Hello! Let's grab a coffee"}>
                    <paragraph className={`${styles.paragraph3}`}>Coffee chat?</paragraph>
                </a>
            </div>
        </motion.div>
        <motion.div className="w-full flex justify-start mt-24 pt-12 border-t-[1px] border-t-grey" variants={riseWithFade}>
            <div className="basis-4/12 flex-col">
                <paragraph className={`${styles.paragraph3}`}>Hey 🇬🇧, Hej 🇸🇪, 안녕하세요 🇰🇷</paragraph>
            </div>
            <div className="basis-1/12 flex-col">
            </div>
            <div className="basis-7/12">
                <body3 className={`${styles.body3}`}>I </body3>
                <body2 className={`${styles.body2}`}>discover design </body2>
                <body2 className={`${styles.body2}`}>values</body2>
                <body3 className={`${styles.body3}`}> and </body3>
                <body2 className={`${styles.body2}`}>deliver digital experiences</body2>
                <body3 className={`${styles.body3}`}> with a multidisciplinary team through </body3>
                <div className="inline-flex align-middle" 
                onMouseEnter={() => setIsHovered15(true) }
                onMouseLeave={() => setIsHovered15(false)}
                >
                    <motion.img src={Brain} alt="veryday" className="boe mr-1" animate={{ width: isHovered15 ? '1.5rem' : '0rem' }} />
                    <body2 className={`${styles.body2} mb-2`}>strategic thinking, </body2>
                </div>
                <div className="inline-flex align-middle" 
                onMouseEnter={() => setIsHovered14(true) }
                onMouseLeave={() => setIsHovered14(false)}
                >
                    <motion.img src={UX} alt="veryday" className="boe mr-1" animate={{ width: isHovered14 ? '1.5rem' : '0rem' }} />
                    <body2 className={`${styles.body2} mb-2`}>digital UX, and </body2> 
                </div>
                <div className="inline-flex align-middle" 
                onMouseEnter={() => setIsHovered4(true) }
                onMouseLeave={() => setIsHovered4(false)}
                >
                    <motion.img src={Visual} alt="veryday" className="boe mr-1" animate={{ width: isHovered4 ? '1.5rem' : '0rem' }} />
                    <body2 className={`${styles.body2} mb-2`}> visual storytelling.</body2> 
                </div><br /> <br />
                <body3 className={`${styles.body3} `}>Currently at </body3>
                <div className="inline-flex align-middle" 
                onMouseEnter={() => setIsHovered(true) }
                onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.img src={BoE} alt="bank of england" className="boe mr-1" animate={{ width: isHovered ? '1.5rem' : '0rem' }} />
                <body2 className={`${styles.body2} pb-2 mr-1`}>Bank of England </body2>
                </div>
                <body3 className={`${styles.body3} mb-2 `}>as part of a transformation programme to </body3>
                <body2 className={`${styles.body2} ml-1`}>redefine the future of data collection in 2031. </body2>
                <body3 className={`${styles.body3} mb-2 mr-2`}>Previously, I was at</body3>
                <div className="inline-flex align-middle items-center" 
                onMouseEnter={() => setIsHovered2(true) }
                onMouseLeave={() => setIsHovered2(false)}
                >
                    <motion.img src={Veryday} alt="veryday" className="boe mr-1" animate={{ width: isHovered2 ? '1.5rem' : '0rem' }} />
                    <body2 className={`${styles.body2}  mb-2 `}>McKinsey Design.</body2> 
                </div>
                <body3 className={`${styles.body3} mr-1 `}> I did my master's at</body3>
                <body2 className={`${styles.body2}`}>Umeå Institute of Design,</body2>
                <body3 className={`${styles.body3}`}> working with </body3>
                <div className="inline-flex align-middle items-center" 
                onMouseEnter={() => setIsHovered17(true) }
                onMouseLeave={() => setIsHovered17(false)}
                >
                    <motion.img src={Philips} alt="veryday" className="boe mr-1" animate={{ width: isHovered17 ? '1.5rem' : '0rem' }} />
                    <body2 className={`${styles.body2} pb-2`}>Philips, </body2>
                </div>
                <div className="inline-flex align-middle items-center" 
                onMouseEnter={() => setIsHovered16(true) }
                onMouseLeave={() => setIsHovered16(false)}
                >
                    <motion.img src={Amore} alt="veryday" className="boe mr-1  ml-1" animate={{ width: isHovered16 ? '1.5rem' : '0rem' }} />
                    <body2 className={`${styles.body2} pb-2`}> Amorepacific, and </body2>
                </div>
                <div className="inline-flex align-middle" 
                onMouseEnter={() => setIsHovered13(true) }
                onMouseLeave={() => setIsHovered13(false)}
                >
                    <motion.img src={Volvo} alt="bank of england" className="boe mr-2 ml-1" animate={{ width: isHovered13 ? '1.5rem' : '0rem' }} />
                    <body2 className={`${styles.body2} pb-2`}>Volvo Cars.</body2>
                </div>
            </div>
        </motion.div>

        <motion.div variants={riseWithMoreFade}>
        <div className="w-full flex justify-start mt-24 pt-12 border-t-[1px] border-t-grey">
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
            <div className="inline-flex align-middle" 
                onMouseEnter={() => setIsHovered11(true) }
                onMouseLeave={() => setIsHovered11(false)}
                >
                <motion.img src={Reg} alt="bank of england" className="boe mr-1" animate={{ width: isHovered11 ? '1.5rem' : '0rem' }} />
                <body2 className={`${styles.body2} mr-2 pb-2`}>regulatory requirements </body2>
            </div>
            <body3 className={`${styles.body3}`}>using a </body3>
            <body2 className={`${styles.body2}`}>systems thinking approach.</body2> <br /><br />
            <body3 className={`${styles.body3}`}>Through </body3>
            <body2 className={`${styles.body2} `}>co-creation workshops, design artefacts, and prototypes, </body2>
            <body3 className={`${styles.body3}`}>I guide stakeholders through an </body3>
            <div className="inline-flex align-middle" 
                onMouseEnter={() => setIsHovered5(true) }
                onMouseLeave={() => setIsHovered5(false)}
                >
                <motion.img src={Crayon} alt="veryday" className="boe mr-1" animate={{ width: isHovered5 ? '1.5rem' : '0rem' }} />
            <body2 className={`${styles.body2} mb-2 mr-1`}>iterative design process </body2>
            </div>
            <body3 className={`${styles.body3}`}>to help them envision the future.</body3>
            </div>
        </div>
        <div className="w-full flex justify-start mt-8">
            <div className="basis-5/12 flex-col">
            </div>
            <div className="basis-7/12 pr-2 flex-col">
                <img 
                    class="rounded-xl" 
                    src={ BoELanding1 }
                    alt="Kan" 
                />
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
            <div className="inline-flex align-middle" 
                onMouseEnter={() => setIsHovered6(true) }
                onMouseLeave={() => setIsHovered6(false)}
                >
                    <motion.img src={Advocacy} alt="veryday" className="boe " animate={{ width: isHovered6 ? '1.5rem' : '0rem' }} />
                    <body2 className={`${styles.body2} pb-2`}>within the organisation.</body2> 
            </div>
            </div>
        </div>
        <div className="w-full flex justify-start mt-8">
            <div className="basis-5/12 flex-col">
            </div>
            <div className="basis-7/12 pr-2 flex-col">
                <img 
                    class="rounded-xl" 
                    src={ BoELanding2 }
                    alt="Kan" 
                />
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
                <div className="inline-flex align-middle" 
                onMouseEnter={() => setIsHovered3(true) }
                onMouseLeave={() => setIsHovered3(false)}
                >
                <motion.img src={People} alt="veryday" className="boe mr-1" animate={{ width: isHovered3 ? '1.5rem' : '0rem' }} />
                <body2 className={`${styles.body2} pb-2`}>adoption.</body2>
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
            <div className="inline-flex align-middle" 
                onMouseEnter={() => setIsHovered9(true) }
                onMouseLeave={() => setIsHovered9(false)}
                >
                <motion.img src={App} alt="veryday" className="boe mr-2" animate={{ width: isHovered9 ? '1.5rem' : '0rem' }} />
                <body2 className={`${styles.body2} mr-2 pb-2`}>digital business building, </body2>
            </div>
            <body3 className={`${styles.body3} mr-2`}>working cross-functionally to create</body3>
            
                <body2 className={`${styles.body2}`}>concept prototypes</body2>
            <body2 className={`${styles.body2}`}> and launch new feature releases. </body2>
            <body3 className={`${styles.body3}`}>Working together with </body3>
            <body2 className={`${styles.body2}`}>business analysts, engineers and data technologists, </body2>
            <body3 className={`${styles.body3}`}>I implemented </body3>
            <body2 className={`${styles.body2}`}>design solutions </body2>
            <body3 className={`${styles.body3}`}>to transform customer experience for clients predominantly in the </body3>
            <div className="inline-flex align-middle" 
                onMouseEnter={() => setIsHovered8(true) }
                onMouseLeave={() => setIsHovered8(false)}
                >
                <motion.img src={Bank} alt="veryday" className="boe mr-2" animate={{ width: isHovered8 ? '1.5rem' : '0rem' }} />
                <body2 className={`${styles.body2} pb-2 mr-2`}>banking </body2>
            </div>
            <body3 className={`${styles.body3}`}>and </body3>
            <div className="inline-flex align-middle" 
                onMouseEnter={() => setIsHovered7(true) }
                onMouseLeave={() => setIsHovered7(false)}
                >
                <motion.img src={Pharma} alt="veryday" className="boe mr-2" animate={{ width: isHovered7 ? '1.5rem' : '0rem' }} />
                <body2 className={`${styles.body2} pb-2 mr-2`}>pharma sector.</body2>
            </div>
            </div>
        </motion.div>
        <motion.div className="w-full flex justify-start mt-8" variants={riseWithMoreFade}>
            <div className="basis-5/12 flex-col">
            </div>
            <div className="basis-3/12 pr-2 flex-col">
                <img 
                    class="rounded-xl" 
                    src={ KanLandingNew1 }
                    alt="Kan" 
                />
            </div>
            <div className="basis-4/12 pl-2 flex-col">
                <img 
                    class="rounded-xl" 
                    src={ KanLandingNew2 }
                    alt="Kan" 
                />
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
            <div className="inline-flex align-middle" 
                onMouseEnter={() => setIsHovered10(true) }
                onMouseLeave={() => setIsHovered10(false)}
                >
                <body2 className={`${styles.body2}`}>AI use cases and assess potential risks. </body2>
                <motion.img src={Risk} alt="veryday" className="boe mr-2" animate={{ width: isHovered10 ? '1.5rem' : '0rem' }} />
            </div>
            <body3 className={`${styles.body3}`}>As a deigner, I was ensuring </body3>
            <body2 className={`${styles.body2}`}>user needs and business requirements</body2>
            <body3 className={`${styles.body3}`}> to be implemented in GenAI outputs</body3>
            </div>
        </motion.div>
        <motion.div className="w-full flex justify-start mt-8" variants={riseWithMoreFade}>
            <div className="basis-5/12 flex-col">
            </div>
            <div className="basis-4/12 pr-2 flex-col">
                <img 
                    class="rounded-xl" 
                    src={ McKLanding1 }
                    alt="Kan" 
                />
            </div>
            <div className="basis-3/12 pl-2 flex-col">
                <img 
                    class="rounded-xl" 
                    src={ McKLanding2 }
                    alt="Kan" 
                />
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
            <div className="inline-flex align-middle" 
                onMouseEnter={() => setIsHovered12(true) }
                onMouseLeave={() => setIsHovered12(false)}
                >
                <motion.img src={Volvo} alt="veryday" className="boe mr-2" animate={{ width: isHovered12 ? '1.5rem' : '0rem' }} />
                <body2 className={`${styles.body2} mb-2 `}>Volvo Cars</body2>
            </div>
            <body2 className={`${styles.body2} ml-2 `}>at Umeå Institute of Design.</body2> 
            </div>
        </motion.div>
        <motion.div className="w-full flex justify-start mt-8" variants={riseWithMoreFade}>
            <div className="basis-5/12 flex-col">
            </div>
            <div className="basis-7/12 pr-2 flex-col">
                <img 
                    class="rounded-xl" 
                    src={ FidoLandingNew }
                    alt="Kan" 
                />
            </div>
        </motion.div>
        </Link>

       

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

  </motion.section>

    )
    }


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

   


        
 




export default HomeTest