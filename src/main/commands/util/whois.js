const d = require("discord.js");

module.exports = {
    name: "whois",
    description: "Provides information about a user.",
    async run(message, args, bot) {
        let user = message.mentions.members.first() || message.member;
        if (user.user === bot.user) {
            const returnEmbed = new d.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`**Are you dumb? You can literally just use** \`hat botinfo\` **if you wanna get info on me**`)
            .setThumbnail('https://cdn.discordapp.com/attachments/775501959242579989/775502053296046101/19581aca5d78feac3a180971f24d399b.png')
            return message.channel.send(returnEmbed);
        };
        const em = new d.MessageEmbed()
        .setAuthor(`${user.user.tag}`, `${user.user.displayAvatarURL({format:`png`,dynamic:true})}`)
        .setColor('RANDOM')
        .addFields(
            {
                name: "**User Information**", value: `**Username**: ${user.user.username}\n**Discriminator**: \`#${user.user.discriminator}\`\n**ID**: \`${user.user.id}\`\n**Created At**: ${user.user.createdAt}\n**Bot**: ${user.user.bot ? "Yes" : `No`}`, inline: true,
            },
            {
                name: "Guild Member Information", value: `**Joined At**: ${user.joinedAt}\n**Highest Role**: ${user.roles.highest}`, inline: true,
            }
        )
        .setThumbnail(`${user.user.displayAvatarURL({format:`png`,dynamic:true})}`)
        message.channel.send(em)
    }
}