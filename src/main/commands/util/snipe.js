const d = require("discord.js");

module.exports = {
    name: "snipe",
    description: "Shows the last deleted message in a channel.",
    async run(message, args, bot) {
        if (!bot.snipes.get(message.channel.id)) {
            return;
        } else {
            const em = new d.MessageEmbed()
            .setAuthor(`${bot.snipes.get(message.channel.id).author.tag} deleted`, `${bot.snipes.get(message.channel.id).author.displayAvatarURL({dynamic:true,format:`png`})}`)
            .setDescription(`${bot.snipes.get(message.channel.id).content}`)
            .setColor(`RANDOM`)
            .setTimestamp(`${bot.snipes.get(message.channel.id).timestamp}`);
            message.channel.send(em)
        }
    }
}