﻿const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("639124770939731992")
setInterval(function() {
channel.send(`credit credit credit credit credit credit credit credit credit credit credit`);
}, 30)
})

client.login(process.env.BOT_TOKEN);