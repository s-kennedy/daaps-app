import { getPrompts } from '../utils/airtableOps'
import Prompts from '../components/Prompts'

export default function Home({ prompts }) {
  return (
    <Prompts prompts={prompts} />
  )
}

export async function getStaticProps(context) {
  return {
    props: { prompts: await getPrompts() }
  }
}
