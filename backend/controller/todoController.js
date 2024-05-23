const Todo = require("../model/todoModel.js")

exports.createtodo = async (req, res) => {
  try {
    let {title, des}  = req.body
    let newTodo = await Todo.create({title,des})
    res.json({ message: "Create Successfully", data: newTodo });
  } catch (err) {
    res.json({ message: "Create Unsuccessfully", err });
  }
}
exports.getTodo = async (req, res) => {
  try {
    let allTodo = await Todo.find({})
    res.send(allTodo);
  } catch (err) {
    res.json({ message: "Todo Fetch Unsuccessfully", err });
  }
}
exports.getSingleTodo = async (req, res) => {
  try {
    let {id} = req.params
    let allTodo = await Todo.findById(id)
    res.send(allTodo);
  } catch (err) {
    res.json({ message: "Todo Fetch Unsuccessfully", err });
  }
}
exports.editTodo = async (req, res) => {
  try {
    let {id} = req.params
    let updateTodo = await Todo.findByIdAndUpdate(id,req.body)
    res.json({ message: "Todo Update Successfully", data: updateTodo });
  } catch (err) {
    res.json({ message: "Todo Update Unsuccessfully", err });
  }
}
exports.deleteTodo = async (req, res) => {
  try {
    let {id} = req.params
    let updateTodo = await Todo.findByIdAndDelete(id,req.body)
    res.json({ message: "Todo Delete Successfully", data: updateTodo });
  } catch (err) {
    res.json({ message: "Todo Delete Unsuccessfully", err });
  }
}