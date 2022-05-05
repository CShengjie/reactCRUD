const express = require('express');
const router = express.Router();

const addTask = require('../functions/addTask')
const showTask = require('../functions/showTask')
const updateTask = require('../functions/updateTask')
const deleteTask = require('../functions/deleteTask')

router.post("/add", addTask)
router.get("/show", showTask)
router.put("/update", updateTask)
router.delete("/delete", deleteTask)

module.exports = router;