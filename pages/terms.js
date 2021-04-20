import Link from 'next/link'

export default function Terms() {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl mb-5">Terms of Use</h1>
      <p className="mb-5">Welcome to Directions to Nowhere in Particular! Please adhere to the following:</p>
      <p className="font-bold">Be Kind</p>
      <p className="mb-5">The Bentway does not condone use of the platform to promote hatred or derision of any group or to discriminate on any grounds.</p>
      <p className="font-bold">Be Respectful</p>
      <p className="mb-5">Do not engage in activities that are disruptive or detrimental to the community including excessive noise, harassing or threatening behavior and derogatory or abusive language and gestures.</p>
      <p className="font-bold">Be Safe</p>
      <p className="mb-5">Do not engage in activities that put yourself or others at risk, or infringe on the private property of others. Follow your local health and safety guidelines before using Directions to Nowhere in Particular.</p>
      <p className="font-bold">Be Curious</p>
      <p className="mb-5">If you have any questions, suggestions or complaints, please <Link href="/contact"><a>contact us</a></Link>.</p>
      <Link href="/"><a>Back to home</a></Link>
    </div>
  )
}

