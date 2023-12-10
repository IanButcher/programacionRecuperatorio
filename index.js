// Defining express
const express = require('express')
const app = express()
const port = 3000
// Extra path to open server
const path = require('path')
app.set('views',path.join(__dirname, '/views'))
// View engine and public path
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

// Get requests!
app.get('/', (req, res)=>{
    res.render('landingPage.ejs')
})

// Listen to port
app.listen(port, ()=>{
    console.log(`Server opened on port ${port}`)
})