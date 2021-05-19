import Airtable from 'airtable'

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BASE_ID
);

const promptsTable = base('prompts');
const journeysTable = base('journeys');

const getPrompts = async () => {
  const records = await promptsTable
    .select({ filterByFormula: "AND({status} = 'published', NOT({prompt} = ''))" })
    .firstPage();

  const prompts = records.map(r => ({ id: r.id, fields: r.fields }))

  return prompts
}

const getJourneys = async () => {
  const records = await journeysTable
    .select({ filterByFormula: "AND({status} = 'published', NOT({image} = ''))" })
    .firstPage();

  const journeys = records.map(r => ({ id: r.id, fields: r.fields }))

  return journeys
}


export { promptsTable, getPrompts, journeysTable, getJourneys };