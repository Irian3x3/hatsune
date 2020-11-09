const d = require("discord.js");

module.exports = {
    name: "ping",
    description: "Provides the bot's ping/latency in milliseconds.",
    async run(message, args, bot) {
        const em1 = new d.MessageEmbed()
        .setDescription('Ping...')
        .setColor(`BLACK`);
        const em = new d.MessageEmbed()
        .setAuthor(`Bot's ping`, `${bot.user.displayAvatarURL({format:`png`})}`)
        .addField("**Message Latency**", `\`\`\`js\n${Date.now() - message.createdTimestamp} ms\`\`\``, true)
        .addField("**API Latency**", `\`\`\`js\n${Math.round(bot.ws.ping)} ms\`\`\``, true)
        .setColor(`RANDOM`);
        const msg = await message.channel.send(em1);
        msg.edit(em)
    }
}