class Vertex:
    def __init__(self,id):
        self.id = id
        self.connectedTo = {}
    def addNeighbour(self,id,weight):
        self.connectedTo[id] = weight
    def getConnections(self):
        return self.connectedTo.keys()
    def __str__(self):
        return str(self.id)+str(self.connectedTo)
    def getId(self):
        return self.id
    def getWeight(self,id):
        return self.connectedTo[id]
class Graph:
    def __init__(self):
        setf.vertexList = {}
        self.size = 0;
        
    def addVertex(self,id):
        self.size += 1
        newVertex = Vertex(id)
        self.vertList[id] = newVertex
        return newVertex
    
    def getVertex(self,id):
        if id in self.vertexList:
            return self.vertexList[id]
        else:
            return None
    def addEdge(self,fromId,toId,cost=0):
        if fromId not in self.vertexList:
            self.vertexList.add(fromId)
        if toId not in self.vertexList:
            self.vertexList.add(toId)
        self.vertexList[fromId].addNeighbour(self.vertexList[toId],cost)
    def getVertices(self):
        return self.vertexList.keys()
    def __iter__(self):
        return iter(self.vertexList.values())
        
            