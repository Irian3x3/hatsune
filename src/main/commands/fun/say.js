const d = require('discord.js');

module.exports = {
    name: "say",
    description: "Makes the bot say something.",
    aliases: ['echo'],
    async run(message, args, bot) {
        let toSay = args.join(" ");
        if (!toSay) {
            const returnEmbed = new d.MessageEmbed()
            .setDescription("**You didn't provide what to say**:\n\`\`\`\nhat say [to say]\n          ^^^^\`\`\`")
            .setColor('RED');
            return message.channel.send(returnEmbed);
        } else {
            const em = new d.MessageEmbed()
            .setAuthor(`${message.author.tag} says:`, `${message.author.displayAvatarURL({format:`png`,dynamic:true})}`)
            .setDescription(`${toSay}`)
            .setColor(`RANDOM`)
            .setTimestamp();
            message.channel.send(em)
        }
    }
}