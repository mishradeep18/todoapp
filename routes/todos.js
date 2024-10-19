const express  = require("express");
const router = express.Router();

//import controllr 
const {createTodo} = require("../controllers/createTodo");
const {getTodo} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const{deleteTod} = require("../controllers/deleteTodo");

//define APi routes
router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router; 
