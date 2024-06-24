const express = require('express');
const app = express(); // instance of express

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

app.use(express.json()); //parse JSON bodies

app.get('/', (req, res) => {
    res.send('Welcome to our API');
})

app.post('/create-user', (req, res) => {
    const userData  = req.body;

    if(!req.body.name){
        return res.status(400).json({
            message: "Name is required"
        })
    }
    res.status(201).json({ 
        message: 'User successfully created', userData 
    })
})

app.put('/update-user/:id', (req, res) => {
    const userId  = req.params.id;
    const updatedData = req.body;

    res.json({ 
        message: `User ${userId} successfully updated`, updatedData
    })
})
