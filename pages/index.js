import { useState, useEffect } from 'react'
import { getPrompts } from '../utils/airtableOps'
import Prompts from '../components/Prompts'
import Directions from '../components/views/Directions'
import About from '../components/views/About'
import HowTo from '../components/views/HowTo'
import Journeys from '../components/views/Journeys'
import DisclaimerModal from '../components/DisclaimerModal'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

export default function Home({ prompts }) {
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
      <TabList className="bottom-0 w-full bg-fade fixed z-10">
        <div className="container mx-auto">
          <Tab className="bg-green m-5 my-8 text-white w-24 p-2 flex justify-center btn-dark font-serif" selectedClassName="hidden">PLAY!</Tab>
          <Tab className="bg-green m-5 my-8 text-white w-24 p-2 flex justify-center btn-dark" selectedClassName="hidden">Read More</Tab>
        </div>
      </TabList>

      <TabPanel className="tab-panel flex-grow flex" selectedClassName="h-full">
        <Directions prompts={prompts} handleReadMore={handleReadMore} />
      </TabPanel>

      <TabPanel>
        <Tabs defaultFocus={true} className="secondary-tabs">
          <TabList className="container mx-auto p-5 py-2 flex justify-between">
            <Tab className="pb-2 transition-all text-lg border-0 cursor-pointer" selectedClassName="font-extrabold border-0 border-b-2 border-green">Journeys</Tab>
            <Tab className="pb-2 transition-all text-lg border-0 cursor-pointer" selectedClassName="font-extrabold border-0 border-b-2 border-green">How To Use</Tab>
            <Tab className="pb-2 transition-all text-lg border-0 cursor-pointer" selectedClassName="font-extrabold border-0 border-b-2 border-green">About</Tab>
          </TabList>

          <TabPanel>
            <Journeys />
          </TabPanel>

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

export async function getStaticProps(context) {
  return {
    props: { prompts: await getPrompts() }
  }
}
