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

client.login(process.env.NzE4MDQ4NzQ5OTc2NDIwMzc2.XtjNCA.eXOS2hI2fq-OVH4_hyV9Itw5WIw);//where BOT_TOKEN is the token of our bot
