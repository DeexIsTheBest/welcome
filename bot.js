const Discord = require('discord.js');
const client = new Discord.Client();
client.on('guildMemberAdd', member => {
     var guild;
    while (!guild)
        guild = client.guilds.get("524232585954721814") 
let channel = member.guild.channels.find('name', 'moments-📖');
  if (!channel) return; 
client.channels.get("524250354594873347").send(`**.# Welcome To  Moments | Server, , :black_heart::crown:**`) 
});
client.login(process.env.BOT_TOKEN);
