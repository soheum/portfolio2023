import styles, { layout } from '../style';
import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import { useRef } from 'react';
var FidoTitle = require('../assets/Fido_title.png');
var Fido01 = require('../assets/Fido_01.png');
var Fido02 = require('../assets/Fido_02.png');
var Fido022 = require('../assets/Fido_022.png');
var Fido03_1 = require('../assets/Fido_03_1.png');
var Fido03_2 = require('../assets/Fido_03_2.png');
var Fido03_3 = require('../assets/Fido_03_3.png');
var Fido03_4 = require('../assets/Fido_03_4.png');
var Fido03_5 = require('../assets/Fido_03_5.png');
var Fido03_6 = require('../assets/Fido_03_6.png');
var Fido04 = require('../assets/Fido_04.png');
var Fido05 = require('../assets/Fido_05.png');
var Fido06 = require('../assets/Fido_06.png');
var Fido06_2 = require('../assets/Fido_06_2.png');
var Fido06_3 = require('../assets/Fido_06_3.png');
var Fido07 = require('../assets/Fido_07.png');
var Insta = require('../assets/logo-instagram.png');
var Email = require('../assets/at-sign@3x.png');
var LinkedIn = require('../assets/logo-linkedin.png');
var Youtube = require('../assets/youtube_icon.png');

const Fido = () => {
    const cursor2 = useRef(null)
    const changePosition = (e) => {
        cursor2.current.style.top = `${e.clientY}px`;
        cursor2.current.style.left = `${e.clientX}px`;
    }
    return(
    <section className="w-full flex justify-start items-start overflow-hidden" onMouseMove={changePosition}>
    <div className="cursor-style-fido" ref={cursor2} ></div>
    <div className="flex-1 flex-col">
      <div className="semi-title">
        <div className={`${styles.boxWidth}`}>
        <Link to ="/" rel="noreferrer">
            <body1 className={`${styles.body1} + text-grey`}>👈🏻 back<br /><br /></body1>
        </Link>
        </div>
        <div className={`${styles.boxWidth} + one-line`}>
            <h1 className={`${styles.heading1}`}>FiDO - Enhancing autonomy and trust in autonomous vehicles</h1> 
        </div>
        <div class="xl:max-w-[1280px] + mt-2 + w-6/12">
            <body1 className={`${styles.body1}`}>FiDO is a phy-gital plug-in connected to different semi-autonomous vehicles to enhance trust between the driver and the vehicle's AI system. </body1> <br /> <br />
            <body1 className={`${styles.body1}`}>This is </body1>
            <body1 className={`${styles.body1} + grey`} ><a href="https://vimeo.com/738163737">my master's thesis in Interaction Design at Umeå Institute of Design,</a> </body1>
            <body1 className={`${styles.body1} + grey`}><a href="https://awards.ixda.org/projects/fido-enhancing-trust-between-driver-and-ai-system-in-semi-autonomous-vehicles">finalist at IxDA 2023,</a> </body1>
            <body1 className={`${styles.body1} + grey`}><a href="https://ux-design-awards.com/winners/fido">shortlisted at UX Design Awards</a> </body1>
            <body1 className={`${styles.body1}`}>and </body1>
            <body1 className={`${styles.body1} + grey`}><a href="https://www.artsthread.com/events/globaldesigngraduateshow/digital-visual-communication-film#/project/fido">Global Graduate Show.</a></body1>
        </div>
        <div class="tm-big">
            <img class="rounded-xl mb-2" src={FidoTitle} alt="Fido" />
        </div>
     </div>
     <div className="content">
        <div className="sub-title tm-medium">
            <p class="number-italics">01 /</p>
            <body1 className={`${styles.body1}`}>Why is trust so important?<br /><br /></body1>
        </div>
        <div className="sub-content w-8/12">
            <paragraph className={`${styles.paragraph}`}>Despite the growing number of drivers concerned about autonomous vehicle technology, fully autonomous vehicles are continually being developed </paragraph>
            <paragraph className={`${styles.paragraph2}`}>primarily from a technical perspective. </paragraph>
            <paragraph className={`${styles.paragraph}`}>What is lacking in this field is a </paragraph>
            <paragraph className={`${styles.paragraph2}`}>human-centered perspective </paragraph>
            <paragraph className={`${styles.paragraph}`}>that emphasizes how users feel and perceive the technology.</paragraph>
        </div>
        <div className="img-title">
            <img class="rounded-xl mt-8" src={Fido01} alt="Fido01" />
        </div>

        <div className="sub-title tm-medium">
            <p class="number-italics">02 /</p>
            <body1 className={`${styles.body1}`}>How does FiDO build trust?<br /><br /></body1>
        </div>
        <div className="sub-content w-8/12">
            <paragraph className={`${styles.paragraph}`}>FiDO collects data from the driver, offers recommendations, and enhances itself based on received feedback. Drivers can </paragraph>
            <paragraph className={`${styles.paragraph2}`}>physically rotate the device</paragraph>
            <paragraph className={`${styles.paragraph}`}> to provide either positive or negative feedback, allowing FiDO to </paragraph>
            <paragraph className={`${styles.paragraph2}`}>learn and refine its algorithm.</paragraph>
        </div>
        <div className="img-title">
            <img class="rounded-xl mt-8" src={Fido02} alt="Fido01" />
        </div>
        <div className="sub-content w-8/12">
            <paragraph className={`${styles.paragraph}`}><br /><br />Furthermore, FiDO assists in </paragraph>
            <paragraph className={`${styles.paragraph2}`}>enhancing the vehicle's autonomous driving algorithm </paragraph>
            <paragraph className={`${styles.paragraph}`}>by collecting additional data in collaboration with the driver. FiDO is utilized in vehicles ranging from conditional to full automation, and, based on the driver's trust level, </paragraph>
            <paragraph className={`${styles.paragraph2}`}>the driver and FiDO work together </paragraph>
            <paragraph className={`${styles.paragraph}`}>to develop a fully autonomous vehicle.</paragraph>
        </div>
        <div className="img-title">
            <img class="rounded-xl mt-8" src={Fido022} alt="Fido01" />
        </div>

        <div className="sub-title tm-medium">
            <p class="number-italics">03 /</p>
            <body1 className={`${styles.body1}`}>Tell me about the features<br /><br /></body1>
        </div>
        <div className="sub-content w-8/12">
            <paragraph className={`${styles.paragraph2}`}>FiDO is honest, </paragraph>
            <paragraph className={`${styles.paragraph}`}><br/>visually representing the </paragraph>
            <paragraph className={`${styles.paragraph2}`}>operation of the vehicle's AI algorithm through color gradients. </paragraph>
            <paragraph className={`${styles.paragraph}`}>A digital screen positioned on top of FiDO displays these visual color gradients. <br /> FiDO appears gray when collecting data, transitions to a blend of blue and purple while providing recommendations to the driver, and, when the driver rotates it, displays purple for positive feedback and blue for negative feedback.</paragraph>
        </div>
        <div className="img-title flex gap-2.5">
            <img class="rounded-xl mt-8 w-4/12" src={Fido03_1} alt="Fido01" />
            <img class="rounded-xl mt-8 w-4/12" src={Fido03_2} alt="Fido01" />
            <img class="rounded-xl mt-8 w-4/12" src={Fido03_3} alt="Fido01" />
        </div>
        <div className="sub-content w-8/12">
            <paragraph className={`${styles.paragraph2}`}><br /> <br />FiDO is graspable,</paragraph>
            <paragraph className={`${styles.paragraph}`}><br/> the physical act of </paragraph>
            <paragraph className={`${styles.paragraph2}`}>rotating FiDO after receiving a recommendation </paragraph>
            <paragraph className={`${styles.paragraph}`}>strengthens the user's connection to the otherwise</paragraph>
            <paragraph className={`${styles.paragraph2}`}> abstract and intangible AI algorithm. </paragraph>
            <paragraph className={`${styles.paragraph}`}>Unlike voice interfaces and digital screens that other automobile companies are prioritizing, this project is driven by the results of user tests, which have indicated a </paragraph>
            <paragraph className={`${styles.paragraph2}`}>strong preference for physical buttons</paragraph>
            <paragraph className={`${styles.paragraph}`}> in future automobiles.</paragraph>
        </div>
        <div className="img-title flex gap-2.5">
            <img class="rounded-xl mt-8 w-8/12" src={Fido03_4} alt="Fido01" />
            <img class="rounded-xl mt-8 w-4/12" src={Fido03_5} alt="Fido01" />
        </div>
        <div className="sub-content w-8/12">
            <paragraph className={`${styles.paragraph2}`}><br /> <br />FiDO is creates human intuition,</paragraph>
            <paragraph className={`${styles.paragraph}`}><br/> particularly through the 'Dialogue Sphere' featured in its app. The app </paragraph>
            <paragraph className={`${styles.paragraph2}`}>visually represents the relationship between FiDO and the driver using color gradients. </paragraph>
            <paragraph className={`${styles.paragraph}`}>If the driver frequently rotates FiDO to the right, the sphere displays more purple gradients; conversely, it shows more blue gradients when rotated to the left. This </paragraph>
            <paragraph className={`${styles.paragraph2}`}>poetic representation lays the foundation for drivers to develop a sense of human intuition,</paragraph>
            <paragraph className={`${styles.paragraph}`}> enabling them to establish a connection and intuitive understanding of the vehicle.</paragraph>
        </div>
        <div className="img-title flex gap-2.5">
            <img class="rounded-xl mt-8" src={Fido03_6} alt="Fido01" />
        </div>

        <div className="sub-title tm-medium">
            <p class="number-italics">04 /</p>
            <body1 className={`${styles.body1}`}>Then, how did you conduct research?<br /><br /></body1>
        </div>
        <div className="sub-content w-8/12">
            <paragraph className={`${styles.paragraph}`}>Three different research methodologies—</paragraph>
            <paragraph className={`${styles.paragraph2}`}>participatory design, analogy methods, and expert interaction—</paragraph>
            <paragraph className={`${styles.paragraph}`}>were employed to address two main questions. These methodologies prioritize understanding how users perceive automation technology, enable them to envision a fully autonomous vehicle using various analogies, and provide insights into the mobility industry through interactions with Volvo Cars experts.</paragraph>
        </div>
        <div className="img-title">
            <img class="rounded-xl mt-8" src={Fido04} alt="Fido01" />
        </div>

        <div className="sub-title tm-medium">
            <p class="number-italics">05 /</p>
            <body1 className={`${styles.body1}`}>What were the results of the research?<br /><br /></body1>
        </div>
        <div className="sub-content w-8/12">
            <paragraph className={`${styles.paragraph}`}>After the research phase, I formulated </paragraph>
            <paragraph className={`${styles.paragraph2}`}>my personal definition of trust, </paragraph>
            <paragraph className={`${styles.paragraph}`}>which served as a metric to assess trust within this project.</paragraph>
        </div>
        <div className="img-title">
            <img class="rounded-xl mt-8" src={Fido05} alt="Fido01" />
        </div>

        <div className="sub-title tm-medium">
            <p class="number-italics">06 /</p>
            <body1 className={`${styles.body1}`}>How did you include users during the research?<br /><br /></body1>
        </div>
        <div className="sub-content w-8/12">
            <paragraph className={`${styles.paragraph}`}>Workshops enabled the project to explore participants' perceptions of autonomous vehicles, brainstorm ideas, and validate various concepts through an iterative process. <br /><br /> </paragraph>
            <paragraph className={`${styles.paragraph2}`}>“Trust Decks”</paragraph>
            <paragraph className={`${styles.paragraph}`}> consolidated research findings defining six qualities necessary for trust between a user and an object. To emphasize trust with an object, the movie character </paragraph>
            <paragraph className={`${styles.paragraph2}`}>Baymax from Big Hero 6 served as an analogy </paragraph>
            <paragraph className={`${styles.paragraph}`}>to an autonomous vehicle. These decks were subsequently utilized as props in various workshops</paragraph>
        </div>
        <div className="img-title">
            <img class="rounded-xl mt-8" src={Fido06} alt="Fido06" />
        </div>
        <div className="sub-content w-8/12">
            <paragraph className={`${styles.paragraph2}`}><br /> <br />Mobility experts from Volvo Cars </paragraph>
            <paragraph className={`${styles.paragraph}`}>were involved in the process, along with six participants from the UX design department who tested a </paragraph>
            <paragraph className={`${styles.paragraph2}`}>low-fidelity paper prototype called the 'Trust Prop' </paragraph>
            <paragraph className={`${styles.paragraph}`}>in Volvo Cars office's prototyping rig. This prototype was developed based on a workshop I conducted with users and served as a guideline to encourage participants to think outside the box, reminding them that their designs and ideas don't always have to be strictly applicable or practical.</paragraph>
        </div>
        <div className="img-title flex gap-2.5">
            <img class="rounded-xl mt-8" src={Fido06_2} alt="Fido01" />
        </div>
        <div className="sub-content w-8/12">
            <paragraph className={`${styles.paragraph}`}><br /> <br />Finally, users participated in both ideation and validation stages. Workshops and user testing sessions offered </paragraph>
            <paragraph className={`${styles.paragraph2}`}>genuine insights into users' perceptions of autonomous vehicles. </paragraph>
            <paragraph className={`${styles.paragraph}`}>Early-stage prototypes were tested inside a vehicle to validate two distinct concept directions, gauging the emotional connections that each concept fostered with users.</paragraph>
        </div>
        <div className="img-title flex gap-2.5">
            <img class="rounded-xl mt-8" src={Fido06_3} alt="Fido01" />
        </div>

        <div className="sub-title tm-medium">
            <p class="number-italics">07 /</p>
            <body1 className={`${styles.body1}`}>Lastly, what did you learn?<br /><br /></body1>
        </div>
        <div className="sub-content w-8/12">
            <paragraph className={`${styles.paragraph}`}>Explainable AI clarifies how intelligent systems work and produce valid reasoning to enhance trust. This is mostly used by developers to improve AI performance rather than focusing on user experience. With FiDO, I explored </paragraph>
            <paragraph className={`${styles.paragraph2}`}>making AI more understandable for end users by balancing feature transparency and interpretations. </paragraph>
            <paragraph className={`${styles.paragraph}`}>Translating AI functionality into user-friendly features was a key role of interaction design in the world of technology. <br/> <br/> </paragraph>
            <paragraph className={`${styles.paragraph2}`}>Designing within a vehicle </paragraph>
            <paragraph className={`${styles.paragraph}`}>introduced complexity and prompted me to explore the aesthetics of the driving environment. Unlike mobile apps or websites, automotive human-machine interface design posed new challenges, including considerations of color contrast, text size, distance from the driver's seat, and cognitive load while driving. Additionally, accounting for </paragraph>
            <paragraph className={`${styles.paragraph2}`}>future semi-autonomous driving settings </paragraph>
            <paragraph className={`${styles.paragraph}`}>prompted a re-evaluation of UI guidelines, encouraging a fresh perspective on design components.</paragraph>
        </div>
        <div className="img-title">
            <img class="rounded-xl mt-8" src={Fido07} alt="Fido01" />
        </div>
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
}

export default Fido