function getNeighbors(row, col, graph) {
 let neighbors = []
  // Check top
 if (graph[row - 1] && graph[row -1][col]) neighbors.push([row - 1, col])
  // Check bottom
if (graph[row + 1] && graph[row +1][col]) neighbors.push([row + 1, col])
  // Check left
if (graph[row][col - 1]) neighbors.push([row, col -1])
  // Check right
if (graph[row][col + 1]) neighbors.push([row, col + 1])
  // Return neighbors
return neighbors
  // Your code here
}


function islandSize(row, col, graph) {
const visited = new Set()
  // Create a visited set to store visited nodes
const stack = [[row, col]]
  // Create a stack, put the starting node in the stack
visited.add([`${row}, ${col}`])
  // Put the stringified starting node in visited
let size = 0
  // Initialize size to 0

  // While the stack is not empty,
while (stack.length) {
  let pop = stack.pop()
  size++
  let neighborsArray = getNeighbors(...pop, graph)
  for (let neighbor of neighborsArray) {
    if (!visited.has(neighbor.toString()))
      stack.push(neighbor)
      visited.add(neighbor.toString())
  }
}
size--
return size
    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here
}

module.exports = [getNeighbors, islandSize];
