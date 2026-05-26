import { Router } from 'express';
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employeeController.js';
import { protect } from '../middleware/auth.js';
import { protectAdmin } from '../middleware/auth.js';

const employeesRouter = Router();

employeesRouter.get('/', protect, protectAdmin, getEmployees);
employeesRouter.post('/', protect, protectAdmin, createEmployee);
employeesRouter.put('/:id', protect, protectAdmin, updateEmployee);
employeesRouter.delete('/:id', protect, protectAdmin, deleteEmployee);

export default employeesRouter;