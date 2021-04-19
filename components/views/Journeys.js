
const Journey = ({ journey }) => {
  return (
    <div className="bg-light border-2 border-gray-400 p-10 flex justify-center">
      x
    </div>
  )
}

const Journeys = () => (
  <div className="bg-pink h-full overflow-auto">
    <div className="container mx-auto p-5">
      <div className="col-span-12">
        <div className="bg-yellow p-5">
          Share your creative journeys with #DirectionsToNowhere on your favorite (social) media channels for a chance to be featured here.
        </div>
      </div>
      <div className="grid gap-2 grid-cols-2 my-4">
        <Journey />
        <Journey />
        <Journey />
        <Journey />
      </div>
    </div>
  </div>
)

export default Journeys
