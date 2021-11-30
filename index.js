// Code By Zortix, link of discord server --> https://discord.gg/zbpvrpcMwy

const { Client, Collection } = require("discord.js");
const fs = require("fs");
const client = new Client({ intents: 32767 });

// Client require
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Verification de la connection  
client.once('ready', async () => {
    console.log(`${client.user.tag} est maintenant connecté ✅`)
});

// Commande Ping (dans la vidéo)

// Importation Prefix + Token BOT
client.login(client.config.token);