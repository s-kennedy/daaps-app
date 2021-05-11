import Airtable from 'airtable'

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BASE_ID
);

const promptsTable = base('prompts');

const getPrompts = async () => {
  const records = await promptsTable
    .select({ filterByFormula: "AND({status} = 'published', NOT({prompt} = ''))" })
    .firstPage();

  const prompts = records.map(r => ({ id: r.id, fields: r.fields }))

  return prompts
}


export { promptsTable, getPrompts };