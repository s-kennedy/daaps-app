import Link from 'next/link'

const Hint = ({ title, body, image }) => {
  return (
    <div className="hint py-3 col-span-1">
      <img src={`/images/${image}`} className="h-20 w-20 mb-4" />
      <h3 className="text-xl mb-2">{title}</h3>
      <p>{body}</p>
    </div>
  )
}


const HowTo = () => (
  <div className="flex-grow overflow-auto">
    <div className="container mx-auto px-5 py-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
      <h2 className="hidden sm:block text-3xl mb-5">How To Use</h2>
      <p className="col-span-1 sm:col-span-3">Directions to Nowhere in Particular is a set of prompts to alter your experience of public space. Use the prompts —</p>
      <Hint
        title="when you’re out and about"
        image="out-and-about.svg"
        body="Draw a prompt when you go for a walk, when you’re hanging out in the park, or when you’re waiting for public transit, wherever you are in the world."
      />

      <Hint
        title="with what you have handy"
        image="handy.svg"
        body="Interpret the prompts by creatively using and misusing the everyday digital tools you have in your phone, tablet, laptop, multitool, or other device."
      />

      <Hint
        title="share the story of your journey"
        image="share.svg"
        body="Make something. Tell your story. Create a work of art based on your experience. Film it. Record audio. Take pictures and screenshots. And share! Tag with #DirectionsToNowhere."
      />

      <Hint
        title="notice what you notice"
        image="notice.svg"
        body="Open your mind and open your senses. These prompts are meant to change the way you see what’s around you. "
      />

      <Hint
        title="you don’t have to be literal"
        image="not-literal.svg"
        body="Don’t feel that you have to execute the prompt exactly. Change the prompts to suit your strengths, abilities, and interests. Perhaps just use them to alter the ways you perceive, interpret, and reflect on your relationships to the spaces around you."
      />

      <div className="hint py-3 col-span-1">
        <img src={`/images/add-more.svg`} className="h-20 w-20 mb-4" />
        <h3 className="text-xl mb-2">have a prompt to add?</h3>
        <p>We’d love to hear from you. Please send us your ideas and suggestions <Link href="/suggestions"><a>here</a></Link>. We may have to make edits before including.</p>
      </div>

      <div className="hint py-5 sm:col-span-3">
        <h2 className="text-2xl mb-5">Code of Conduct</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <h3 className="text-xl mb-2">be safe</h3>
            <p>Don’t do anything that puts yourself or others at risk. Stay aware of your surroundings. <span className="font-sans-bold">And follow your local health and safety guidelines.</span></p>
          </div>

          <div>
            <h3 className="text-xl mb-2">be kind</h3>
            <p>Care for community. Hatred, derision, harassment, threatening behavior, or abuse of any kind against any individual or group will not be tolerated.</p>
          </div>

          <div>
            <h3 className="text-xl mb-2">be respectful</h3>
            <p>Navigate public space gently and considerately. Do not vandalize or infringe on the property of others. Respect people's privacy.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
)

export default HowTo
