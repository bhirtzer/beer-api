const express = require('express');
const Cider = require('../models/cider');

const ciderRouter = express.Router();

ciderRouter.post('/', (req, res) => {
    let cider = new Cider();
    cider.name = req.body.name;
    cider.rating = req.body.rating;
    cider.save((err, document) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(`Saved your cider!\n${document}`)
        }
    })
})

ciderRouter.get('/', (req, res) => {
    Cider.find((err, documents) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.json(documents);
        }
    })
})

ciderRouter.get('/:cider_id', (req, res) => {
    Cider.findById(req.params.cider_id, (err, document) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.json(document);
        }
    })
})

ciderRouter.put('/:cider_id', (req, res) => {
    Cider.findById(req.params.cider_id, (err, document) => {
        if (err) {
            res.status(400).send(err);
        } else {
            document.name = req.body.name;
            document.rating = req.body.rating;

            document.save((savedErr, savedDocument) => {
                if (savedErr) {
                    res.stats(400).send(savedErr);
                } else {
                    res.send(`cider posted!\n${savedDocument}`);
                }
            })
        }
    })
})

ciderRouter.delete('/:cider_id', (req, res) => {
    Cider.deleteOne({
        _id: req.params.cider_id
    }, (err, document) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(`You successfully deleted cider: ${req.params.cider_id}`);
        }
    })
})



module.exports = ciderRouter;