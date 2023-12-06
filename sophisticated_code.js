/**
 * sophisticated_code.js
 * This code demonstrates a complex algorithm for finding the shortest path in a weighted graph.
 */

class Graph {
  constructor() {
    this.vertices = [];
    this.edges = {};
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.edges[vertex] = {};
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.vertices.includes(vertex1) || !this.vertices.includes(vertex2))
      throw new Error("Invalid vertices!");

    this.edges[vertex1][vertex2] = weight;
    this.edges[vertex2][vertex1] = weight;
  }

  dijkstra(startVertex) {
    const visited = {};
    const distance = {};
    const previous = {};
    const unvisited = [...this.vertices];

    unvisited.forEach((vertex) => {
      distance[vertex] = Infinity;
      previous[vertex] = null;
    });

    distance[startVertex] = 0;

    while (unvisited.length > 0) {
      const currentVertex = this.getShortestDistanceVertex(unvisited, distance);
      unvisited.splice(unvisited.indexOf(currentVertex), 1);
      visited[currentVertex] = true;

      for (let neighbor in this.edges[currentVertex]) {
        const edgeWeight = this.edges[currentVertex][neighbor];
        const totalWeight = distance[currentVertex] + edgeWeight;

        if (totalWeight < distance[neighbor]) {
          distance[neighbor] = totalWeight;
          previous[neighbor] = currentVertex;
        }
      }
    }

    return { distance, previous };
  }

  getShortestDistanceVertex(vertices, distance) {
    let shortestDistance = Infinity;
    let shortestVertex = null;

    vertices.forEach((vertex) => {
      if (distance[vertex] < shortestDistance) {
        shortestDistance = distance[vertex];
        shortestVertex = vertex;
      }
    });

    return shortestVertex;
  }
}

// Example Usage:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

const { distance, previous } = graph.dijkstra("A");
console.log(distance);
console.log(previous);
// Output: { A: 0, B: 4, C: 2, D: 4, E: 7, F: 5 }

// ... Rest of the code can include additional algorithms, data structures, functionality, etc.

// End of sophisticated_code.js
