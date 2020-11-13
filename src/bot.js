const discord = require("discord.js");
const fs = require('fs');
const ms = require("ms");
const Config = require('./config.js');
const config = new Config();
const bot = new discord.Client({disableMentions: "everyone"});

bot.commands = new discord.Collection();
bot.snipes = new discord.Collection();

const commandDir = `./src/main/commands`
const folders = fs.readdirSync(commandDir);
for (const category of folders) {
    const folder = fs.readdirSync(`${commandDir}/${category}`).filter(file => file.endsWith('.js'));
    for (const cmdFile of folder) {
        const command = require(`../${commandDir}/${category}/${cmdFile}`)
        bot.commands.set(command.name, command);
    }
}

bot.on('ready', async () => {
    console.log(`Watching Anime with ${bot.user.tag}.`)
    setInterval(async () => {
        bot.user.setPresence({activity: {type: "WATCHING",name: `Anime | ${config.prefix} help`}, status: `dnd`})
    }, ms('10m'));
});

bot.on('message', async message => {
    if (!message.content.startsWith(config.prefix)) return;
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();
    
    const command = bot.commands.get(cmd) || bot.commands.find(c => c.aliases && c.aliases.includes(cmd));

    if (!command) return;

    try {
        command.run(message, args, bot)
    } catch (e) {
        console.error(`${message.author.tag} got an error executing ${command.name}:\n${e}`)
        message.channel.send(`It looks like something went wrong...\nThere was an error executing \`${command.name}\`: \`${e}\`\nPlease report this to the developer of the bot.`)
    }
});

bot.on('guildCreate', async guild => {
    if(!config.newGuildChannelID) return;
    let chn = bot.channels.cache.get(config.newGuildChannelID);
    const em = new discord.MessageEmbed()
    .setAuthor(`Important, I have just been added to a guild.`, `https://cdn.discordapp.com/emojis/536987777372258339.png`)
    .setThumbnail(`${guild.iconURL({format:`png`,dynamic:true})}`)
    .setColor('RANDOM')
    .setDescription(`**Name**: \`${guild.name}\`\n**ID**: \`${guild.id}\`\n**Human Members**: \`${guild.members.cache.filter(mm => !mm.user.bot).size}\`\n**Created**: ${new Date(guild.createdAt).toLocaleString('en-US', {timeZone: "America/New_York"})} EST\n**Bot Added**: ${new Date(guild.me.joinedAt).toLocaleString('en-US',{timeZone:'America/New_York'})} EST`)
    chn.send(em)
});

bot.on('messageDelete', async msg => {
    if (!msg.content || msg.author.bot) {
        return;
    } else {
        bot.snipes.set(msg.channel.id, {
                content: msg.content, 
                author: msg.author, 
                timestamp: msg.createdAt
            });
    };
});

bot.login(config.token);
