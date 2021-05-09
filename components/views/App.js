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

export default function App({ prompts }) {
  const [currentItemUid, setCurrentItemUid] = useState(['directions'])
  const [preExpanded, setPreExpanded] = useState(['directions'])
  const [showDisclaimer, setShowDisclaimer] = useState()
  const [showApp, setShowApp] = useState(false)

  const handleChange = uid => {
    console.log({ uid })
    if (uid !== currentItemUid) {
      setCurrentItemUid(uid)
    }
  }

  const handleReadMore = () => {
    setCurrentItemUid(['about'])
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
    <Tabs defaultFocus={true} className="primary-tabs w-full bg-white sm:hidden">
      <TabList className="bottom-0 absolute z-10 w-full flex justify-center">
        <div className="container mx-auto">
          <Tab className="m-5 my-8 ml-auto bg-white text-green border border-green w-24 p-2 flex justify-center btn font-serif fixed right-0 bottom-0" selectedClassName="hidden">PLAY!</Tab>
          <Tab className="m-5 my-8 mr-auto bg-white text-green border border-green w-24 p-2 flex justify-center btn" selectedClassName="hidden">Read More</Tab>
        </div>
      </TabList>

      <TabPanel className="tab-panel flex-grow flex justify-center" selectedClassName="h-full">
        <Directions prompts={prompts} handleReadMore={handleReadMore} showDisclaimer={showDisclaimer} />
      </TabPanel>

      <TabPanel>
        <Tabs defaultFocus={true} className="secondary-tabs">
          <TabList className="container mx-auto flex justify-around">
            <Tab className="p-2 transition-all text-lg cursor-pointer font-sans-bold flex-grow flex justify-center bg-black bg-opacity-5 shadow-tabs" selectedClassName="border-0 bg-white shadow-none">How To Use</Tab>
            <Tab className="p-2 transition-all text-lg cursor-pointer font-sans-bold flex-grow flex justify-center bg-black bg-opacity-5 shadow-tabs" selectedClassName="border-0 bg-white shadow-none">About</Tab>
          </TabList>

          <TabPanel>
            <HowTo />
          </TabPanel>

          <TabPanel>
            <About />
          </TabPanel>

        </Tabs>
      </TabPanel>

    </Tabs>

    <div className="bg-white w-full hidden sm:flex">
      <Accordion className="flex flex-grow" onChange={handleChange}>

        <AccordionItem uuid="directions" className={`flex ${currentItemUid.includes("directions") ? "flex-grow" : ""}`}>
          <AccordionItemHeading className="relative p-5 border-0 border-black">
            <AccordionItemButton className={`rotate-tab-title ${currentItemUid.includes("directions") ? "hidden" : "block"}`}>
              <div className="text-xl">PLAY!</div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="flex-grow fade-in">
            <Directions prompts={prompts} handleReadMore={handleReadMore} showDisclaimer={showDisclaimer} />
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem uuid="howto" className={`flex ${currentItemUid.includes("howto") ? "flex-grow" : ""}`}>
          <AccordionItemHeading className="relative p-5 border-0 border-l border-black">
            <AccordionItemButton className={`rotate-tab-title ${currentItemUid.includes("howto") ? "hidden" : "block"}`}>
              <div className="text-xl">How to Use</div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="flex-grow fade-in">
            <HowTo />
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem uuid="journeys" className={`flex ${currentItemUid.includes("journeys") ? "flex-grow" : ""}`}>
          <AccordionItemHeading className="relative p-5 border-0 border-l border-black">
            <AccordionItemButton className={`rotate-tab-title ${currentItemUid.includes("journeys") ? "hidden" : "block"}`}>
              <div className="flex flex-grow justify-between">
                <div className="text-xl">Journeys</div>
                <aside>#DirectionsToNowhere</aside>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="flex-grow fade-in">
            <Journeys />
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem uuid="about" className={`flex ${currentItemUid.includes("about") ? "flex-grow" : ""}`}>
          <AccordionItemHeading className="relative p-5 border-0 border-l border-black">
            <AccordionItemButton className={`rotate-tab-title ${currentItemUid.includes("about") ? "hidden" : "block"}`}>
              <div className="text-xl">About</div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="flex-grow fade-in">
            <About />
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
    { showDisclaimer && <DisclaimerModal agreeToDisclaimer={agreeToDisclaimer} handleClose={closeDisclaimer} /> }
    </>
  )
}
