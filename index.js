import { GraphQLClient } from 'graphql-request'
import { normalizeCsvData, setQuery, writeCSVFile } from './utils.js';
import { config } from 'dotenv'

config()

const client = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    authorization: `bearer ${process.env.GITHUB_TOKEN}`,
  },
})

const data = await client.request(setQuery(), {})
const promises = []

for (let i = 1; i < 50; i++) {
  const after = data.search.pageInfo.endCursor
  const queryComplement = `, after: "${after}"`
  promises.push(client.request(setQuery(queryComplement)))

}

const results = await Promise.all(promises)
const nodes = results.concat(data)
  .map(node => node.search.nodes)
  .flat()
  .map(node => normalizeCsvData(node))

console.log(nodes);
console.log("\n" + nodes.length);

await writeCSVFile(nodes)