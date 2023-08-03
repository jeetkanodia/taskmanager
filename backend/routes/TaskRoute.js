const { Router } = require("express");
const { getTask, saveTask } = require("../controllers/TaskController");

const router = Router()

router.get('/' , getTask)
router.post('/save' , saveTask)



module.exports = router;