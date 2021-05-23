import Link from 'next/link'

export default function Submit() {
  return (
    <div className="h-full w-full">
      <div className="container mx-auto p-5">
        <Link href="/"><a>Back to home</a></Link>
      </div>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/shrgCFbRBSxFA2q8F?backgroundColor=yellow"
        frameBorder="0"
        width="100%"
        height="100%"
        style={{ background: 'transparent' }}
      />
    </div>
  )
}

