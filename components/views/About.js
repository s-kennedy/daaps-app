
const AboutView = () => (
  <div className="bg-white">
    <div className="container mx-auto p-5 py-10">
      <div className="col-span-3">
        <h1 className="text-5xl font-sans">About</h1>
      </div>
      <div className="grid grid-cols-8 items-end gap-6">
        <div className="col-span-3">
          <p>Directions to Nowhere is part of The Bentway’s Digital and/as Public Space Initiative, a collaboration between The Bentway x From Later </p>
          <p>Design by <a href="https://www.nomadiclabs.ca/">Nomadic Labs</a></p>
        </div>
        <div className="col-span-5">
          <div className="flex items-center justify-end">
            <img className="w-24 mr-10" src="/daaps-logo.svg" alt="DaaPS" />
            <img className="w-32 mr-10" src="/Bentway-logo.jpg" alt="The Bentway" />
            <img className="w-32 mr-10" src="/from-later-logo.jpg" alt="From Later" />
          </div>
        </div>
      </div>
      <p>Have a prompt to add? <a href="https://airtable.com/shrf8TF1efRfZ3ZV6">Drop it here</a>.</p>
    </div>
  </div>
)

export default AboutView
