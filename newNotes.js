const fs = require('fs');
const path = require('path');


//zookeeper module as guide for functions
//saved note function
function findById (id, notesArray)  {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
};


//create note function
function newNote (note, notesArray) {
    notesArray.push(note)
    fs.writeFileSync(
        path.join(__dirname, '/db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
};



module.exports = { 
    newNote,
    findById,
};