import { gql } from 'graphql-request'
import ObjectsToCsv from 'objects-to-csv'

export const normalizeCsvData = (node) => {
    let node2 = {}
    Object.keys(node).map(key => {
        if (typeof node[key] === 'object') {
            console.log(node[key])
            const chave = node[key] ? Object.keys(node[key])[0] : null
            node2[key] = chave ? node[key][chave] : node[key]
        } else {
            node2[key] = node[key]
        }
    })

    return node2
}

export const setQuery = (complement = "") => gql`{
    search(query: "stars:>100", type: REPOSITORY, first: 20 ${complement}) {
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
          url
          stargazerCount
        }
      }
      pageInfo {
        endCursor
      }
    }
  }
  `

export const writeCSVFile = async (data, filename = 'dados') => {
    const csv = new ObjectsToCsv(data);

    // Save to file:
    await csv.toDisk(`./${filename}.csv`);
};