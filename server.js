const express = require('express');
const connectDB = require('./config/db')
const path = require('path');

const app= express();

// Connect to mongo DB
connectDB();

//initialize middleware
app.use(express.json({extended: false}));


//define routes
app.use('/api/users' , require('./routes/user'));
app.use('/api/auth' , require('./routes/auth'));
app.use('/api/report' , require('./routes/report'));
app.use('/api/queries' , require('./routes/queries'));

//server static assets in production

if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('be-youtiful/build'));

    app.get('*',(req,res) => res.sendFile(path.resolve(__dirname, 'be-youtiful', 'build','index.html')))
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

