import { gql } from "graphql-request";
import ObjectsToCsv from "objects-to-csv";
import fs, { read } from "node:fs";
import { parse } from "csv-parse";

export const normalizeCsvData = (node) => {
  let node2 = {};
  Object.keys(node).map((key) => {
    if (typeof node[key] === "object") {
      console.log(node[key]);
      const chave = node[key] ? Object.keys(node[key])[0] : null;
      node2[key] = chave ? node[key][chave] : node[key];
    } else {
      node2[key] = node[key];
    }
  });

  return node2;
};

export const getPRsQuery = (repo, complement = "") => gql`{
  repository(name: "${repo.name}", owner: "${repo.owner}") {
    pullRequests(states:[MERGED, CLOSED], first: 100 ${complement}) {
      nodes {
        state
        url
        createdAt
        closedAt
        mergedAt
        reviewThreads {
          totalCount
        }
        reviews {
          totalCount
        }
        changedFiles
        bodyText
        repository {
          name
        }
        comments(first: 100) {
          totalCount
          nodes {
            author {
              ... on User {
                id
              }
            }
          }
        }
      }
        pageInfo {
          endCursor
          hasNextPage
        }
    }
  }
}
  `;

export const getReposQuery = () => gql`
  {
    search(query: "stars:>100", type: REPOSITORY, first: 100) {
      nodes {
        ... on Repository {
          name
          owner {
            id
            login
          }
          url
        }
      }
    }
  }
`;

export const writeCSVFile = async (data, filename = "dados") => {
  const csv = new ObjectsToCsv(data);

  // Save to file:
  await csv.toDisk(`./${filename}.csv`, { append: true });
};

export const getCSV = (path, cb) => {
  const rows = [];
  const reader = fs.createReadStream(path + ".csv").pipe(
    parse({
      delimiter: ",",
      columns: true,
      ltrim: true,
    })
  );

  reader.on("data", (data) => {
    rows.push(data);
  });

  reader.on("end", () => {
    cb(rows);
  });
};
