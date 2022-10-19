const path = require('path');
const fs = require('fs');
const express = require('express');
const { createNew } = require('../db/js/script');
const router = require('express').Router();
const uniqid = require('uniqid');
const notes = require('../db/db.json');


    router.get('/api/notes', (req, res) => {
        console.log(notes)
         res.json(notes);
     });


    router.post('/api/notes', (req, res) => {
        req.body.id = uniqid();

        let newNote = createNew(req.body, notes);
        res.json(newNote);
    });



    router.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });



   router.get('*', (req, res) => {
       res.sendFile(path.join(__dirname, "../public/index.html"));
   });

module.exports = router 


// const path = require('path');
// const fs = require('fs');
// const express = require('express');
// const { createNew } = require('../db/script');
// const router = require('express').Router();
// const uniqid = require('uniqid');
// const notes = require('../db/db.json');

// router.get('/api/notes', (req, res) => {
//     console.log(notes)
//     res.json(notes);

// });

// router.post('/api/notes', (req, res) => {
//     req.body.id = uniqid();

//     let newNote = createNew(req.body, notes);
//     res.json(newNote);

// });

// router.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/notes.html'));

// });

// router.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// module.exports = router