const express = require('express');
const router = express.Router();

const {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo,
} = require('./controller/todoController');

router.get("/", function (req, res, next) {
    res.json({
      test: true,
    });
  });

router.get('/get-all-todos', getAllTodos );

router.post('/create-todo', createTodo);

router.put('/update-todo/:id', updateTodo);

router.delete('/delete-todo/:id', deleteTodo);

module.exports = router;