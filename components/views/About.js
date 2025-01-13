import Link from 'next/link'

const AboutView = () => (
  <div className="flex-grow overflow-auto">
    <div className="container max-w-xl px-5 py-8">
      <h2 className="hidden sm:block text-3xl mb-5">About <span className="italic">Directions to Nowhere in Particular</span></h2>
      <div className="flex items-center justify-center mb-5 sm:p-8">
        <img className="w-2/5 sm:w-1/3 max-w-xs rotate" src="/daaps-logo.svg" alt="DaaPS" />
      </div>
      <h3 className="sm:hidden text-xl mb-2">About <span className="italic">Directions to Nowhere in Particular</span></h3>
      <p><span className="italic">Directions to Nowhere in Particular</span> is a game of chance that alters the ways you sense, make, and navigate public space. Anyone can play. Simply go outside, pick a random prompt, and follow the directions for interacting with your surroundings. Perhaps you’ll feel something new or create something special that you’ll want to share.</p>
      <p>As part of the <span className="italic">Digital and/as Public Space Initiative</span>, this project explores how people and places relate through software. It proposes ways of playing that might test and transform our conceptions of a public — directing our (mis)use of everyday digital tools to produce new socio-poetic moments. Hopefully, through this kind of play, we may catch a glimpse of a different future. The Directions are exercises in tying intimate relations within our networks. If we can attune ourselves closely to our ecologies, if we can also be more attentive to our digital affordances, we’re better primed to wonder what people and publics are capable of being and doing.</p>
      <p>The prompts are also just for fun, a sometimes absurd move to tear away the wool of the everyday and notice what you notice. Hopefully, in that way, they can prompt us all to weave a more textured public fabric — online, offline, and all between the lines.</p>
      <p>Directions to Nowhere is part of The Bentway’s <span className="italic">Digital and/as Public Space Initiative</span>, a collaboration between <a href="https://www.thebentway.ca/" target="_blank" rel="noopener noreferrer">The Bentway</a> and <a href="https://fromlater.com/" target="_blank" rel="noopener noreferrer">From Later</a> with design by <a href="https://www.nomadiclabs.ca/" target="_blank" rel="noopener noreferrer">Nomadic Labs.</a> </p>
      <p>Contact us at <a href="mailto:hello@thebentway.ca">hello@thebentway.ca</a>.</p>

      <div className="grid grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <a className="max-w-xs" href="https://www.thebentway.ca/" target="_blank" rel="noopener noreferrer">
            <img className="w-full md:w-3/4 sm:p-5" src="/bentway-logo.png" alt="The Bentway" />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a className="max-w-xs" href="https://fromlater.com/" target="_blank" rel="noopener noreferrer">
            <img className="w-full md:w-3/4 p-1 sm:p-3" src="/from-later-logo.jpg" alt="From Later" />
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-xl my-2">Additional Sponsors:</h3>
        <div>
          <a href="https://balsamfoundation.com/" target="_blank" rel="noopener noreferrer">Balsam Foundation</a>
        </div>
        <div>
          <a href="https://canadacouncil.ca/" target="_blank" rel="noopener noreferrer">Canada Council for the Arts</a>
        </div>
      </div>
    </div>
  </div>
)

export default AboutView
