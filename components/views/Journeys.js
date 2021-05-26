import Link from 'next/link'
import { useEffect, useState } from 'react'

const Journey = ({ description, media, prompt, status, image, credit, story_url }) => {
  return (
    <div className="flex flex-col items-start justify-start col-span-3 sm:col-span-1">
      <figure>
        <img src={image[0].url} alt={description} className="w-full h-auto object-cover" />
        <figcaption className="mt-1 px-5 sm:px-0">{credit}</figcaption>
      </figure>
      {story_url &&
        <a href={story_url} target="_blank" rel="noopener noreferrer" className="px-5 sm:px-0">Read the full story</a>
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
      <div className="container mx-auto py-8">
        <div className="px-5">
          <h2 className="hidden sm:block text-3xl mb-5">Journeys</h2>
          <p className="mb-2">Share your creative journeys with <span className="text-green font-bold">#DirectionsToNowhere</span> on your favorite (social) media channels.</p>
          <p className="mb-2">Want to be featured on here?</p>
          <Link href="/submit">
            <a className="text-center text-green border border-green px-2 py-1 btn inline-flex items-center mb-5">Send us your creation</a>
          </Link>
        </div>
        { journeys &&
          <div className="grid gap-4 grid-cols-3 my-4 sm:px-5">
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
