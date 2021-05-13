import Link from 'next/link'

const Journey = ({ image }) => {
  return (
    <div className="border-2 border-gray-400 flex justify-center col-span-3 sm:col-span-1">
      <img src={image} className="w-full h-auto object-cover" />
    </div>
  )
}

const Journeys = () => (
  <div className="flex-grow overflow-auto">
    <div className="container mx-auto px-5 py-8">
      <h2 className="hidden sm:block text-3xl mb-5">Journeys</h2>
      <p className="mb-5">Share your creative journeys with #DirectionsToNowhere on your favorite (social) media channels or <Link href="/submit"><a>submit</a></Link> for a chance to be featured here.</p>
      <div className="grid gap-4 grid-cols-3 my-4">
        <Journey image="https://placekitten.com/g/300/400" />
        <Journey image="https://placekitten.com/g/400/400" />
        <Journey image="https://placekitten.com/g/400/300" />
        <Journey image="https://placekitten.com/g/300/400" />
        <Journey image="https://placekitten.com/g/400/400" />
        <Journey image="https://placekitten.com/g/400/300" />
      </div>
    </div>
  </div>
)

export default Journeys
