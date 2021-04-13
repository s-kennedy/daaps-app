import { getPrompts } from '../utils/airtableOps'
import Prompts from '../components/Prompts'
import Doorways from '../components/Doorways'

export default function Home({ prompts }) {
  return (
    <div>
      <div className="daaps-yellow pt-10">
        <div className="container mx-auto p-5 py-10">
          <header className="grid grid-cols-8 items-end gap-6">
            <div className="col-span-3">
              <h1 className="text-5xl">Directions to Nowhere in Particular</h1>
            </div>
            <div className="col-span-5">
              <p className="text-xl mb-1">Prompts for sensing, making, and navigating public space.</p>
              <aside>#DirectionsToNowhere</aside>
            </div>
          </header>
        </div>
      </div>
      <div className="daaps-yellow">
        <div className="container mx-auto p-5 py-10">
          <main className="relative flex justify-center items-center flex-col mb-20">
            <p>Pick a card.</p>
            <Prompts prompts={prompts} />
          </main>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto p-5 py-10">
          <footer className="">
            <div className="grid grid-cols-8 items-end gap-6">
              <div className="col-span-3">
                <p>Directions to Nowhere is part of The Bentway’s Digital and/as Public Space Initiative, a collaboration between The Bentway x From Later </p>
                <p>Design by <a href="https://www.nomadiclabs.ca/">Nomadic Labs</a></p>
              </div>
              <div className="col-span-5">
                <div className="flex items-center justify-end">
                  <img className="w-24 mr-10" src="/daaps-logo.svg" alt="DaaPS" />
                  <img className="w-32 mr-10" src="/Bentway-logo.jpg" alt="The Bentway" />
                  <img className="w-32 mr-10" src="/from-later-logo.jpg" alt="From Later" />
                </div>
              </div>
            </div>

            <p>Have a prompt to add? <a href="https://airtable.com/shrf8TF1efRfZ3ZV6">Drop it here</a>.</p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  return {
    props: { prompts: await getPrompts() }
  }
}
