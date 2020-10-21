import APIGraph from "./APIGraph";

class APIGraphList {
    constructor(jsonData) {
        this.graphs = this.sanitizeJSON(jsonData).map(graph => new APIGraph(graph));
    }

    getGraph(name) {
        return this.graphs.find(graph => graph.name === name);
    }

    sanitizeJSON(jsonData) {
        return JSON.parse(JSON.parse(jsonData)).map(graph_list => JSON.parse(graph_list));
    }
}

export default APIGraphList;