const package = require('../../../../package.json');
const config = require('../../../config.js');
const d = require("discord.js");

module.exports = {
    name: "botinfo",
    description: "Provides information and statistics about the bot",
    aliases: ['bi', "bot", "infobot", "bot-info", "info-bot", "ib"],
    async run(message, args, bot) {
        const em = new d.MessageEmbed()
        .setAuthor(`${bot.user.username} Information`, `${bot.user.displayAvatarURL({format:`png`})}`)
        .setColor('RANDOM')
        .setDescription(`Hello! I'm Hatsune Miku, an ${package.description.slice(3)}`)
        .addFields(
            {
                name: "**Stats**", value: `**Servers**: \`${bot.guilds.cache.size}\`\n**Total Users**: \`${bot.users.cache.size}\``, inline: true,
            },
            {
                name: "**Versions**", value: `**Node.JS**: v12.18.3\n**Discord.JS**: v${package.dependencies["discord.js"].slice(1)}`, inline: true,
            })
        message.channel.send(em);
    }
};