import express from 'express';
import {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
  validate,
} from '../handlers/todoHandlers.js';

const router = express.Router();

router.post('/todos', validate, createTodo);
router.put('/todos/:id',validate, updateTodo);

router.get('/todos', getTodos);
router.get('/todos/:id', getTodoById);
router.delete('/todos/:id', deleteTodo);

export default router;
