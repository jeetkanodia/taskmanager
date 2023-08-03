const TaskModel = require('../models/TaskModel')

module.exports.getTask = async (req,res) => {
    const Task = await TaskModel.find()
    res.send(Task)
}


//create
module.exports.saveTask = async (req,res) => {
    const {title} = req.body
    const {description} = req.body
    console.log(req.body)
    TaskModel
    .create({title, description})
    .then((data)=>{
        console.log("Added task into the DB");
        console.log(data);
        res.send(data);
    })
}