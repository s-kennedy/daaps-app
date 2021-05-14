import Link from 'next/link'

const AboutView = () => (
  <div className="flex-grow overflow-auto">
    <div className="container mx-auto px-5 py-8">
      <h2 className="hidden sm:block text-3xl mb-5">About <span className="italic">Directions to Nowhere in Particular</span></h2>
      <p><span className="italic">Directions to Nowhere in Particular</span> is a game of chance that alters the ways you sense, make, and navigate public space. Anyone can play. Simply go outside, pick a random prompt, and follow the directions for interacting with your surroundings. Perhaps you’ll learn something new or create something special that you’ll want to share with others.</p>
      <p>At some level, this project investigates how we might conceive of <span className="italic">publics</span> in our contemporary cyber-physical world. In the disarray of digital-physical hybridity, many activities can seem purely digital when they in fact have significant real world consequences, and vice versa. <span className="italic">Directions to Nowhere</span> proposes ways of toying with the overlaps and boundaries — (mis)using everyday digital tools to produce new techno-poetic moments in society (or socio-poetic moments in technology) — playfully, so that we might encounter a glimpse of what a hybrid public space could be.</p>
      <p>The prompts are also just for fun, a sometimes absurd move to tear away the wool of the everyday and notice what you notice. Hopefully, in that way, they can prompt us all to weave a more textured public fabric — online, offline, and all between the lines.</p>
      <p>Directions to Nowhere is part of The Bentway’s Digital and/as Public Space Initiative, a collaboration between <a href="https://www.thebentway.ca/" target="_blank" rel="noopener noreferrer">The Bentway</a> and <a href="https://fromlater.com/" target="_blank" rel="noopener noreferrer">From Later</a> with design by <a href="https://www.nomadiclabs.ca/" target="_blank" rel="noopener noreferrer">Nomadic Labs.</a> </p>
      <p>Have a prompt to add? <Link href="/suggestions"><a>Drop it here</a></Link>.</p>
      <p>Contact us at <a href="mailto:hello@thebentway.ca">hello@thebentway.ca</a></p>

      <div className="grid grid-cols-4 gap-8">
        <div className="flex items-center justify-center p-3 sm:p-5 md:p-8 lg:p-10">
          <img className="max-w-xs" src="/daaps-logo.svg" alt="DaaPS" />
        </div>
        <div className="flex items-center justify-center">
          <a className="max-w-xs" href="https://www.thebentway.ca/" target="_blank" rel="noopener noreferrer">
            <img className="w-full" src="/bentway-logo.jpg" alt="The Bentway" />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a className="max-w-xs" href="https://fromlater.com/" target="_blank" rel="noopener noreferrer">
            <img className="w-full" src="/from-later-logo.jpg" alt="From Later" />
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-xl my-2">Additional Sponsors:</h3>
        <div>Balsam Foundation</div>
        <div>Canada Council for the Arts</div>
      </div>
    </div>
  </div>
)

export default AboutView
