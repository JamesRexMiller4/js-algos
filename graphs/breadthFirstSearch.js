const { 
  adjacencyList,
  addNode,
  addEdge,
  airports,
  routes
} = require('./adjacencyList');

airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

// ^^setup graph

const breadthFirstSearch = (start, val) => {
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    const airport = queue.shift();
    const destinations = adjacencyList.get(airport);

    for (const destination of destinations) {
      console.log(destination);
      if (destination === val) {
        console.log(`${val} located`);
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
}

// Find routes from X that go to Y

breadthFirstSearch('DEN', 'ORD');