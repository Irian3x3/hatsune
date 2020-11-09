const d = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "wink",
    description: "Wink",
    async run(message, args, bot) {
        const res = await fetch('https://some-random-api.ml/animu/wink');
        const json = await res.json();
        const em = new d.MessageEmbed()
        .setAuthor(`${message.author.username} winked!`, `${message.author.displayAvatarURL({format:`png`,dynamic:true})}`)
        .setColor('RANDOM')
        .setImage(json.link);
        message.channel.send(em)
    }
}