const express = require("express");
const aluguel_controllers = require("../controllers/aluguel_controllers.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(aluguel_controllers.index())
})

router.get("/:id", (req, res) => {
    res.json(aluguel_controllers.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = aluguel_controllers.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = aluguel_controllers.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    aluguel_controllers.destroy(req.params.id)
    res.json()
})

module.exports = router