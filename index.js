import { GraphQLClient, gql } from 'graphql-request'

var after = "0"
var queryComplement = "";
var query = gql`{
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
const client = new GraphQLClient('https://api.github.com/graphql', {
    headers: {
        authorization: "bearer SUA CHAVE",
    },
})

var data = await client.request(query, {})
for(let i=0;i<10;i++){
  after = data.search.pageInfo.endCursor
  if(i>0){
    data = await client.request(query, {})
    queryComplement = `, after: "${after}"`
    console.log(queryComplement);
  }
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
  console.log(data.search.nodes);
}