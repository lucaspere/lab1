import { GraphQLClient, gql } from 'graphql-request'

var after = "0"
var queryComplement = "";
var query = gql`{
  search(query: "stars:>100", type: REPOSITORY, first: 20) {
    nodes {
      ... on Repository {
        name
        createdAt
        updatedAt
        pullRequests(states: MERGED) {
          totalCount
        }
        releases {
          totalCount
        }
        primaryLanguage {
          name
        }
        issuesclosed: issues(states: CLOSED) {
          totalCount
        }
        issuesopen: issues(states: OPEN) {
          totalCount
        }
      }
    }
    pageInfo {
      endCursor
    }
  }
}
`
const client = new GraphQLClient('https://api.github.com/graphql', {
    headers: {
        authorization: "bearer SUA_CHAVE",
    },
})

var data = await client.request(query, {})
const promises = [client.request(query, {})]
for(let i=0;i<5;i++){
  after = data.search.pageInfo.endCursor
  queryComplement = `, after: "${after}"`
  if(i>0){
    query = gql`{
      search(query: "stars:>100", type: REPOSITORY, first: 20 ${queryComplement}) {
        nodes {
          ... on Repository {
            name
            createdAt
            updatedAt
            pullRequests(states: MERGED) {
              totalCount
            }
            releases {
              totalCount
            }
            primaryLanguage {
              name
            }
            issuesclosed: issues(states: CLOSED) {
              totalCount
            }
            issuesopen: issues(states: OPEN) {
              totalCount
            }
          }
        }
        pageInfo {
          endCursor
        }
      }
    }
    `
    promises.push(client.request(query, {})) 
  }
}
const results = await Promise.all(promises)
const nodes = results.map(node => node.search.nodes).flat()
console.log(nodes)
console.log("\n"+nodes.length);