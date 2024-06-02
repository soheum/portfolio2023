import styles, { layout } from '../style';
import { Routes, Route, Link } from 'react-router-dom';
import React, { useState, useRef } from 'react';
var HyperTitle = require('../assets/Hyper_title.png');
var Hype01 = require('../assets/Hype_overview.png');
var Hype02 = require('../assets/as_is.png');
var Hype02_1 = require('../assets/as_is_bw.jpg');
var Hype03 = require('../assets/opportunity.png');
var Hype03_1 = require('../assets/opportunity_bw.jpg');
var Hype04 = require('../assets/impact.png');
// var Hype04_1 = require('../assets/impact_bw.jpg');
var Hype05 = require('../assets/market_research.png');
var Hype05_1 = require('../assets/market_research_bw.jpg');
var Hype06 = require('../assets/genai_task.png');
var Hype06_1 = require('../assets/genai_task_bw.jpg');
var Hype07 = require('../assets/to_be.png');
var Hype07_1 = require('../assets/to_be_bw.jpg');
var Hype08 = require('../assets/Hype_workshops.png');
var Hype09 = require('../assets/Hype_prototype.jpg');
var Hype10 = require('../assets/Hype01.jpg');
var Hype10_1 = require('../assets/Hype01_bw.jpg');
var Hype11 = require('../assets/Hype02.jpg');
var Hype11_1 = require('../assets/Hype02_bw.jpg');
var Hype12 = require('../assets/Hype03.jpg');
var Hype12_1 = require('../assets/Hype03_bw.jpg');
var Fido06_2 = require('../assets/Fido_06_2.png');
var Fido06_3 = require('../assets/Fido_06_3.png');
var Fido07 = require('../assets/Fido_07.png');
var Insta = require('../assets/logo-instagram.png');
var Email = require('../assets/at-sign@3x.png');
var LinkedIn = require('../assets/logo-linkedin.png');
var Youtube = require('../assets/youtube_icon.png');

const Hyper = () => {

    const cursor2 = useRef(null)
    const changePosition = (e) => {
        cursor2.current.style.top = `${e.clientY}px`;
        cursor2.current.style.left = `${e.clientX}px`;
    }

    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password === 'soheum_projects') {
          setIsAuthenticated(true);
        } else {
          alert('Incorrect password. Please try again.');
        }
      };

      if (isAuthenticated) {
        return (
        <section className="w-full flex justify-start items-start overflow-hidden" onMouseMove={changePosition}>
            {/* <div className="cursor-style-hype" ref={cursor2} ></div> */}
        <div className="flex-1 flex-col">
          <div className="semi-title">
            <div className={`${styles.boxWidth}`}>
            <Link to ="/" rel="noreferrer">
                <body1 className={`${styles.body1} + text-grey`}>👈🏻 back<br /><br /></body1>
            </Link>
            </div>
            <div className="cursor-style-hype" ref={cursor2} ></div>
            <div className={`${styles.boxWidth} + one-line`}>
                <h1 className={`${styles.heading1}`}>Human-centred methodologies in applying AI</h1> 
            </div>
            <div class="xl:max-w-[1280px] + mt-2 + w-7/12">
                <body1 className={`${styles.body1}`}>Throughout my career at McKinsey Design, I applied various </body1>
                <body2 className={`${styles.body2}`}>human-centered methodologies in AI,</body2>
                <body1 className={`${styles.body1}`}> ranging from identifying potential use cases to assessing possible user risks associated with AI implementations. </body1> <br /> <br />
                <body1 className={`${styles.body1}`}>These are some </body1>
                <body1 className={`${styles.body1} + grey`} >examples of the methodologies </body1>
                <body1 className={`${styles.body1}`}>I used while working with clients such as Atos and Natwest, among others. </body1>                
            </div>
            <div class="tm-big">
                <img class="rounded-xl mb-2" src={HyperTitle} alt="Fido" />
            </div>
         </div>
         <div className="content">
            <div className="sub-title tm-medium">
                <p class="number-italics">01 /</p>
                <body1 className={`${styles.body1}`}>How to identify where AI is needed?<br /><br /></body1>
            </div>
            <div className="sub-content w-8/12">
                <paragraph className={`${styles.paragraph}`}>With the buzz surrounding AI, it is easy to apply the technology where it is not genuinley necessary. Therefore, it is crucial to employ a </paragraph>
                <paragraph className={`${styles.paragraph2}`}>user-centered methodology</paragraph>
                <paragraph className={`${styles.paragraph}`}> to evaluate the current scenario and uncover opportunities where AI can enhance the existing experience.</paragraph> <br /><br />
                <paragraph className={`${styles.paragraph}`}>This </paragraph>
                <paragraph className={`${styles.paragraph2}`}>two-week user-centric diagnosis with Atos reimagines their future journey in ticket resolution by incorporating Generative AI. </paragraph>
                <paragraph className={`${styles.paragraph}`}>The aim is to increase efficiency, reduce operational costs, and identify potential business opportunities.</paragraph>
                
            </div>
            <div className="img-title">
                <img class="rounded-xl mt-8" src={Hype01} alt="Overview" />
            </div>
            
            <div className="sub-content mt-8">
                <div className="flex flex-row">
                    <div className="w-4/12">
                        <paragraph className={`${styles.paragraph2}`}>As-is scenario</paragraph> <br />
                        <paragraph className={`${styles.paragraph}`}>After conducting a series of user interviews and workshops, </paragraph>
                        <paragraph className={`${styles.paragraph2}`}>a high-level view of the ticket management process</paragraph>
                        <paragraph className={`${styles.paragraph}`}> in Atos was defined. This process provided an understanding of the current scenario, offering a clear vision of the </paragraph>
                        <paragraph className={`${styles.paragraph2}`}>different users, stakeholders, and steps required to resolve tickets.</paragraph> <br /><br />
                    </div>
                    <div className="img-title w-8/12">
                        <img class="rounded-xl mt-8" src={Hype02} onMouseOver={e => (e.currentTarget.src = Hype02_1)} onMouseOut={e => (e.currentTarget.src = Hype02 )} alt="As-is scenario" />
                    </div>
                </div>
            </div>

            <div className="sub-content mt-12">
            <div className="flex flex-row">
                <div className="w-4/12">
                    <paragraph className={`${styles.paragraph2}`}>Opportunity identification</paragraph> <br />
                    <paragraph className={`${styles.paragraph}`}>The strategic diagnosis of the current scenario revealed </paragraph>
                    <paragraph className={`${styles.paragraph2}`}>new opportunities and addressed challenges experienced by users </paragraph>
                    <paragraph className={`${styles.paragraph}`}>throughout their journey. <br /> Steps where stakeholders encounter difficulties were identified, </paragraph>
                    <paragraph className={`${styles.paragraph2}`}>highlighting areas that could benefit from GenAI solutions.</paragraph>
                    <paragraph className={`${styles.paragraph}`}> Business goals and corresponding KPIs were established for each journey to quantify the impact of the current processes.</paragraph> 
                </div>
                <div className="img-title w-8/12">
                    <img class="rounded-xl mt-8" src={Hype03} onMouseOver={e => (e.currentTarget.src = Hype03_1)} onMouseOut={e => (e.currentTarget.src = Hype03 )} alt="Opportunity identification" />
                </div>
            </div>
            </div>

            <div className="sub-content mt-12">
            <div className="flex flex-row">
                <div className="w-4/12">
                    <paragraph className={`${styles.paragraph2}`}>Impact areas</paragraph> <br />
                    <paragraph className={`${styles.paragraph}`}>Opportunity areas were then grouped into nine main</paragraph>
                    <paragraph className={`${styles.paragraph2}`}> ‘Impact Areas’ </paragraph>
                    <paragraph className={`${styles.paragraph}`}>that can improve and optimize Atos’ ticket resolution operations. These overarching areas which are impactful in improving ticket resolution operations, were </paragraph>
                    <paragraph className={`${styles.paragraph2}`}>prioritized according to goals and KPIs. </paragraph>
                    <paragraph className={`${styles.paragraph}`}>Additionally, the dependencies around similar areas were grouped together.</paragraph> 
                </div>
                <div className="img-title w-8/12">
                    <img class="rounded-xl mt-8" src={Hype04} alt="Impact areas" />
                </div>
            </div>
            </div>

            <div className="sub-content mt-12">
            <div className="flex flex-row">
                <div className="w-4/12">
                    <paragraph className={`${styles.paragraph2}`}>Market research according to impact areas</paragraph> <br />
                    <paragraph className={`${styles.paragraph}`}>Market research was conducted to understand the AI solutions currently offered by software providers. By comparing these new market offerings with Service Now, which Atos currently uses, we gained a general understanding of whether to </paragraph>
                    <paragraph className={`${styles.paragraph2}`}>build a completely new AI service or purchase an off the shelf solution.</paragraph> 
                </div>
                <div className="img-title w-8/12">
                    <img class="rounded-xl mt-8" src={Hype05} onMouseOver={e => (e.currentTarget.src = Hype05_1)} onMouseOut={e => (e.currentTarget.src = Hype05 )} alt="Market research" />
                </div>
            </div>
            </div>

            <div className="sub-content mt-12">
            <div className="flex flex-row">
                <div className="w-4/12">
                    <paragraph className={`${styles.paragraph2}`}>Generative AI task analysis</paragraph> <br />
                    <paragraph className={`${styles.paragraph}`}>Various tasks that GenAI can address, such as summarization or hyper-personalization, were mapped to different impact areas. These tasks are supported by different KPI metrics designed to measure the success of this AI technology when implemented in the future. This approach offers insight into </paragraph>
                    <paragraph className={`${styles.paragraph2}`}>why and how GenAI can change the current scenario,</paragraph>
                    <paragraph className={`${styles.paragraph}`}> along with metrics to evaluate the changes. </paragraph> 
                </div>
                <div className="img-title w-8/12">
                    <img class="rounded-xl mt-8" src={Hype06} onMouseOver={e => (e.currentTarget.src = Hype06_1)} onMouseOut={e => (e.currentTarget.src = Hype06 )} alt="GenAI task analysis" />
                </div>
            </div>
            </div>

            <div className="sub-content mt-12">
            <div className="flex flex-row">
                <div className="w-4/12">
                    <paragraph className={`${styles.paragraph2}`}>To-be scenario</paragraph> <br />
                    <paragraph className={`${styles.paragraph}`}>The ‘To-be scenario’ is a </paragraph>
                    <paragraph className={`${styles.paragraph2}`}>future vision that significantly reduces the complexity </paragraph>
                    <paragraph className={`${styles.paragraph}`}>of the current scenario through the </paragraph>
                    <paragraph className={`${styles.paragraph2}`}>integration of GenAI and machine learning use cases.</paragraph>
                    <paragraph className={`${styles.paragraph}`}> This roadmap includes a detailed sequence of steps for each journey, supported by technologies like GenAI and traditional analytics. A set of KPIs is defined to evaluate the performance of the new GenAI implementation. </paragraph> 
                </div>
                <div className="img-title w-8/12">
                    <img class="rounded-xl mt-8" src={Hype07} onMouseOver={e => (e.currentTarget.src = Hype07_1)} onMouseOut={e => (e.currentTarget.src = Hype07 )} alt="To-be scenario" />
                </div>
            </div>
            </div>

            <div className="sub-title tm-medium">
                <p class="number-italics">02 /</p>
                <body1 className={`${styles.body1}`}>After identification, how do we implement AI in the right way?<br /><br /></body1>
            </div>
            <div className="flex flex-row">
                <div className="w-4/12">
                    <paragraph className={`${styles.paragraph}`}><br />We created a</paragraph>
                    <paragraph className={`${styles.paragraph2}`}> GenAI-driven hyper-personalization proof of concept </paragraph>
                    <paragraph className={`${styles.paragraph}`}>called HyPe for use in retail banking. HyPe customizes content to meet each customer's needs by generating </paragraph>
                    <paragraph className={`${styles.paragraph2}`}>end-to-end marketing materials with customer-specific messages, tone, and content.</paragraph> <br /><br />
                </div>
                <div className="w-8/12">
                    <img class="rounded-xl mt-8" src={Hype09}d alt="GenAI task analysis" />
                </div>
            </div>
           
            <div className="sub-content w-8/12 mt-12">
                <paragraph className={`${styles.paragraph}`}>HyPe was implemented with a customer-centric approach, focusing on </paragraph>
                <paragraph className={`${styles.paragraph2}`}>identifying potential risks </paragraph>
                <paragraph className={`${styles.paragraph}`}>at each stage of the AI lifecycle and finding ways to address them. This was accomplished through a </paragraph>
                <paragraph className={`${styles.paragraph2}`}>series of design thinking workshops</paragraph>
                <paragraph className={`${styles.paragraph}`}> conducted with our team of </paragraph>
                <paragraph className={`${styles.paragraph2}`}>data scientists and data engineers.</paragraph>
            </div>
            <div className="img-title">
                <img class="rounded-xl mt-8" src={Hype08} alt="To-be scenario" />
            </div>

            <div className="sub-content w-8/12 mt-12">
                <paragraph className={`${styles.paragraph2}`}>User's interaction with AI</paragraph> <br />
                <paragraph className={`${styles.paragraph}`}>To identify potential AI risks early in the implementation process, we analyzed </paragraph>
                <paragraph className={`${styles.paragraph2}`}>how users and stakeholders interact with the AI system. </paragraph>
                <paragraph className={`${styles.paragraph}`}>After defining the AI lifecycle  with the data team - from inputting data to generating a personalised message, we identified</paragraph>
                <paragraph className={`${styles.paragraph2}`}> key actors involved at each touch point and their roles. </paragraph> <br /><br />
                <paragraph className={`${styles.paragraph2}`}>New roles, such as validators, </paragraph>
                <paragraph className={`${styles.paragraph}`}>were defined to ensure ethical AI implementation. The responsibilities and interactions of each key actor at every stage were outlined to develop the solution responsibly and tailor it to the teams’ specific workflow. </paragraph>
            </div>
            <div className="img-title">
                <img class="rounded-xl mt-8" src={Hype10} onMouseOver={e => (e.currentTarget.src = Hype10_1)} onMouseOut={e => (e.currentTarget.src = Hype10 )} alt="To-be scenario" />
            </div>

            <div className="sub-content w-8/12 mt-12">
                <paragraph className={`${styles.paragraph2}`}>Questions and risks in AI lifecycle</paragraph> <br />
                <paragraph className={`${styles.paragraph}`}>After gaining an overview of the AI lifecycle, we mapped out </paragraph>
                <paragraph className={`${styles.paragraph2}`}>questions and potential risks at each touch point. </paragraph>
                <paragraph className={`${styles.paragraph}`}>These questions addressed various factors the data team need to consider at each stage, enabling us to </paragraph>
                <paragraph className={`${styles.paragraph2}`}>assess possible risks across multiple dimensions </paragraph>
                <paragraph className={`${styles.paragraph}`}>(e.g. IP infringement, security threats, explainability risks).</paragraph>
            </div>
            <div className="img-title">
                <img class="rounded-xl mt-8" src={Hype11} onMouseOver={e => (e.currentTarget.src = Hype11_1)} onMouseOut={e => (e.currentTarget.src = Hype11 )} alt="To-be scenario" />
            </div>

            <div className="sub-content w-8/12 mt-12">
                <paragraph className={`${styles.paragraph2}`}>Potential AI risks and guardrails</paragraph> <br />
                <paragraph className={`${styles.paragraph}`}>We then grouped these risks into eight categories, which served as </paragraph>
                <paragraph className={`${styles.paragraph2}`}>guidelines for establishing guardrails.</paragraph>
                <paragraph className={`${styles.paragraph}`}> By measuring the risks using different metrics, we were able to create a comprehensive overview to build secure and trustworthy content with AI. </paragraph>
            </div>
            <div className="img-title">
                <img class="rounded-xl mt-8" src={Hype12} onMouseOver={e => (e.currentTarget.src = Hype12_1)} onMouseOut={e => (e.currentTarget.src = Hype12 )} alt="To-be scenario" />
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

      return (
        <div onMouseMove={changePosition}>
            <div className="cursor-style-fido" ref={cursor2} ></div>
            <body1 className={`${styles.body1}`}>Please enter password to access the page: </body1> <br />
            <body1 className={`${styles.body1} + text-light-grey`} id="exp-text1">Password is mentioned in the application form </body1> 
            <form onSubmit={handleSubmit}>
            <div class="sm:col-span-4">
                <div class="mt-6">
                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input type="text" name="username" id="username" autocomplete="username" value={password} onChange={handlePasswordChange} class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="  Enter password here" />
                    </div>
                </div>
            </div>

            <button type="button submit" class="rounded-md bg-white mt-6 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Submit</button>
            </form>
    </div>
      );


    
}

export default Hyper