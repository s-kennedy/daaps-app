import { useEffect } from 'react'
import Splitting from 'splitting'

export default function SplitTitle() {
  useEffect(() => {
    Splitting()
  })

  return (
    <h1 data-splitting="" className="mb-5 sm:mb-5 uppercase text-green">
      <div className="text-2xl sm:text-4xl md:text-5xl leading-normal">Directions to >>></div>
      <div className="text-2xl sm:text-4xl md:text-5xl leading-normal">Nowhere in Particular</div>
    </h1>
  )
}
