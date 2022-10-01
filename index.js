import { GraphQLClient } from 'graphql-request'
import { normalizeCsvData, setQuery, writeCSVFile } from './utils.js';
import { config } from 'dotenv'

config()

const client = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    authorization: `bearer ${process.env.GITHUB_TOKEN}`,
  },
})

const results = []

for (let i = 0; i < 100; i++) {
  const after = results.at(i - 1)?.search.pageInfo.endCursor
  const queryComplement = after && `, after: "${after}"`
  const data = await client.request(setQuery(queryComplement))

  results.push(data)
}

const nodes = results
  .map(node => node.search.nodes)
  .flat()
  .map(node => normalizeCsvData(node))

console.log(nodes);
console.log("\n" + nodes.length);

await writeCSVFile(nodes)