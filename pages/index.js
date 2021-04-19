import { useState } from 'react'
import { getPrompts } from '../utils/airtableOps'
import Prompts from '../components/Prompts'
import Directions from '../components/views/Directions'
import About from '../components/views/About'
import HowTo from '../components/views/HowTo'
import Journeys from '../components/views/Journeys'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


const DirectionsAccordionItem = ({ currentItemUid, id, children, title, className, handleReadMore, prompts }) => {
  const selected = currentItemUid.includes(id)

  return (
    <AccordionItem dangerouslySetExpanded={selected} className={`${className} flex flex-col overflow-hidden ${selected ? 'selected fixed inset-y-0 inset-x-0 h-screen w-screen' : 'flex-grow-0 flex-shrink-0'}`} uuid={id} id={id}>
      <AccordionItemHeading aria-level={2} className={`${selected ? "h-0" : "flex-grow-0 h-auto"}`}>
        <AccordionItemButton className={`transition-all ${selected ? 'opacity-0' : 'text-lg py-1' } px-5`}>
          {title}
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel className={`transition-all p-0 flex-grow overflow-auto accordion__panel`}>
        <Directions prompts={prompts} handleReadMore={handleReadMore} />
      </AccordionItemPanel>
    </AccordionItem>
  )
}

const CustomAccordionItem = ({ currentItemUid, id, children, title, className }) => {
  const selected = currentItemUid.includes(id)

  return (
    <AccordionItem dangerouslySetExpanded={selected} className={`${className} flex flex-col overflow-hidden ${selected ? 'selected flex-grow' : 'flex-grow-0 flex-shrink-0'}`} uuid={id} id={id}>
      <AccordionItemHeading aria-level={2} className="flex-grow-0">
        <AccordionItemButton className={`transition-all ${selected ? 'text-3xl pt-5' : 'text-lg py-1' } px-5`}>
          {title}
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel className={`transition-all p-0 flex-grow overflow-auto accordion__panel`}>
        {children}
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default function Home({ prompts }) {
  const [currentItemUid, setCurrentItemUid] = useState(['directions'])
  const [preExpanded, setPreExpanded] = useState(['directions'])

  const handleChange = uid => {
    console.log({ uid })
    if (uid !== currentItemUid) {
      setCurrentItemUid(uid)
    }
  }

  const handleReadMore = () => {
    setCurrentItemUid(['about'])
  }

  return (
      <Accordion
        className="accordion flex flex-col h-full"
        onChange={handleChange}
        preExpanded={preExpanded}>
        <DirectionsAccordionItem
          id="directions"
          title="Directions"
          currentItemUid={currentItemUid}
          className="bg-yellow"
          handleReadMore={handleReadMore}
          prompts={prompts}
        />

        <CustomAccordionItem
          id="journeys"
          title="Journeys"
          currentItemUid={currentItemUid}
          className="bg-pink"
        >
          <Journeys />
        </CustomAccordionItem>

        <CustomAccordionItem
          id="howto"
          title="How to Use"
          currentItemUid={currentItemUid}
          className="bg-green text-white"
        >
          <HowTo />
        </CustomAccordionItem>

        <CustomAccordionItem
          id="about"
          title="About"
          currentItemUid={currentItemUid}
          className="bg-white"
        >
          <About />
        </CustomAccordionItem>
      </Accordion>
  )
}

export async function getStaticProps(context) {
  return {
    props: { prompts: await getPrompts() }
  }
}
