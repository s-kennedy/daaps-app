import { useState, useEffect } from 'react'
import Link from 'next/link'
import AriaModal from 'react-aria-modal'

const DisclaimerModal = ({ handleClose, agreeToDisclaimer }) => {
  const [isIos, setIsIos] = useState(false)

  useEffect(() => {
    const detectIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test( userAgent );
    }
    setIsIos(detectIos())
  })

  return (
    <AriaModal
      titleText="To continue you must agree to the Terms of Use"
      underlayClickExits={false}
      focusDialog={true}
    >
      <div className="m-10 flex justify-center items-center">
        <div className="container">
          <div className="p-5 bg-white">
            <p className="font-bold text-2xl mb-5">Welcome to Directions to Nowhere in Particular!</p>
            <p className="mb-5">Please adhere to the following:</p>
            <p className="font-bold">Be Kind</p>
            <p className="mb-5">The Bentway does not condone use of the platform to promote hatred or derision of any group or to discriminate on any grounds.</p>
            <p className="font-bold">Be Respectful</p>
            <p className="mb-5">Do not engage in activities that are disruptive or detrimental to the community including excessive noise, harassing or threatening behavior and derogatory or abusive language and gestures.</p>
            <p className="font-bold">Be Safe</p>
            <p className="mb-5">Do not engage in activities that put yourself or others at risk, or infringe on the private property of others. Follow your local health and safety guidelines before using Directions to Nowhere in Particular.</p>
            <p className="font-bold">Be Curious</p>
            <p className="mb-5">For a complete Terms of Service, please <Link href="/terms"><a>see here</a></Link>. If you have any questions, suggestions or complaints, please <Link href="/contact"><a>contact us</a></Link>.</p>
            <button id="disclaimer-agree" onClick={agreeToDisclaimer} className="border border-white bg-green text-white px-3 py-1">I agree, let's start!</button>
          </div>
        </div>
      </div>
    </AriaModal>
  )
}

export default DisclaimerModal