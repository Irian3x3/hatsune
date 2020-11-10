const config = require("discord.js");
const d = require("discord.js");

module.exports = {
    name: "links",
    description: "Provides links for the bot",
    aliases: ['invite'],
    async run(message, args, bot) {
        const em = new d.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Bot's Links", `${bot.user.displayAvatarURL({format:`png`})}`)
        .setDescription(`**Invite (Regular Permissions)** | https://discord.com/oauth2/authorize?client_id=${bot.user.id}&permissions=67488833&scope=bot\n\n**Invite (Admin Permissions)** | https://discord.com/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=bot\n\n**GitHub** | https://github.com/Irian3x3/${bot.user.username.toLowerCase()}\n\n**Support** | *coming soon:tm:*`)
        message.channel.send(em)
    }
};
