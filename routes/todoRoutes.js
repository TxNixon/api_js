import express from 'express';
import {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
  validateTitle,
} from '../handlers/todoHandlers.js';

const router = express.Router();

router.post('/todos', validateTitle,  createTodo);
router.put('/todos/:id', updateTodo);

router.get('/todos', getTodos);
router.get('/todos/:id', getTodoById);
router.delete('/todos/:id', deleteTodo);

export default router;
