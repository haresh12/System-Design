import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// THIS ONE IS GOOD ONE ITS LIKE MIDDLEWARE NOW WE DON'T HAVE TO DO req.body().json() in each request
app.use(bodyParser.json());

const PORT = 3000

//LOGS ARE GETTING PRINT IN TERMINAL NOT IN CONSOLE
app.all('/',(req,res) => {
    res.send('I AM UP GUYS')
})
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})

let todos = [
{
  id : 1,
  title : "Complete DSA",
  description : "Will do one day"
},
{
    id : 2,
    title : 'Again saying complete DSA',
    description : 'Again saying will do some day'
}
]

// READ
app.get('/todos',(req,res) => {
   res.send(todos)
})


// CREATE
// IN POSTMAN WE NEED TO SELECT JSON FORMAT IN ROW 
// BECAUSE BY DEFAULT ITS TEXT AND IF YOU ARE SENDING
// OBJECT AS TEXT THEN THIS BODY OBJECT WILL BE {} BLANK
app.post('/todos',(req,res) => {
   if(req.body.id){
    console.log(req.body)
     todos.push(req.body);
     res.send("Todo successfully added")
   }else{
    res.statusCode = 400;
      res.send({
        message : "Something went wrong"
      })
   }  
})


// UPDATE
// good example where we are passing params
app.put('/todos/:id',(req,res) => {
  let todoId = parseInt(req.params.id); 
  
  let findIndex = todos.findIndex((todo) => todo.id ===  todoId)

  if(findIndex !== -1){
    let updatedTodo = {
        id : todoId,
        ... req.body
    }
    todos[findIndex] = updatedTodo
    res.json({
        updatedTodo,
        message : "Kr diya update"
    })
  }
})



// DELETE
app.delete('/todos/:id',(req,res) => {
 let todoId = parseInt(req.params.id);
 
 todos = todos.filter((todo) => todo.id !== todoId)

 res.send("Todo deleted successfully")
})