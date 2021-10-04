const express = require('express')

const app  = express();
app.use(express.urlencoded({ extended: true}))
app.get('/', (req, res) => {
    console.log("Health check api");
    res.json({ data: "Health check api" });
})
if (process.env.NODE_ENV !== 'test') {
    app.listen(9000);    
}


module.exports = { app }