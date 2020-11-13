const d = require('discord.js');

module.exports = {
    name: "http",
    description: "Shows a random HTTP Cat",
    async run(message, args, bot) {
        const em = new d.MessageEmbed()
        .setAuthor(`Random HTTP cat`, `${message.author.displayAvatarURL({format:`png`,dynamic:true})}`)
        .setImage(`https://http.cat/${Math.floor(Math.random() * 511) + 1}`)
        .setColor('RANDOM')
        message.channel.send(em)
    }
};