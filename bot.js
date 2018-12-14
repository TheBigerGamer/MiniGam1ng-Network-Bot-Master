var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const config = require("./config.json");
​
const client = new Discord.Client();
const config = require("./config.json");
// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;
​
//ONLINE COMMAND
client.login(process.env.NTIyNDY2NTIwMjM3MDgwNTc2.DvLYfg.gxgGDQgVZD7KzXpPGA3ofufDJR0);

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});
​
client.commands = new Enmap();
​
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});
​
client.login(config.token);

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
 
  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(config.prefix + "foo")) {
    message.channel.send("bar!");
  }
});
if(message.author.id !== config.ownerID) return;
