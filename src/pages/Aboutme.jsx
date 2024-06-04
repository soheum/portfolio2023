import styles, { layout } from '../style';
import React from 'react';
import '../App.css';
import { useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
var Aboutme_1 = require('../assets/aboutme_1.png');
var Aboutme_2 = require('../assets/aboutme_2.png');
var Aboutme_3 = require('../assets/aboutme_3.png');
var Aboutme_4 = require('../assets/aboutme_4.png');
var Insta = require('../assets/logo-instagram.png');
var Email = require('../assets/at-sign@3x.png');
var LinkedIn = require('../assets/logo-linkedin.png');
var Youtube = require('../assets/youtube_icon.png');

const Aboutme = () => {
    const cursor2 = useRef(null)
    const changePosition = (e) => {
        cursor2.current.style.top = `${e.clientY}px`;
        cursor2.current.style.left = `${e.clientX}px`;
    }
    return (
    <section className="w-full flex justify-start items-start overflow-hidden" onMouseMove={changePosition}>
        <div className="cursor-style2" ref={cursor2} ></div>

    <div className="flex-1 flex-col">
      <div className="semi-title">
        <div className={`${styles.boxWidth}`}>
            <Link to ="/" rel="noreferrer">
            <body1 className={`${styles.body1} + text-grey`}>👈🏻 back<br /><br /></body1>
            </Link>
        </div>
        <div className={`${styles.boxWidth} + one-line`}>
            <h1 className={`${styles.heading1}`}>So more about me...</h1> 
        </div>
        <div class="xl:max-w-[1280px] + mt-2 + w-6/12">
            <body1 className={`${styles.body1}`}>check out my </body1>
            <a href="https://drive.google.com/file/d/1m7AMO-KRl-YbCw8SUdZ_WBI1eJKsY6jk/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <body1 className={`${styles.body1} + blue`} >resume </body1>
            </a>
            <body1 className={`${styles.body1}`} >or email me at </body1>
            <a href={"mailto:soheum@naver.com?body=Hello! Let's grab a coffee"}>
                <body1 className={`${styles.body1} + blue`} >sohheum@gmail.com </body1> 
            </a>
        </div>
        <div className={`${styles.boxWidth} + ${styles.flexCenter} + mt-24`}>
            <div className={`aboutme mr-2`}>
                 <a href={"https://www.youtube.com/@sohmnm"} target="_blank">
                    <img class="rounded-xl mb-2" src={Aboutme_1} alt="aboutme" />
                </a>
            </div>
            <div className={`aboutme mr-2`}>
                <a href={"https://www.youtube.com/@sohmnm"} target="_blank">
                    <img class="rounded-xl mb-2" src={Aboutme_2} alt="aboutme" />
                </a>
            </div> 
            <div className={`aboutme mr-2`}>
                <a href={"https://www.youtube.com/@sohmnm"} target="_blank">
                    <img class="rounded-xl mb-2" src={Aboutme_3} alt="aboutme" />
                </a>
            </div> 
            <div className={`aboutme mr-2`}>
                 <a href={"https://www.youtube.com/@sohmnm"} target="_blank">
                    <img class="rounded-xl mb-2" src={Aboutme_4} alt="aboutme" />
                </a>
            </div> 
        </div>
     </div>

     <div className="xl:max-w-[1280px] + mt-12 + w-8/12">
         {/* <body1 className={`${styles.body1}`}>I'm a Product Designer at Bank of England in London,</body1> <br />
         <body2 className={`${styles.body2}`}>redefining data collection </body2>
         <body1 className={`${styles.body1}`}>by putting humans in the center.</body1><br /><br /> */}
         <body1 className={`${styles.body1}`}>I converge</body1>
         <body2 className={`${styles.body2} + blue`}> AI and humans</body2>
         <body1 className={`${styles.body1}`}> through</body1>
         <body2 className={`${styles.body2}+ blue`}> strategic thinking and visual storytelling. </body2>
         <body1 className={`${styles.body1}`}>By leveraging my digital craft skills, iterative prototyping and analytical thinking, I bring together cross-functional stakeholders.</body1> <br /> <br />

         <body1 className={`${styles.body1}`}>Complex technologies should focus on </body1>
         <body2 className={`${styles.body2}+ blue`}>user needs</body2>
         <body1 className={`${styles.body1}`}>to translate them into high-quality products and services. This is why I believe we should define </body1>
         <body2 className={`${styles.body2}+ blue`}>UX for AI,</body2> 
         <body1 className={`${styles.body1}`}> not AI for UX.</body1> <br /><br />
         <body1 className={`${styles.body1}+ text-light-grey`}>Outside of design, you can find me filming YouTube, jogging at the Strand or getting my handds dirty in front of the ceramic wheel.</body1> <br /><br />
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

export default Aboutme