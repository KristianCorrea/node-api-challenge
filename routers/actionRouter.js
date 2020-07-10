const express=require("express");
const router=express.Router();

const actions = require("../data/helpers/actionModel");

router.get("/", (req, res)=>{
    actions.get()
        .then(actions=>{
            res.status(200).json(actions)
        })
        .catch(error=>{
            res.status(500).json(error)
        })
})

router.get("/:id", (req, res)=>{
    actions.get(req.params.id)
        .then(action=>{
            res.status(200).json(action)
        })
        .catch(error=>{
            res.status(500).json(error)
        })
})

router.post("/", (req, res)=>{
    actions.insert(req.body)
        .then(newAction=>{
            res.status(200).json(newAction)
        })
        .catch(error=>{
            res.status(500).json(error)
        })
})

router.put("/:id", (req, res)=>{
    actions.update(req.params.id, req.body)
        .then(edittedAction=>{
            res.status(200).json(edittedAction)
        })
        .catch(error=>{
            res.status(500).json(error)
        })
})

router.delete("/:id", (req, res)=>{
    actions.remove(req.params.id)
        .then(deletedAction=>{
            res.status(200).json(deletedAction)
        })
        .catch(error=>{
            res.status(500).json(error)
        })
})

module.exports = router;