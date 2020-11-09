const d = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: "hug",
    description: "Hugs someone",
    async run(message, args, bot) {
        const res = await fetch('https://some-random-api.ml/animu/hug');
        const json = await res.json();
        let user = message.mentions.members.first();
        if (!user) {
            const returnEmbed = new d.MessageEmbed()
            .setDescription("**You didn't provide who to hug**:\n\`\`\`\nhat hug [user]\n          ^^^^\`\`\`")
            .setColor('RANDOM');
            return message.channel.send(returnEmbed);
        } else if(user === message.member) {
            const returnEmbed = new d.MessageEmbed()
            .setDescription("**Looks like you can't hug yourself!**")
            .setColor('RANDOM')
            return message.channel.send(returnEmbed);
        } else {
            const em = new d.MessageEmbed()
            .setAuthor(`${message.author.username} hugged ${user.user.username}!`, `${message.author.displayAvatarURL({format:`png`,dynamic:true})}`)
            .setColor('RANDOM')
            .setImage(json.link);
            message.channel.send(em)
        }
    }
}