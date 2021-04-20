import Link from 'next/link'

export default function Feedback() {
  return (
    <div className="h-full">
      <div className="container mx-auto p-5">
        <Link href="/"><a>Back to home</a></Link>
      </div>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/shrWmJcoSfMgjoI9G?backgroundColor=yellow"
        frameBorder="0"
        width="100%"
        height="100%"
        style={{ background: 'transparent' }}
      />
    </div>
  )
}

