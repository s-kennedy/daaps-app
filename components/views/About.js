import Link from 'next/link'

const AboutView = () => (
  <div className="flex-grow overflow-auto">
    <div className="container mx-auto px-5 py-8">
      <h2 className="hidden sm:block text-3xl mb-5">About</h2>
      <p>Directions to Nowhere is part of The Bentway’s Digital and/as Public Space Initiative, a collaboration between The Bentway x From Later </p>
      <div className="grid grid-cols-4 gap-8">
        <div className="flex items-center justify-center p-3 sm:p-5 md:p-8 lg:p-10">
          <img className="max-w-xs" src="/daaps-logo.svg" alt="DaaPS" />
        </div>
        <div className="flex items-center justify-center">
          <a className="max-w-xs" href="https://www.thebentway.ca/" target="_blank" rel="noopener noreferrer">
            <img className="w-full" src="/bentway-logo.jpg" alt="The Bentway" />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a className="max-w-xs" href="https://fromlater.com/" target="_blank" rel="noopener noreferrer">
            <img className="w-full" src="/from-later-logo.jpg" alt="From Later" />
          </a>
        </div>
      </div>
      <div className="">
        <p>Design by <a href="https://www.nomadiclabs.ca/">Nomadic Labs</a></p>
      </div>

      <div className="">
        <p>Have a prompt to add? <Link href="/suggestions"><a>Drop it here</a></Link>.</p>
        <p>What do you think about this project? <Link href="/feedback"><a>Share your feedback</a></Link>.</p>
        <p><Link href="/terms"><a>Terms of Use</a></Link></p>
        <p>Contact us at <a href="mailto:hello@thebentway.ca">hello@thebentway.ca</a></p>
      </div>
    </div>
  </div>
)

export default AboutView
