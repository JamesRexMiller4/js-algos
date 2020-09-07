const adjacencyList = new Map();

const addNode = (val) => {
  adjacencyList.set(val, []);
}

const addEdge = (origin, destination) => {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}


const airports = 'LAX MDW ORD DEN PHX JFK ATL SFO PDX SLC LAS'.split(' ');

const routes = [
  ['PHX', 'MDW'],
  ['SFO', 'DEN'],
  ['PHX', 'JFK'],
  ['DEN', 'LAX'],
  ['SFO', 'SLC'],
  ['PHX', 'LAS'],
  ['ORD', 'SFO'],
  ['LAX', 'MDW'],
  ['PDX', 'ATL'],
  ['SLC', 'LAS'],
  ['JFK', 'DEN'],
  ['PHX', 'ORD']
];

airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

console.log(adjacencyList);