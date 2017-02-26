const Location = require('../models/location').LocationModel;

function locationsIndex(req, res) {
  Location.find((err, locations) => {
    if (err) return res.status(500).json({ error: err });
    return res.json(locations);
  });
}

function locationsCreate(req, res) {
  Location.create(req.body, (err, location) => {
    if (err) return res.status(500).json({ error: err });
    return res.json(location);
  });
}

function locationsShow(req, res) {
  Location.findById(req.params.id, (err, location) => {
    if (err) return res.status(500).json({ error: err });
    return res.json(location);
  });
}

function locationsUpdate(req, res) {
  Location.findById(req.params.id, (err, location) => {
    if(err) return res.status(500).json({ error: err });
    if(!location) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      location[key] = req.body[key];
    }

    Location.save((err, location) => {
      if(err) return res.status(400).json({ error: err });
      res.json(location);
    });
  });
}

function locationsDelete(req, res) {
  Location.findById(req.params.id, (err, location) => {
    if(err) return res.status(500).json({ error: err });
    if(!location) return res.status(404).json({ error: 'Not found' });

    Location.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: locationsIndex,
  create: locationsCreate,
  show: locationsShow,
  update: locationsUpdate,
  delete: locationsDelete
};
