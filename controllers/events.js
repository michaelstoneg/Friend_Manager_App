const Event = require('../models/event').eventModel;

function eventsIndex(req, res) {
  Event.find((err, events) => {
    if (err) return res.status(500).json({ error: err });
    return res.json(events);
  });
}

function eventsCreate(req, res) {
  Event.create(req.body, (err, event) => {
    if (err) return res.status(500).json({ error: err });
    return res.json(event);
  });
}

function eventsShow(req, res) {
  Event.findById(req.params.id, (err, event) => {
    if (err) return res.status(500).json({ error: err });
    return res.json(event);
  });
}

function eventsUpdate(req, res) {
  Event.findById(req.params.id, (err, event) => {
    if(err) return res.status(500).json({ error: err });
    if(!event) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      event[key] = req.body[key];
    }

    Event.save((err, event) => {
      if(err) return res.status(400).json({ error: err });
      res.json(event);
    });
  });
}

function eventsDelete(req, res) {
  Event.findById(req.params.id, (err, event) => {
    if(err) return res.status(500).json({ error: err });
    if(!event) return res.status(404).json({ error: 'Not found' });

    Event.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: eventsIndex,
  create: eventsCreate,
  show: eventsShow,
  update: eventsUpdate,
  delete: eventsDelete
};