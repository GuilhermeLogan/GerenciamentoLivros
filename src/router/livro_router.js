const express = require("express");
const livro_controllers = require("../controllers/livro_controllers.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(livro_controllers.index())
})

router.get("/:id", (req, res) => {
    res.json(livro_controllers.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = livro_controllers.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = livro_controllers.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    livro_controllers.destroy(req.params.id)
    res.json()
})

module.exports = router