const d = require('discord.js');

module.exports = {
    name: "avatar",
    description: "Provides a user's avatar.",
    aliases: ['av'],
    async run(message, args, bot) {
        let user = message.mentions.members.first() || message.member;
        const em = new d.MessageEmbed()
        .setAuthor(`${user.user.tag}'s Avatar`, `${user.user.displayAvatarURL({format:`png`,dynamic:true})}`)
        .setDescription(`[png](${user.user.displayAvatarURL({format:`png`})}) | [jpg](${user.user.displayAvatarURL({format:`jpg`})}) | [webp](${user.user.displayAvatarURL({format:`webp`})})`)
        .setImage(`${user.user.displayAvatarURL({format:`png`,dynamic:true})}`)
        .setColor('RANDOM')
        message.channel.send(em)
    }
}