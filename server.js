// /!\ nodemon: restarts app when change is made /!\

const express = require('express') // Requiring Express library
const app = express() // Creating new Express app
const database = require("./database")

app.set("view engine", "ejs") // Express knows that if I'm rendering through
                              // templates it will be EJS
app.use(express.urlencoded({extended: true}))

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

app.get("/notes", (req,res) => {
    const notes = database.getNotes()
    res.render("notes.ejs", {
        notes, 
    })
})

app.get("/notes/:id", (req,res) => {
    const id = +req.params.id
    //const note = notes.find(note => note.id === id) // find method: searches elements of arrays until condition in callback function is satisfied
    const note = database.getNote(id)
    if (!note){
        res.status(404).render("note404.ejs")
        return
    }
    res.render("singleNote.ejs", {
        note,
    })
})

app.get("/createNote", (req,res) => {
    res.render("createNote.ejs")
})

app.post("/notes", (req,res) => {
    const data = req.body 

    database.addNote(data)
    res.redirect("/notes")
})

app.use(express.static('public'))

// Callback function that will be called when successfully listening
// for HTTP requests
const port = 8081 // Port used when app is listening for HTTP requests
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// 80: HTTP
// 443: HTTPS
// < 1024: priviledged port (app shouldn't have priviledged access at beginning)


