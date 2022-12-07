import { GraphQLClient } from "graphql-request";
import { writeCSVFile } from "./utils.js";
import { config } from "dotenv";
import fetch from "node-fetch";

config();

const client = new GraphQLClient("https://rickandmortyapi.com/graphql");

const queries = [
  {
    description: "Find character where id is 151",
    rest: "https://rickandmortyapi.com/api/character/151",
    graphql:
      'query{characters(filter:{name:"Gwendolyn"}){results{id name status species type gender origin{name} location{name} image episode{name} created}}}',
  },
  {
    description: "List episodios",
    rest: "https://rickandmortyapi.com/api/episode",
    graphql:
      "query{episodes{info{count pages next prev}results{id name air_date episode created characters{id name}}}}",
  },
  {
    description: "Get episodio 10 and 28",
    rest: "https://rickandmortyapi.com/api/episode/10,28",
    graphql:
      "query{episodesByIds(ids:[10,28]){id name air_date episode created characters{id name}}}",
  },
  {
    description:
      "List episodios where character name is rick and status is alive",
    rest: "https://rickandmortyapi.com/api/character/?name=rick&status=alive",
    graphql:
      'query{characters(filter:{name:"rick",status:"alive"}){results{id name status species type gender origin{name} location{name} image episode{id} created}}}',
  },
  {
    description: "List Locations",
    rest: "https://rickandmortyapi.com/api/location",
    graphql:
      "query{locations{info{count pages next prev}results{id name type dimension residents{id} created}}}",
  },
];

const results = [];

for (let i = 0; i < queries.length; i++) {
  const url = queries[i].rest;
  const startTime = new Date();
  const res = await fetch(url);
  const endTime = new Date();
  const body = await res.json();
  const payloadLen = JSON.stringify(body).length;
  results.push({
    type: "REST",
    description: queries[i].description,
    payloadLen,
    timeElaped: endTime - startTime,
    url,
    query: null,
  });
}

for (let i = 0; i < queries.length; i++) {
  const query = queries[i].graphql;
  const startTime = new Date();
  const res = await client.request(query);
  const endTime = new Date();
  const payloadLen = JSON.stringify(res).length;

  results.push({
    type: "GRAPHQL",
    description: queries[i].description,
    payloadLen,
    timeElaped: endTime - startTime,
    url: null,
    query,
  });
}

console.log(results);
await writeCSVFile(results, "rick_morty_data");
