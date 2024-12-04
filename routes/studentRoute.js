import express from "express";
import studentController from "../controllers/studentController.js";
const {createStudent, getAll, getById, updateStudent,deleteStudent }  = studentController;
 const studentRoute = express.Router();


studentRoute.post('/create', createStudent);
studentRoute.get('/getAll', getAll);
studentRoute.get('/:id', getById);
studentRoute.put('/update/:id', updateStudent);
studentRoute.delete('/delete/:id', deleteStudent);

export default studentRoute;