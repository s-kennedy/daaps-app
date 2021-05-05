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
            <p className="font-bold text-2xl mb-5">When using Directions to Nowhere — please use your common sense and follow the code of conduct below:</p>
            <p className="font-bold">Be Safe</p>
            <p className="mb-5">Don’t do anything that puts yourself or others at risk. Stay aware of your surroundings. And follow your local health and safety guidelines.</p>
            <p className="font-bold">Be Kind</p>
            <p className="mb-5">Care for your community. We do not tolerate hatred, derision, harassment, threatening behavior, or abuse of any kind against any individual or group.</p>
            <p className="font-bold">Be Respectful</p>
            <p className="mb-5">Navigate public space gently and considerately. Do not vandalize or infringe on the property of others.</p>
            <button id="disclaimer-agree" onClick={agreeToDisclaimer} className="border border-white bg-green text-white px-3 py-1">I agree, let's start!</button>
          </div>
        </div>
      </div>
    </AriaModal>
  )
}

export default DisclaimerModal