const Friend = require('../models/friend').friendModel;

function friendsIndex(req, res) {
  Friend.find((err, friends) => {
    if (err) return res.status(500).json({ error: err });
    return res.json(friends);
  });
}

function friendsCreate(req, res) {
  Friend.create(req.body, (err, friend) => {
    if (err) return res.status(500).json({ error: err });
    return res.json(friend);
  });
}

function friendsShow(req, res) {
  Friend.findById(req.params.id, (err, friend) => {
    if (err) return res.status(500).json({ error: err });
    return res.json(friend);
  });
}

function friendsUpdate(req, res) {
  Friend.findById(req.params.id, (err, friend) => {
    if(err) return res.status(500).json({ error: err });
    if(!friend) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      friend[key] = req.body[key];
    }

    Friend.save((err, friend) => {
      if(err) return res.status(400).json({ error: err });
      res.json(friend);
    });
  });
}

function friendsDelete(req, res) {
  Friend.findById(req.params.id, (err, friend) => {
    if(err) return res.status(500).json({ error: err });
    if(!friend) return res.status(404).json({ error: 'Not found' });

    Friend.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: friendsIndex,
  create: friendsCreate,
  show: friendsShow,
  update: friendsUpdate,
  delete: friendsDelete
};
