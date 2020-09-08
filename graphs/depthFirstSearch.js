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

const depthFirstSearch = (start, end, visited = new Set(), numSteps = 0) => {  
  visited.add(start);
  const destinations = adjacencyList.get(start);

  for (const destination of destinations) {
    console.log(destination);
    if (destination === end) {
      console.log(`${end} found in ${numSteps} steps`);
      return;
    }

    if (!visited.has(destination)) {
      numSteps++;
      depthFirstSearch(destination, end, visited, numSteps);
    }
  }
};

depthFirstSearch('DEN', 'PHX');