
const AboutView = () => (
  <div className="bg-white h-full overflow-auto">
    <div className="container mx-auto p-5 pt-1">
      <div className="grid grid-cols-8 items-end gap-6">
        <div className="col-span-12">
          <p>Directions to Nowhere is part of The Bentway’s Digital and/as Public Space Initiative, a collaboration between The Bentway x From Later </p>
        </div>
        <div className="col-span-12">
          <div className="flex items-center justify-between">
            <img className="w-1/4" src="/daaps-logo.svg" alt="DaaPS" />
            <img className="w-1/4" src="/Bentway-logo.jpg" alt="The Bentway" />
            <img className="w-1/4" src="/from-later-logo.jpg" alt="From Later" />
          </div>
        </div>
        <div className="col-span-12">
          <p>Design by <a href="https://www.nomadiclabs.ca/">Nomadic Labs</a></p>
          <p>Have a prompt to add? <a href="https://airtable.com/shrf8TF1efRfZ3ZV6">Drop it here</a>.</p>
        </div>
      </div>
    </div>
  </div>
)

export default AboutView
