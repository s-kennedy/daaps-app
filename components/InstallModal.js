import { useState, useEffect } from 'react'
import AriaModal from 'react-aria-modal'

const InstallModal = ({ handleClose }) => {
  const [isIos, setIsIos] = useState(false)

  useEffect(() => {
    const detectIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod|macintosh/.test( userAgent );
    }
    setIsIos(detectIos())
  })

  return (
    <AriaModal
      focusDialog={true}
      titleText="Save this webapp to your home screen"
      onExit={handleClose}
    >
      <div className="m-10 flex justify-center items-center">
        <div className="container">
          <div className="p-5 bg-white">
            {
              isIos ? (
                <div>
                  <span>To install this web app on your iPhone, tap</span>
                  <img
                    src="/images/iphone-share-icon.png"
                    alt="the Share button"
                    height="30"
                    width="24"
                    style={{
                      height: "1.2em",
                      width: "1em",
                      display: "inline-block",
                      marginRight: "0.5em",
                      marginLeft: "0.5em",
                    }}
                  />
                  <span>then 'Add to home screen'</span>
                  <img
                    src="/images/iphone-add-icon.png"
                    alt="the Add to home screen button"
                    height="24"
                    width="30"
                    style={{
                      height: "1em",
                      width: "1em",
                      display: "inline-block",
                      marginRight: "0.5em",
                      marginLeft: "0.5em",
                    }}
                  />
                </div>
              ) : (
                <div>To install this web app on your phone, open the browser menu then click 'Add to Home screen'</div>
              )
            }
          </div>
        </div>
      </div>
    </AriaModal>
  )
}

export default InstallModal