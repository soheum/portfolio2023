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
import KanVideo from '../assets/McK-video3.mp4';
import ScrollToTop from './ScrollToTop';
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
        <motion.section className="" initial="initial" animate="animate" >
        <ScrollToTop />
        <div className="flex-col mt-36">
            <div className="one-line">
                <AnimatedText className={`${styles.heading1}`} text="Soheum Hwang" />
                <motion.span class="grey-italics" variants={SFade}>(</motion.span>
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
                <a href="https://drive.google.com/file/d/15KAb5xRktBRJk8aWyaqm8oDybZPdHs3I/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <HoveredText className={`font-pretendard font-light tracking-tight text-[1.15rem] leading-normal mr-6 mb-2`} text="Link to CV" />
                </a>
                <a href={"mailto:sohheum@gmail.com?body=Hello! Let's grab a coffee"}>
                <HoveredText2 className={`font-pretendard font-light tracking-tight text-[1.15rem] leading-normal mr-6`} text="Coffee chat?" />
                </a>
            </div>
            <div className="basis-3/12"></div>
            <div className="justify-start flex-col basis-6/12">
            <body3 className={`${styles.body3}`}>I discover and design </body3>
            <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered19(true) }
                onMouseLeave={() => setIsHovered19(false)}
                >
                <body2 className={`${styles.body2} ml-1`}> digital experiences that unravel complexity</body2>
                <motion.img src={Complex} alt="veryday" className="boe mr-1" animate={{ width: isHovered19 ? '1.1rem' : '0rem' }} /></div>
                <body3 className={`${styles.body3}`}> with a focus on user needs.</body3>
                
                <body3 className={`${styles.body3}`}> I converge technology and humans</body3>
                
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
                    <motion.img src={Thinking} alt="veryday" className="boe mr-1" animate={{ width: isHovered23 ? '1.1rem' : '0rem' }} />
                    <body2 className={`${styles.body2} mr-1`}> way of thinking and as a practical tool</body2> </div>
                <body3 className={`${styles.body3} `}> for solving real-world challenges, </body3>
                <body3 className={`${styles.body3} `}>I'm currently at </body3>
                <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered(true) }
                onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.img src={BoE} alt="bank of england" className="boe mr-1" animate={{ width: isHovered ? '1.1rem' : '0rem' }} />
                <body2 className={`${styles.body2} mr-1`}>Bank of England </body2>
                </div>
                <body3 className={`${styles.body3} `}>as part of a transformation programme to redefine the future of data collection. </body3> 
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
                <paragraph className={`${styles.paragraph3}`}>Bank of England</paragraph>
            </div>
            <div className="basis-7/12 flex-col">
            <body3 className={`${styles.body3}`}>Driving the future transformation of data collection at the Bank of England. Collaborating with business stakeholders, technology teams, and end users. I’m drafting the future while balancing user needs and regulatory requirements using a </body3>
            <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered11(true) }
                onMouseLeave={() => setIsHovered11(false)}
                >
                <motion.img src={Crayon} alt="bank of england" className="boe mr-1" animate={{ width: isHovered11 ? '1.1rem' : '0rem' }} />
                <body2 className={`${styles.body2} mr-2 pb-2`}>systems thinking approach. </body2> <br /><br />
            </div>
            <body3 className={`${styles.body3}`}>Through </body3>
            <body2 className={`${styles.body2} `}>co-creation workshops, design artefacts, and prototypes, </body2>
            <body3 className={`${styles.body3}`}>I guide stakeholders through an iterative design process to help them envision the future.</body3>
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
            <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered6(true) }
                onMouseLeave={() => setIsHovered6(false)}
                >
                    <motion.img src={User} alt="veryday" className="boe " animate={{ width: isHovered6 ? '1.1rem' : '0rem' }} />
                    <body2 className={`${styles.body2} mr-1`}>Introducing a user-centred design approach to AI implementation, </body2> 
            </div>
            <body3 className={`${styles.body3}`}>working closely with data scientists and engineers to optimize AI models, address risks, and test concepts with users. These innovative methods require extensive change management, persuasive storytelling, and advocacy within the organisation.</body3>
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
                <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered3(true) }
                onMouseLeave={() => setIsHovered3(false)}
                >
                <motion.img src={People} alt="veryday" className="boe " animate={{ width: isHovered3 ? '1.1rem' : '0rem' }} />
                <body2 className={`${styles.body2} `}>Building the Bank's very first design system, </body2>
                </div>
                <body3 className={`${styles.body3} ml-1`}>defining reusable UI components that align with the brand, driving awareness across the organisation for its rollout, and getting internal buy-in for its adoption.</body3>

            </div>
        </div>
        </motion.div> 
        <motion.div className="w-full flex mt-8" variants={riseWithMoreFade}>
            <div className="basis-5/12 flex-col"></div>
            <div className="basis-7/12 flex-col">
            <a href={"mailto:sohheum@gmail.com?body=Hello! I want to know more about your work at Bank of England."}>
                <HoveredText5 className={`font-pretendard font-light tracking-tight text-[1.15rem] leading-normal mr-6`} text="More info available upon request" />
            </a>
            </div>
        </motion.div>

        <Link to ="/kan" rel="noreferrer">
        <motion.div className="w-full flex justify-start mt-24 pt-12 border-t-[1px] border-t-grey" variants={riseWithMoreFade}>
            <div className="basis-5/12 flex-col">
                <paragraph className={`${styles.paragraph3}`}>McKinsey Design / Veryday</paragraph>
            </div>
            <div className="basis-7/12 flex-col">
            <body3 className={`${styles.body3}`}>Part of digital business building, working cross-functionally to create concept prototypes and launch new feature releases. </body3>
            <body3 className={`${styles.body3}`}>Working together with business analysts, engineers and data technologists,</body3>
            <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered9(true) }
                onMouseLeave={() => setIsHovered9(false)}
                >
                <motion.img src={App} alt="veryday" className="boe" animate={{ width: isHovered9 ? '1.1rem' : '0rem' }} />
                <body2 className={`${styles.body2} mr-1 ml-1`}>I implemented design solutions to transform customer experience  </body2>
            </div>
            <body3 className={`${styles.body3}`}>for clients predominantly in the</body3>
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
            <motion.video className="rounded-xl" src={KanVideo} autoPlay muted loop whileHover={{ scale: 1.01 }} transition={{ duration: 0.5 }} />
            </div>
        </motion.div>
        <motion.div className="w-full flex mt-8" variants={riseWithMoreFade2}>
            <div className="basis-5/12 flex-col"></div>
            <div className="basis-7/12 flex-col">
                    <HoveredText3 className={`font-pretendard font-light tracking-tight text-[1.15rem] leading-normal mr-6`} text="Click here to view more" />
            </div>
        </motion.div>
        </Link>

        <Link to ="/hyper" rel="noreferrer">
        <motion.div className="w-full flex justify-start mt-16" variants={riseWithMoreFade}>
            <div className="basis-5/12 flex-col">
            </div>
            <div className="basis-7/12 flex-col">
            <body3 className={`${styles.body3}`}>Developing GenAI proof of concepts for clients in banking and technology, utilising</body3>
            <div className="inline-flex items-baseline" 
                onMouseEnter={() => setIsHovered10(true) }
                onMouseLeave={() => setIsHovered10(false)}
                >
                <body2 className={`${styles.body2}`}>human-centered frameworks to identify AI use cases and assess potential risks. </body2>
                <motion.img src={Risk} alt="veryday" className="boe mr-2" animate={{ width: isHovered10 ? '1.1rem' : '0rem' }} />
            </div>
            <body3 className={`${styles.body3}`}>As a designer, I was ensuring user needs and business requirements to be implemented in GenAI outputs.</body3>
            </div>
        </motion.div>
        <motion.div className="w-full flex justify-start mt-8" variants={riseWithMoreFade}>
            <div className="basis-5/12 flex-col">
            </div>
            <div className="basis-7/12 pr-2 flex-col">
            <motion.video class="rounded-xl" src={McKVideo} autoPlay muted loop whileHover={{ scale: 1.01 }} transition={{ duration: 0.5 }}/>
            </div>
        </motion.div>
        <motion.div className="w-full flex mt-8" variants={riseWithMoreFade2}>
            <div className="basis-5/12 flex-col"></div>
            <div className="basis-7/12 flex-col">
                <HoveredText5 className={`font-pretendard font-light tracking-tight text-[1.15rem] leading-normal mr-6`} text="Click here to view more" />
            </div>
        </motion.div>
        </Link>

        <Link to ="/fido" rel="noreferrer">
        <motion.div className="w-full flex justify-start mt-24 pt-12 border-t-[1px] border-t-grey" variants={riseWithMoreFade}>
            <div className="basis-5/12 flex-col">
                <paragraph className={`${styles.paragraph3}`}>Master's at Umeå Institute of Design</paragraph>
            </div>
            <div className="basis-7/12 flex-col">
            <body3 className={`${styles.body3}`}>I explored how </body3>
            <body2 className={`${styles.body2}`}>autonomy and trust can be balanced in autonomous vehicles</body2>
            <body3 className={`${styles.body3}`}> together with Volvo Cars at Umeå Institute of Design.</body3>
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
            All Rights Reserved, designed and coded by Soheum Hwang
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
            y: 1,
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
        const isInView = useInView(ref, { amount: 0.2, once });
    
        return (
            React.createElement(Wrapper, { className },
                <span className="sr-only">{text}</span>,
                <motion.span
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ staggerChildren: 0.08 }}
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
    export const HoveredText3 = ({ once, text, className, el: Wrapper = "p" }) => {
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
                                    className={`inline-block ${isHovered ? "text-kan" : "text-grey"}`}
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
    export const HoveredText4 = ({ once, text, className, el: Wrapper = "p" }) => {
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
                                    className={`inline-block ${isHovered ? "text-hype" : "text-grey"}`}
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
    export const HoveredText5 = ({ once, text, className, el: Wrapper = "p" }) => {
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
                                    className={`inline-block ${isHovered ? "text-boe" : "text-grey"}`}
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

