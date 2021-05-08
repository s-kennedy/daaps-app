import dynamic from 'next/dynamic'

import { getPrompts } from '../utils/airtableOps'
import Loading from '../components/views/Loading'

const App = dynamic(
  () => import('../components/views/App'),
  { loading: () => <Loading /> }
)

export default function Home({ prompts }) {
  return (
    <App prompts={prompts} />
  )
}

export async function getStaticProps(context) {
  return {
    props: { prompts: await getPrompts() }
  }
}
