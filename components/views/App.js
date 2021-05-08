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
import DisclaimerModal from '../DisclaimerModal'

export default function App({ prompts }) {
  const [currentItemUid, setCurrentItemUid] = useState(['directions'])
  const [preExpanded, setPreExpanded] = useState(['directions'])
  const [showDisclaimer, setShowDisclaimer] = useState()

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
    let hasAgreedToDisclaimer = false;

    if (typeof localStorage !== 'undefined') {
      hasAgreedToDisclaimer = localStorage.getItem('daaps-disclaimer') === 'true'
    }

    if (!hasAgreedToDisclaimer) {
      setShowDisclaimer(true)
    }
  })

  return (
    <>
    <Tabs defaultFocus={true} className="primary-tabs w-full">
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
    { showDisclaimer && <DisclaimerModal agreeToDisclaimer={agreeToDisclaimer} handleClose={closeDisclaimer} /> }
    </>
  )
}
