import { GraphQLClient, gql } from 'graphql-request'

const client = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    authorization: "bearer SEU_TOKEN_AQUI",
  },
})

const cursores = ["", "Y3Vyc29yOjIw", "Y3Vyc29yOjQw", "Y3Vyc29yOjYw", "Y3Vyc29yOjgw"]
const promises = []

for (let i = 0; i < cursores.length; i++) {
  let query
  if (i === 0) {
    query = gql`{
      search(
        query: "stars:>100"
        type: REPOSITORY
        first: 20
      ) {
          edges {
            cursor
          }
          nodes {
            ... on Repository {
              name
              createdAt
              updatedAt
              pullRequests(states: MERGED) {
                totalCount
              }
              issuesclosed: issues(states: CLOSED) {
                totalCount
              }
              issuesopen: issues(states: OPEN) {
                totalCount
              }
              releases {
                totalCount
              }
              primaryLanguage {
                name
              }
            }
          }
          pageInfo {
            endCursor
          }
        }
      }`
  } else {
    query = gql`{
      search(
        query: "stars:>100"
        type: REPOSITORY
        first: 20
        after: "${cursores[i]}"
      ) {
          edges {
            cursor
          }
          nodes {
            ... on Repository {
              name
              createdAt
              updatedAt
              pullRequests(states: MERGED) {
                totalCount
              }
              issuesclosed: issues(states: CLOSED) {
                totalCount
              }
              issuesopen: issues(states: OPEN) {
                totalCount
              }
              releases {
                totalCount
              }
              primaryLanguage {
                name
              }
            }
          }
          pageInfo {
            endCursor
          }
        }
      }`
  }

  promises.push(client.request(query))
}
const resolves = await Promise.all(promises);
const repos = resolves.map(repo => repo.search.nodes).flat()

console.log(repos)
console.log(`Quantidade de repos: ${repos.length}`)
