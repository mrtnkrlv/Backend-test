// /!\ nodemon: restarts app when change is made /!\

const express = require('express') // Requiring Express library
const app = express() // Creating new Express app
app.set("view engine", "ejs") // Express knows that if I'm rendering through
                              // templates it will be EJS


/*
// Allowing HTTP get request to come in at root of URL
// Send back string "Hello world when request comes in"
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/goodbye", (req,res) => {
    res.send("<h1>Goodbye world!</h1>")
})
*/

app.get("/", (req,res) => {
    res.render("index.ejs", {
        numberOfIterations: 10
    })
})

const notes = [
    {
        id: 1,
        title: "My first note",
        timestamp: Date.now(),
        contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 2,
        title: "My second note",
        timestamp: Date.now(),
        contents: "Hello everyone!"
    }
]

app.get("/notes", (req,res) => {
    res.render("notes.ejs", {
        notes, 
    })
})

app.use(express.static("public"))

// Callback function that will be called when successfully listening
// for HTTP requests
const port = 8080 // Port used when app is listening for HTTP requests
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// 80: HTTP
// 443: HTTPS
// < 1024: priviledged port (app shouldn't have priviledged access at beginning)


