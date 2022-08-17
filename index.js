import { GraphQLClient, gql } from 'graphql-request'

const query = gql`{
  search(query: "stars:>100", type: REPOSITORY, first: 10) {
    nodes {
      ... on Repository {
         name
        createdAt
        updatedAt
        pullRequests(states: MERGED) {
          totalCount
        }
        issues(states: CLOSED) {
          totalCount
        }
        releases {
          totalCount
        }
        languages(orderBy: {field: SIZE, direction: ASC}, last: 10) {
          nodes {
            name
          }
        }issues {
          totalCount
        }
        primaryLanguage {
          name
        }
        updatedAt
        releases {
          totalCount
        }
        pullRequests {
          totalCount
        }
        createdAt
        nameWithOwner
      }
    }
  }
}
`
const client = new GraphQLClient('https://api.github.com/graphql', {
    headers: {
        authorization: "bearer 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",
    },
})
const data = await client.request(query, {})
console.log(data.search.nodes)