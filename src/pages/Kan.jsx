import styles, { layout } from '../style';
import { Routes, Route, Link } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import Kanvideo from '../assets/Kan-recordings.mp4';
import Kanvideo2 from '../assets/Kan_website_mockup.mp4';
import ScrollToTop from './ScrollToTop';
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
    return(
    <section className="w-full flex justify-start items-start overflow-hidden" onMouseMove={changePosition}>
        <ScrollToTop />
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
            <paragraph className={`${styles.paragraph}`}>Kan is an </paragraph>
            <paragraph className={`${styles.paragraph2}`}>employee benefit in Norway focused on financial health.</paragraph>
            <paragraph className={`${styles.paragraph}`}> With Kan’s mobile app, employees can take better control of their finances through </paragraph>
            <paragraph className={`${styles.paragraph2}`}>budget planning, debt management, refinancing and advisor sessions. </paragraph>
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
            <paragraph className={`${styles.paragraph}`}>I was responsible for the Spend Overview feature, which helps users to </paragraph>
            <paragraph className={`${styles.paragraph2}`}>manage their monthly expenses. </paragraph>
            <paragraph className={`${styles.paragraph}`}>This enables users to </paragraph>
            <paragraph className={`${styles.paragraph2}`}>set budgets, categorize transactions and monitor their total savings and debt effectively.</paragraph>
            <paragraph className={`${styles.paragraph}`}> Different categories were sourced through an integration with Tink, an open banking platform.</paragraph>
        </div>
        <div className="img-title mt-16 videomask">
            <video src={Kanvideo2} autoPlay muted loop />
        </div>
        <div className="sub-content w-8/12">
            <paragraph className={`${styles.paragraph2}`}><br />Kan.no website <br /></paragraph>
            <paragraph className={`${styles.paragraph}`}>Kan’s website is the primary interface for both </paragraph>
            <paragraph className={`${styles.paragraph2}`}>employers and employees, </paragraph>
            <paragraph className={`${styles.paragraph}`}>as users were directed to this page from sales materials like flyers or posters. Since this was crucial for generating sales leads, the website had to </paragraph>
            <paragraph className={`${styles.paragraph2}`}>effectively communicate Kan’s value proposition</paragraph>
            <paragraph className={`${styles.paragraph}`}> to employers and convince them to use Kan.</paragraph>
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
            <paragraph className={`${styles.paragraph}`}>I began by conducting </paragraph>
            <paragraph className={`${styles.paragraph2}`}>qualitative user interviews </paragraph>
            <paragraph className={`${styles.paragraph}`}>with both current and prospective Kan users to identify their needs. Then I collaborated with the Product and Development team to </paragraph>
            <paragraph className={`${styles.paragraph2}`}>outline the scope for each sprint, </paragraph>
            <paragraph className={`${styles.paragraph}`}>considering factors like time, development resources and third-party integrations like Tink. </paragraph>
            <paragraph className={`${styles.paragraph2}`}>Working closely with developers,</paragraph>
            <paragraph className={`${styles.paragraph}`}> I designed and refined the features, establishing data visualization guidelines and defining the logic for insight cards. </paragraph>
        </div>
        <div className="img-title mt-16">
            <img class="rounded-xl mt-8" src={Kan03_2} alt="Kan01" />
        </div>
        <div className="sub-content w-8/12">
            <paragraph className={`${styles.paragraph2}`}><br />Kan.no website <br /></paragraph>
            <paragraph className={`${styles.paragraph}`}>In developing Kan's website, I combined </paragraph>
            <paragraph className={`${styles.paragraph2}`}>qualitative interviews </paragraph>
            <paragraph className={`${styles.paragraph}`}>with employers and employees with </paragraph>
            <paragraph className={`${styles.paragraph2}`}>quantitative Hotjar data </paragraph>
            <paragraph className={`${styles.paragraph}`}>to understand user’s perceptions and expectations of Kan. </paragraph>
            <paragraph className={`${styles.paragraph2}`}>Market research </paragraph>
            <paragraph className={`${styles.paragraph}`}>helped me identify common patterns that were used in competitors that provide employee benefits. 
<br />Leveraging this, I tailored the website to serve </paragraph>
<paragraph className={`${styles.paragraph2}`}>both users - employees and employers. </paragraph>
<paragraph className={`${styles.paragraph}`}>For employers, Kan’s potential impact and the benefits it will bring to the company were emphasized, whereas for employees, specific features of Kan were explained in detail.  </paragraph>
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
            <paragraph className={`${styles.paragraph}`}>The perks of working in a product-focused team is the </paragraph>
            <paragraph className={`${styles.paragraph2}`}>engagement with teams that have diverse perspectives across disciplines.</paragraph>
            <paragraph className={`${styles.paragraph}`}> In my experience, designers prioritize visuals and users, product team focus on business goals and developers emphatize practicality and implementation. Despite these differences, all teams share a common objective: driving growth. 
<br />Collaborating with individuals from various backgrounds challenged me to </paragraph>
<paragraph className={`${styles.paragraph2}`}>think creatively and broaden my perspective. </paragraph>
<paragraph className={`${styles.paragraph}`}>It taught me </paragraph>
<paragraph className={`${styles.paragraph2}`}>effective communication </paragraph>
<paragraph className={`${styles.paragraph}`}>and methods on </paragraph>
<paragraph className={`${styles.paragraph2}`}>pursuing user-centric values </paragraph>
<paragraph className={`${styles.paragraph}`}>when necessary. </paragraph>
        </div>
        <div className="sub-content mt-8 w-8/12">
            <paragraph className={`${styles.paragraph2}`}><br />Focus on essentials when showing data to consumers<br /></paragraph>
            <paragraph className={`${styles.paragraph}`}>As a financial service, Kan used different visualisation techniques, such as pie graphs, to present transactional data. Contrary to dashboards for B2B users, I learned the </paragraph>
            <paragraph className={`${styles.paragraph2}`}>significance of simplifying visuals for consumer-facing services</paragraph>
            <paragraph className={`${styles.paragraph}`}> by highlighting essentials and eliminating additional details. 
<br />To prioritize the core of the data, I experimented with different methods of surfacing insights and representing them visually. This process of </paragraph>
<paragraph className={`${styles.paragraph2}`}>translating and extracting user-centered values from numerical data </paragraph>
<paragraph className={`${styles.paragraph}`}>aligned with my personal values of a product designer. </paragraph>
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

return (
  <div onMouseMove={changePosition}>
    <ScrollToTop />
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
export default Kan