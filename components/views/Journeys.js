import Link from 'next/link'
import { useEffect, useState } from 'react'

const Journey = ({ description, media, prompt, status, image, credit, story_url }) => {
  return (
    <div className="flex flex-col justify-center col-span-3 sm:col-span-1">
      <figure>
        <img src={image[0].url} alt={description} className="w-full h-auto object-cover border border-black" />
        <figcaption className="mt-1">{`Credit: ${credit}`}</figcaption>
      </figure>
      {story_url &&
        <a href={story_url} target="_blank" rell="noopener noreferrer">Read the full story</a>
      }
    </div>
  )
}

const Journeys = () => {
  const [journeys, setJourneys] = useState()
  const [errorMessage, setErrorMessage] = useState()

  const populateJourneys = async () => {
    const result = await fetch('/api/journeys')
    const parsed = await result.json()
    console.log(parsed)
    const { journeys, error, msg } = parsed
    if (journeys) {
      setJourneys(journeys)
    }

    if (error) {
      console.log(error)
      setErrorMessage(msg)
    }
  }

  useEffect(() => {
    if (!journeys) {
      populateJourneys()
    }
  })

  return (
    <div className="flex-grow overflow-auto">
      <div className="container mx-auto px-5 py-8">
        <h2 className="hidden sm:block text-3xl mb-5">Journeys</h2>
        <p className="mb-2">Share your creative journeys with #DirectionsToNowhere on your favorite (social) media channels.</p>
        <p className="mb-5">Want to be featured on here? <Link href="/submit"><a>Send us your creation.</a></Link></p>
        { journeys &&
          <div className="grid gap-4 grid-cols-3 my-4">
            {
              journeys.map(({id, fields}) => <Journey key={id} id={id} {...fields} />)
            }
          </div>
        }
      </div>
    </div>
  )
}
export default Journeys
