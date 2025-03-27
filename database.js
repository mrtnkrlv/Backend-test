// Fake db while real db is being built 
const notes = [
    {
        id: 1,
        title: "My first note",
        timestamp: Date.now(),
        contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 2,
        title: "My second note",
        timestamp: Date.now(),
        contents: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]

function getNotes() {
    return notes 
}
exports.getNotes = getNotes

function getNote(id) {
    return notes.find(note => note.id === id)
}
exports.getNote = getNote

function addNote(note) {
    notes.push({
        ...note,
        id: notes.length+1,
        timestamp: Date.now()
    })
}
exports.addNote = addNote

function deleteNote(id) {

}
exports.deleteNote = deleteNote
