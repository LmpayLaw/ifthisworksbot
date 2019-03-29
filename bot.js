const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTYwNjA0NTM4NTY3MDAwMTI0.D37zTg.qXpyt2EP7gH2Hl-YqA-O2trhch8);
