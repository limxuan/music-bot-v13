const { Player } = require("discord-player");
const client = require("../index.js");

const player = new Player(client);

module.exports = player;
