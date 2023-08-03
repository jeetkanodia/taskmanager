const { Router } = require("express");
const { getTask } = require("../controllers/TaskController");

const router = Router()

router.get('/' , getTask)

module.exports = router;
