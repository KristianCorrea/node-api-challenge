const express = require("express");
const server = express();

const projectRouter = require("./routers/projectRouter.js");
const actionRouter = require("./routers/actionRouter.js");

server.use(express.json());
server.use("/api/projects", projectRouter)
server.use("/api/actions", actionRouter)
server.get("/", (req, res) =>{
    res.status(200).json({status: "server running"})
});

module.exports=server;