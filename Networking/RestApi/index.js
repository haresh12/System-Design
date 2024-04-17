import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const PORT = 3000

//LOGS ARE GETTING PRINT IN TERMINAL NOT IN CONSOLE
app.all('/',(req,res) => {
    console.log('Request',req)
    console.log('Response',res) 
    res.send('I AM UP GUYS')
})
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})