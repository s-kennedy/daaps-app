import { useState, useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import Prompts from '../Prompts'
import Directions from './Directions'
import About from './About'
import HowTo from './HowTo'
import Journeys from './Journeys'
import Loading from './Loading'
import DisclaimerModal from '../DisclaimerModal'

const CustomAccordionItem = ({ uuid, currentItemUid, title, children }) => {
  const selected = currentItemUid.includes(uuid)

  return(
    <AccordionItem uuid={uuid} className={`flex flex-col sm:flex-row ${selected ? "flex-grow overflow-hidden sm:border-l border-black" : ""}`} dangerouslySetExpanded={selected}>
      <AccordionItemHeading className={`flex sm:flex-grow relative px-5 py-2 sm:p-5 border-0 border-t sm:border-t-0 sm:border-l border-black ${selected ? "sm:hidden" : ""}`}>
        <AccordionItemButton className={`flex flex-grow rotate-tab-title ${selected ? "sm:hidden" : "block"}`}>
          <div className="text-xl">{title}</div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel className="flex-grow fade-in overflow-auto">
        {children}
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default function App({ prompts }) {
  const [currentItemUid, setCurrentItemUid] = useState(['directions'])
  const [showDisclaimer, setShowDisclaimer] = useState()
  const [showApp, setShowApp] = useState(false)

  const handleChange = uid => {
    console.log({ uid })
    if (uid !== currentItemUid) {
      setCurrentItemUid(uid)
    }
  }

  const handleReadMore = () => {
    setCurrentItemUid(['howto'])
  }

  const agreeToDisclaimer = () => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('daaps-disclaimer', 'true')
    }
    setShowDisclaimer(false)
  }

  const closeDisclaimer = () => {
    setShowDisclaimer(false)
  }

  useEffect(() => {
    if (!showApp) {
      setTimeout(() => setShowApp(true), 2000)
    }
  }, [showApp])

  useEffect(() => {
    let hasAgreedToDisclaimer = false;

    if (typeof localStorage !== 'undefined') {
      hasAgreedToDisclaimer = localStorage.getItem('daaps-disclaimer') === 'true'
    }

    if (!hasAgreedToDisclaimer) {
      setShowDisclaimer(true)
    }
  })

  if (!showApp || showDisclaimer) {
    return (
      <div>
        <Loading />
        { showDisclaimer && <DisclaimerModal agreeToDisclaimer={agreeToDisclaimer} handleClose={closeDisclaimer} /> }
      </div>
    )
  }

  return (
    <>
    <div className="bg-white w-full flex max-h-screen overflow-hidden">
      <Accordion className="flex flex-col sm:flex-row flex-grow" onChange={handleChange} preExpanded={["directions"]}>

        <AccordionItem uuid="directions" className={`sm:flex ${currentItemUid.includes("directions") ? "flex-grow" : ""}`} dangerouslySetExpanded={currentItemUid.includes("directions")}>
          <AccordionItemHeading className="flex flex-grow-0 sm:flex-grow relative px-5 py-2 sm:p-5 border-0 border-black">
            <AccordionItemButton className={`flex flex-grow rotate-tab-title ${currentItemUid.includes("directions") ? "sm:hidden" : "block"}`}>
              <div className="text-xl">PLAY!</div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="flex flex-grow fixed w-full h-full inset-0 sm:relative bg-white z-10">
            <Directions prompts={prompts} handleReadMore={handleReadMore} showDisclaimer={showDisclaimer} />
          </AccordionItemPanel>
        </AccordionItem>

        <CustomAccordionItem uuid="howto" currentItemUid={currentItemUid} title="How To Use">
          <HowTo />
        </CustomAccordionItem>

        <CustomAccordionItem uuid="journeys" currentItemUid={currentItemUid} title="Journeys">
          <Journeys />
        </CustomAccordionItem>

        <CustomAccordionItem uuid="about" currentItemUid={currentItemUid} title="About">
          <About />
        </CustomAccordionItem>
      </Accordion>
    </div>
    { showDisclaimer && <DisclaimerModal agreeToDisclaimer={agreeToDisclaimer} handleClose={closeDisclaimer} /> }
    </>
  )
}
