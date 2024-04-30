const Todo = require('../model/Todo')

async function getAllTodos(req, res, next) {
    try{
        let foundAllTodos = await Todo.find({});
        res.json({message: "success", payload: foundAllTodos})
    }catch(error){
        res.json({message:error, error})
    }
}

async function createTodo(req, res, next){
    try{
        const todo = req.body.todo;
        let newTodo = new Todo({
            todo: todo,
        })
        let finishedTodo = await newTodo.save();
        res.json({message: "success", payload: finishedTodo})
    }catch(e){
        res.json({message: "error", error: e.message })
    }
}

async function updateTodo(req, res){
    try{
        let updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({message: "success", payload: updatedTodo});
    }catch(e){
        res.json({message: "error", error: e.message})
    }
}

async function deleteTodo(req, res){
    try{
        let deleted = await Todo.findByIdAndRemove(req.params.id);
        res.json({message: "success", payload: deleted});
    }catch(e){
        res.json({message: "error", error: e.message})
    }
}

module.exports = {getAllTodos, createTodo, updateTodo, deleteTodo}