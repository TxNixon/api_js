import { todos } from './db.js';

export function validate(req, res, next){
  const { title, description } = req.body;
  
  if (title === ''){
    res.status(400).json({
      success: false,
      errors :{
        title: 'Cannot be an empty string'}
    })
  };
  if (title.length < 5){
    res.status(400).send('Title should be at least 5 characters long');
  }
  
  if (description === undefined || description === ''){
    res.status(400).send('Description is required');
    console.log("hello world");
  }
  else{
    next();
  };
}

export const createTodo = (req, res) => {
  const { title, description } = req.body;
  const newTodo = {
    id: todos.length + 1,
    title,
    description,
    createdAt: new Date().toISOString()
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

export const getTodos = (req, res) => {
  res.status(200).json(todos);
};

export const getTodoById = (req, res) => {
  const { id } = req.params;
  const todo = todos.find(t => t.id === parseInt(id));
  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).send('Todo not found');
  }
};

export const updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const todo = todos.find(t => t.id === parseInt(id));
  if (todo) {
    todo.title = title;
    todo.description = description;
    res.status(200).json(todo);
  } else {
    res.status(404).send('Todo not found');
  }
};

export const deleteTodo = (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(t => t.id === parseInt(id));
  if (index !== -1) {
    todos.splice(index, 1);
    res.status(200).send('Todo deleted');
  } else {
    res.status(404).send('Todo not found');
  }
};
