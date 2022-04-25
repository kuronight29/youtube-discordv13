const { Client, Intents, Collection } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: 32767 });

client.commands = new Collection();
client.aliases = new Collection();
client.categories = new Collection();
client.interactions = new Collection();
client.cooldowns = new Collection();

['command', 'event', 'slashCommand'].forEach(handler => require(`./handlers/${handler}`)(client));

client.login(process.env.TOKEN);
