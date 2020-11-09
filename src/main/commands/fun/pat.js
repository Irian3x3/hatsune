const d = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "pat",
    description: "Pat someone",
    async run(message, args, bot) {
        const res = await fetch('https://some-random-api.ml/animu/pat');
        const json = await res.json();
        let user = message.mentions.members.first();
        if (!user) {
            const returnEmbed = new d.MessageEmbed()
            .setDescription("**You didn't provide who to pat**:\n\`\`\`\nhat pat [user]\n          ^^^^\`\`\`")
            .setColor('RANDOM');
            return message.channel.send(returnEmbed);
        } else if(user === message.member) {
            const returnEmbed = new d.MessageEmbed()
            .setDescription("**Looks like you can't pat yourself!**")
            .setColor('RANDOM')
            return message.channel.send(returnEmbed);
        } else {
            const em = new d.MessageEmbed()
            .setAuthor(`${message.author.username} patted ${user.user.username}!`, `${message.author.displayAvatarURL({format:`png`,dynamic:true})}`)
            .setColor('RANDOM')
            .setImage(json.link);
            message.channel.send(em)
        }
    }
}