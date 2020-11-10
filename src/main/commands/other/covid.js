const d = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "covid",
    description: "Provides global COVID-19 stats.",
    async run(message, args, bot) {
        const res = await fetch(`https://api.covid19api.com/summary`)
        const json = await res.json();
        const em = new d.MessageEmbed()
        .setAuthor(`Global COVID-19 stats`)
        .setDescription(`**Note**: **These stats are fetched from https://api.covid19api.com/summary and may not always be correct.**\n\n**New Confirmed**: \`${json.Global.NewConfirmed}\`\n**Total Confirmed**: \`${json.Global.TotalConfirmed}\`\n\n**New Deaths**: \`${json.Global.NewDeaths}\`\n**Total Deaths**: \`${json.Global.TotalDeaths}\`\n\n**New Recovered**: \`${json.Global.NewRecovered}\`\n**Total Recovered**: \`${json.Global.TotalRecovered}\``)
        .setColor('RANDOM')
        .setThumbnail(`https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/110px-SARS-CoV-2_without_background.png`);
        message.channel.send(em)
    }
}