const d = require("discord.js");

module.exports = {
    name: "help",
    description: "Provides a full list of commands.",
    aliases: ['commands', 'cmds', "h"],
    async run(message, args, bot) {
        const em = new d.MessageEmbed()
        .setAuthor(`Help has arrived!`, `${bot.user.displayAvatarURL({format:`png`})}`)
        .setDescription(`\`<>\` - Optional\n \`[]\` - Required\n\n**Fun**:\n\`hug [user]\`: Hugs someone\n\`pat [user]\`: Pats someone\n\`say|echo [to say]\`: Makes the bot say something.\n\`wink\`: Wink.\n\n**Info**:\n\`botinfo|bot-info|bot|infobot|info-bot|ib|bi\`: Provides information and statistics on the bot.\n\`help|cmds|commands|h\`: This!\n\`links\`: Provides links for the bot\n\`ping\`: Provides bot's ping/latency in milliseconds.\n\n**Util**:\n\`whois <user>\`: Provides information about a certain user.\n\`serverinfo|server|si\`: Provides information and statistics about a server.\n\n**Other**:\n\`covid\`: Provides global COVID-19 stats.`)
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/774010416225452104/775388719272165417/red-spinny-thing.gif');
        message.channel.send(em)
    }
}
