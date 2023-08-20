import styles, { layout } from '../style';
import React from 'react';
var FidoTitle = require('../assets/Fido_title.png');

const Fido = () => (
    <section className="w-full flex justify-start items-start overflow-hidden">
    <div className="flex-1 flex-col">
      <div className="semi-title">
        <div className={`${styles.boxWidth}`}>
            <body1 className={`${styles.body1} + text-grey`}>👈🏻 back<br /><br /></body1>
        </div>
        <div className={`${styles.boxWidth} + one-line`}>
            <h1 className={`${styles.heading1}`}>FiDO - Enhancing autonomy and trust in autonomous vehicles</h1> 
        </div>
        <div class="xl:max-w-[1280px] + mt-2 + w-6/12">
            <body1 className={`${styles.body1}`}>FiDO is a phy-gital plug-in connected to different semi-autonomous vehicles to enhance trust between the driver and the vehicle's AI system. </body1> <br /> <br />
            <body1 className={`${styles.body1}`}>This is my master's thesis in Interaction Design at Umeå Institute of Design, <a href="https://awards.ixda.org/projects/fido-enhancing-trust-between-driver-and-ai-system-in-semi-autonomous-vehicles">finalist at IxDA 2023,</a> <a href="https://ux-design-awards.com/winners/fido">shortlisted at UX Design Awards</a> and <a href="https://www.artsthread.com/events/globaldesigngraduateshow/digital-visual-communication-film#/project/fido">Global Graduate Show.</a></body1>
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
            <paragraph className={`${styles.paragraph}`}>Despite an increasing number of drivers who are concerned about autonomous vehicle technology, fully autonomous vehicles are continuously developed mainly from a technical perspective. A human-centered perspective that emphasizes how the user feels and perceives technology is lacking in this field.</paragraph>
        </div>
     </div>
    </div>
    </section>
)

export default Fido