import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from "react-icons/md"; 
import "./Value.css"
import data from "../../utils/Accordion"
const Value = () => {

  return (
    <>
      <section className='v-wrapper'>
        <div className="v-container paddings innerWidth flexCenter ">
            {/* left -side */}
            <div className="v-left">
                <div className="img-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>
            {/* right -side */}

            <div className="v-right flexColStart">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give to You</span>
                <span className='secondaryText'>We always ready to help by providing the best services for you.
                <br />
                We believe a good place to live can make your life better
                </span>

                <Accordion className='Accordion' allowMultipleExpanded={false}
                preExpanded={[0]}
                >
                 {
                    data.map((item, i) => (
                       <AccordionItem className='AccordionItem' key={i} uuid={i}>
                        <AccordionItemHeading>
                            <AccordionItemButton className='AccordionButton flexCenter'>
                                <div className="icon flexCenter">{item.icon}</div>
                                <span className="primaryText">{item.heading}</span>
                                <div className="icon flexCenter">
                                <MdOutlineArrowDropDown size={20} />
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <p className='secondaryText'>{item.detail}</p>
                        </AccordionItemPanel>
                       </AccordionItem>
                    ))
            }
                   
                </Accordion>

            </div>

        </div>

      </section>
    </>

  )
}

export default Value