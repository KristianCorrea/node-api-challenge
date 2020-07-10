const express = require("express");
const router = express.Router()

const projects = require("../data/helpers/projectModel");

router.get("/", (req, res) => {
    projects.get()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.get("/:id", (req, res) => {
    projects.get(req.params.id)
        .then(project=>{
            res.status(200).json(project)
        })
        .catch(error=>{
            res.status(500).json(error)
        })
})

router.post("/", (req, res)=>{
    projects.insert(req.body)
        .then(newProject=>{
            res.status(200).json(newProject)
        })
        .catch(error=>{
            res.status(500).json(error)
        })
})

router.put("/:id", (req, res)=>{
    projects.update(req.params.id, req.body)
        .then(edittedProject=>{
            res.status(200).json(edittedProject)
        })
        .catch(error=>{
            res.status(500).json(error)
        })
})

router.get("/:id/actions", (req, res)=>{
    projects.getProjectActions(req.params.id)
        .then(actions=>{
            res.status(200).json(actions)
        })
        .catch(error=>{
            res.status(500).json(error)
        })
})

router.delete("/:id", (req, res)=>{
    projects.remove(req.params.id)
        .then(deletedProject=>{
            res.status(200).json(deletedProject)
        })
        .catch(error=>{
            res.status(500).json(error)
        })
})

module.exports = router;