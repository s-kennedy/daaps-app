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

import 'react-accessible-accordion/dist/fancy-example.css';

export default function Home({ prompts }) {
  return (
      <Accordion className="flex flex-col">
        <AccordionItem className="flex-grow-0">
          <AccordionItemHeading>
            <AccordionItemButton>
              Directions
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="p-0">
            <Directions prompts={prompts}/>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem className="flex-grow">
          <AccordionItemHeading>
            <AccordionItemButton>
              Journeys
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="p-0">
            <Journeys />
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem className="flex-grow">
          <AccordionItemHeading>
            <AccordionItemButton>
              How to Use
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="p-0">
            <HowTo />
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem className="flex-grow">
          <AccordionItemHeading>
            <AccordionItemButton>
              About
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="p-0">
            <About />
          </AccordionItemPanel>
        </AccordionItem>

      </Accordion>
  )
}

export async function getStaticProps(context) {
  return {
    props: { prompts: await getPrompts() }
  }
}
