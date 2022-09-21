import { GraphQLClient } from "graphql-request";
import { getPRsQuery, writeCSVFile, getCSV, getReposQuery } from "./utils.js";
import { config } from "dotenv";

config();

const client = new GraphQLClient("https://api.github.com/graphql", {
  headers: {
    authorization: `bearer ${process.env.GITHUB_TOKEN}`,
  },
});

const calculeTempoEmHoras = (date1, date2) => {
  const closedAt = new Date(date1);
  const createdAt = new Date(date2);
  const horas = Math.floor(Math.abs(closedAt - createdAt) / 3.6e6);

  return horas;
};
const filteredPR = (nodes) => {
  const data = nodes.filter(
    (node) =>
      calculeTempoEmHoras(node.closedAt, node.createdAt) >= 1 &&
      node.reviews.totalCount >= 1
  );

  return data;
};

const getRepos = async () => {
  const data = await client.request(getReposQuery());
  const csvData = data.search.nodes.map((node) => ({
    name: node.name,
    owner: node.owner.login,
    url: node.url,
  }));

  await writeCSVFile(csvData, "repositorios");
};

const getPRs = async (repo) => {
  let after = "";
  let hasNextPage = false;
  const results = [];
  let count = 100;
  do {
    const queryComplement = after && `, after: "${after}"`;
    const data = await client.request(getPRsQuery(repo, queryComplement));
    console.log(`contador de ${repo.name}: ${count}`);
    const prs = filteredPR(data.repository.pullRequests.nodes);
    if (prs.length) {
      results.push(getMetrics(prs));
    }

    after = data.repository.pullRequests.pageInfo?.endCursor;
    hasNextPage = data.repository.pullRequests.pageInfo?.hasNextPage;
  } while (hasNextPage);

  return results.flat();
};

const getMetrics = (data) => {
  return data.map((d) => ({
    repositorio: d.repository.name,
    url: d.url,
    state: d.state,
    tamanho: d.changedFiles,
    tempoDeAnalise: calculeTempoEmHoras(d.closedAt, d.createdAt),
    descricao: d.bodyText.length,
    interacoes:
      d.comments.nodes.reduce((sum, node) => (sum += node?.id ? 1 : 0), 0) +
      d.reviewThreads.totalCount,
  }));
};

await getRepos();
getCSV("./repositorios", async (repos) => {
  for (let i = 0; i < repos.length; i++) {
    console.log(`analisando ${repos[i].name}`);
    const results = await getPRs(repos[i]);
    await writeCSVFile(results, "teste2");
  }
});
