class Graph {
    constructor(){
        this.adjacentList = {}
    }

    addVertex(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex] = [];
            return true;
        }
        return false;
    }

    addEdge(vertex1, vertex2){
        if(this.adjacentList[vertex1] && this.adjacentList[vertex2]){
            this.adjacentList[vertex1].push(vertex2);
            this.adjacentList[vertex2].push(vertex1);
            return true;
        }
        return false;
    }

    removeEdge(vertex1, vertex2){
        if(this.adjacentList[vertex1] && this.adjacentList[vertex2]){
            this.adjacentList[vertex1] = this.adjacentList[vertex1].filter(edge=> (edge != vertex2));
            this.adjacentList[vertex2] = this.adjacentList[vertex2].filter(edge=> (edge != vertex1));
            return true;
        }
        return false;
    }

    removeVertex(vertex){
        if(this.adjacentList[vertex]){
            for(let keys in this.adjacentList){
                this.adjacentList[keys] = this.adjacentList[keys].filter(edge=> (edge != vertex));
            }

            delete this.adjacentList[vertex];
            return this;
        }else{
            return undefined;
        }
    }
}

const graphObj = new Graph();

graphObj.addVertex('A');
graphObj.addVertex('B');
graphObj.addEdge('A', 'B')
graphObj.removeEdge('A', 'B')
graphObj.removeVertex('A')

console.log(graphObj);