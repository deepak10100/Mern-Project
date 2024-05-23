const express = require('express')
const { createtodo, getTodo, editTodo, deleteTodo, getSingleTodo } = require('../controller/todoController.js')
const router = express.Router()


router.get('/all-todo', getTodo  )
router.get('/single-todo/:id', getSingleTodo  )
router.post('/', createtodo  )
router.put('/edit-todo/:id', editTodo )
router.delete('/delete-todo/:id', deleteTodo )


module.exports = router