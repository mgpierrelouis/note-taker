const fs = require('fs')
const notesDB = JSON.parse(fs.readFileSync('./db/db.json'))
const path = require('path')

// ROUTING

module.exports = (app) => {

  app.get('/api/notes', (req, res) => res.json(notesDB));

  app.post('/api/notes', (req, res) => {
    let userNote = req.body;
    notesDB.push(userNote);
    fs.readFile('./db/db.json', (err) => {
      let renderNotes= JSON.stringify(notesDB)

      fs.writeFile('./db/db.json', renderNotes, (err) => {
        if (err) {
          return console.log(err)
        } res.json(notesDB)
      })
    })
  })

};
