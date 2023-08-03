const TaskModel = require('../models/TaskModel')

module.exports.getTask = async (req,res) => {
    const Task = await TaskModel.find()
    res.send(Task)
}