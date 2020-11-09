const discord = require("discord.js");
const fs = require('fs');
const Config = require('./config.js');
const config = new Config();
const bot = new discord.Client({disableMentions: "everyone"});

bot.commands = new discord.Collection();

const commandDir = `./src/main/commands`
const folders = fs.readdirSync(commandDir);
for (const category of folders) {
    const folder = fs.readdirSync(`${commandDir}/${category}`).filter(file => file.endsWith('.js'));
    for (const cmdFile of folder) {
        const command = require(`../${commandDir}/${category}/${cmdFile}`)
        bot.commands.set(command.name, command);
    }
}

bot.on('ready', async() => {
    console.log(`Ready, ${bot.user.tag}.`)
    bot.user.setPresence({activity: {type: "WATCHING",name: `Anime | ${config.prefix} help`}})
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
})

bot.login(config.token);