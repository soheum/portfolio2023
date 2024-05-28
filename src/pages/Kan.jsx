import styles, { layout } from '../style';
import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import { useRef } from 'react';
import Kanvideo from '../assets/Kan-recordings.mp4';
import Kanvideo2 from '../assets/Kan_website_mockup.mp4';
var KanTitle = require('../assets/Kan_title.png');
var Kan01 = require('../assets/Kan_01.png');
var Kan03_1 = require('../assets/Kan03_1.png');
var Kan03_2 = require('../assets/Kan03_2.png');
var Kan04 = require('../assets/Kan_04.png');
var Fido05 = require('../assets/Fido_05.png');
var Fido06 = require('../assets/Fido_06.png');
var Fido06_2 = require('../assets/Fido_06_2.png');
var Fido06_3 = require('../assets/Fido_06_3.png');
var Fido07 = require('../assets/Fido_07.png');
var Insta = require('../assets/logo-instagram.png');
var Email = require('../assets/at-sign@3x.png');
var LinkedIn = require('../assets/logo-linkedin.png')

const Kan = () => {
    const cursor2 = useRef(null)
    const changePosition = (e) => {
        cursor2.current.style.top = `${e.clientY}px`;
        cursor2.current.style.left = `${e.clientX}px`;
    }
    return(
    <section className="w-full flex justify-start items-start overflow-hidden" onMouseMove={changePosition}>
    <div className="cursor-style-kan" ref={cursor2} ></div>
    <div className="flex-1 flex-col">
      <div className="semi-title">
        <div className={`${styles.boxWidth}`}>
        <Link to ="/" rel="noreferrer">
            <body1 className={`${styles.body1} + text-grey`}>👈🏻 back<br /><br /></body1>
        </Link>
        </div>
        <div className={`${styles.boxWidth} + one-line`}>
            <h1 className={`${styles.heading1}`}>Kan - Digital financial health service for employees</h1> 
        </div>
        <div class="xl:max-w-[1280px] + mt-2 + w-6/12">
            <body1 className={`${styles.body1}`}>Kan promotes </body1>
            <body2 className={`${styles.body2}`}>financial wellbeing for employees </body2>
            <body1 className={`${styles.body1}`}>through advisor sessions, refinancing, budget planning etc. </body1> <br /> <br />
            <body1 className={`${styles.body1}`}>From </body1>
            <body1 className={`${styles.body1} + grey`} ><a href="https://kan.no/" target="_blank">MVP to north star,</a> </body1>
            <body2 className={`${styles.body2}`}> I identified user needs, iterated the design and shipped it live</body2>
            <body1 className={`${styles.body1}`}> together with product managers, business analysts and developers</body1>
        </div>
        <div class="tm-big">
            <img class="rounded-xl mb-2" src={KanTitle} alt="Fido" />
        </div>
     </div>
     <div className="content">
        <div className="sub-title tm-medium">
            <p class="number-italics">01 /</p>
            <body1 className={`${styles.body1}`}>What is Kan?<br /><br /></body1>
        </div>
        <div className="sub-content w-8/12">
            <paragraph className={`${styles.paragraph}`}>Kan is an employee benefit in Norway focused on financial health. With Kan’s mobile app, employees can take better control of their finances through budget planning, debt management, refinancing and advisor sessions. </paragraph>
        </div>
        <div className="img-title">
            <img class="rounded-xl mt-8" src={Kan01} alt="Kan01" />
        </div>

        <div className="sub-title tm-medium">
            <p class="number-italics">02 /</p>
            <body1 className={`${styles.body1}`}>So what did you build and ship in Kan?<br /><br /></body1>
        </div>
        <div className="img-title videomask">
            <video src={Kanvideo} autoPlay muted loop />
        </div>
        <div className="sub-content w-8/12">
            <paragraph className={`${styles.paragraph2}`}><br />Mobile app - Spend Overview feature, <br /></paragraph>
            <paragraph className={`${styles.paragraph}`}>I was responsible for the Spend Overview feature, which helps users to manage their monthly expenses. This enables users to set budgets, categorize transactions and monitor their total savings and debt effectively. Different categories were sourced through an integration with Tink, an open banking platform.</paragraph>
        </div>
        <div className="img-title mt-16 videomask">
            <video src={Kanvideo2} autoPlay muted loop />
        </div>
        <div className="sub-content w-8/12">
            <paragraph className={`${styles.paragraph2}`}><br />Kan.no website <br /></paragraph>
            <paragraph className={`${styles.paragraph}`}>Kan’s website is the primary interface for both employers and employees, as users were directed to this page from sales materials like flyers or posters. Since this was crucial for generating sales leads, the website had to effectively communicate Kan’s value proposition to employers and convince them to use Kan.</paragraph>
        </div>
        <div className={`${styles.boxWidth} + mt-6`}>
        <a href="https://kan.no/" target="_blank">
            <body1 className={`${styles.body1} + text-light-grey`}>👉🏻 chek out Kan.no here</body1>
        </a>
        </div>

        <div className="sub-title tm-medium">
            <p class="number-italics">03 /</p>
            <body1 className={`${styles.body1}`}>And what was the process?<br /><br /></body1>
        </div>
        <div className="img-title">
            <img class="rounded-xl" src={Kan03_1} alt="Kan01" />
        </div>
        <div className="sub-content w-8/12">
            <paragraph className={`${styles.paragraph2}`}><br />Mobile app - Spend Overview feature, <br /></paragraph>
            <paragraph className={`${styles.paragraph}`}>I began by conducting qualitative user interviews with both current and prospective Kan users to identify their needs. Then I collaborated with the Product and Development team to outline the scope for each sprint, considering factors like time, development resources and third-party integrations like Tink. Working closely with developers, I designed and refined the features, establishing data visualization guidelines and defining the logic for insight cards. </paragraph>
        </div>
        <div className="img-title mt-16">
            <img class="rounded-xl mt-8" src={Kan03_2} alt="Kan01" />
        </div>
        <div className="sub-content w-8/12">
            <paragraph className={`${styles.paragraph2}`}><br />Kan.no website <br /></paragraph>
            <paragraph className={`${styles.paragraph}`}>In developing Kan's website, I combined qualitative interviews with employers and employees with quantitative Hotjar data to understand user’s perceptions and expectations of Kan. Market research helped me identify common patterns that were used in competitors that provide employee benefits. 
<br />Leveraging this, I tailored the website to serve both users - employees and employers. For employers, Kan’s potential impact and the benefits it will bring to the company were emphasized, whereas for employees, specific features of Kan were explained in detail.  </paragraph>
        </div>
        
        

        <div className="sub-title tm-medium">
            <p class="number-italics">04 /</p>
            <body1 className={`${styles.body1}`}>In the end... what did you learn?<br /><br /></body1>
        </div>
        <div className="img-title">
            <img class="rounded-xl" src={Kan04} alt="Kan04" />
        </div>
        <div className="sub-content w-8/12">
            <paragraph className={`${styles.paragraph2}`}><br />Speaking different languages, but with a same goal in mind<br /></paragraph>
            <paragraph className={`${styles.paragraph}`}>The perks of working in a product-focused team is the engagement with teams that have diverse perspectives across disciplines. In my experience, designers prioritize visuals and users, product team focus on business goals and developers emphatize practicality and implementation. Despite these differences, all teams share a common objective: driving growth. 
<br />Collaborating with individuals from various backgrounds challenged me to think creatively and broaden my perspective. It taught me effective communication and methods on pursuing user-centric values when necessary. </paragraph>
        </div>
        <div className="sub-content mt-8 w-8/12">
            <paragraph className={`${styles.paragraph2}`}><br />Focus on essentials when showing data to consumers<br /></paragraph>
            <paragraph className={`${styles.paragraph}`}>As a financial service, Kan used different visualisation techniques, such as pie graphs, to present transactional data. Contrary to dashboards for B2B users, I learned the significance of simplifying visuals for consumer-facing services by highlighting essentials and eliminating additional details. 
<br />To prioritize the core of the data, I experimented with different methods of surfacing insights sand representing them visually. This process of translating and extracting user-centered values from numerical data aligned with my personal values of a product designer. </paragraph>
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
            <a href={"mailto:soheum@naver.com?body=Hello! Let's grab a coffee"}>
            <img class="w-[1.25rem] h-[1.25rem] object-contain cursor-pointer" src={Email} />
            </a>
        </div>
      </div>
    </div>

    
    </section>
)
}
export default Kan