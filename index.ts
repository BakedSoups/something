import DiscordJS, { Intents } from 'discord.js'
import dotenv from'dotenv'
const {Client, MessageAttachment} = require('discord.js');
const PREFIX= '!'; 

dotenv.config()

const bot = new DiscordJS.Client
({
intents:
[
Intents.FLAGS.GUILDS,
Intents.FLAGS.GUILD_MESSAGES
]

})

bot.on('ready',() =>{console.log('the boy is ready')})

bot.on('messageCreate', (message)=>
{
if(message.content == 'test')
    message.reply
    ({
        content: 'yeah',
    })
})

bot.on('messageCreate' , function (message) {
        let args = message.content.substring(PREFIX.length).split(" ");
        switch (args[0]) 
        {
            case 'send':
                const attachment = new MessageAttachment('https://cdn.discordapp.com/attachments/747563326950604892/947562247406878752/IMG_3830.jpg');
                message.channel.send(attachment);
            break;
        }
    })
    bot.login(process.env.TOKEN) 