const Discord = require("discord.js");
const config = require('../config.js');
module.exports = async client => {
  client.user.setPresence({ activity: { type: "WATCHING", name: `Axioma <3`}, status: 'dnd' })
  console.log("Aktif!")
};
