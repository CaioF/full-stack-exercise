/*
api/index.js mounts all routes inside the api folder
these routes are mounted in ../server.js on the route '/api'
*/
const express = require('express');
const { TeamMember } = require('../../data/model');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API is working'
  });
});

router.get('/team', async (req, res, next) => {
    const team = await TeamMember.findAll({
      attributes: ['id', 'firstName', 'lastName', 'title', 'favoriteColor', 'story', 'photoUrl'],
      order: [['firstName', 'ASC']]
    });

    return res.json(team);
});

router.post('/team', async (req, res, next) => {
  const { firstName, lastName, title, favoriteColor } = req.body;
  let newTeamMember = await TeamMember.create({ firstName, lastName, title, favoriteColor, story: 'Hi!', photoUrl: 'https://via.placeholder.com/150' });

  return res.json(newTeamMember);
});

module.exports = router;
