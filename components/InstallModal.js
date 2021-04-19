import { useState, useEffect } from 'react'
import AriaModal from 'react-aria-modal'

const InstallModal = ({ handleClose }) => {
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
                    src="https://help.apple.com/assets/601331154FF818403475D896/6013311F4FF818403475D8DC/en_US/207ee78d2fed6058c49d33266b875a0f.png"
                    alt="the Share button"
                    height="30"
                    width="24"
                    originalimagename="GlobalArt/IL_ShareBlue.png"
                    style={{
                      height: "1.2em",
                      width: "1em",
                      display: "inline-block",
                      marginRight: "0.5em",
                      marginLeft: "0.5em",
                    }}
                  />
                  <span>then 'Add to home screen'</span>
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