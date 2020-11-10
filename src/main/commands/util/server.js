const d = require("discord.js");

module.exports = {
    name: "serverinfo",
    description: "Provides information and statistics about a server.",
    aliases: ['si', 'server'],
    async run(message, args, bot) {
        const estDate = (new Date(message.guild.createdAt)).toLocaleString('en-US', { 
            /*weekday: 'short',
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: 'long',
            hour12: false,
            minute: 'long',
            second: 'long',*/
            timeZone: 'America/New_York' 
        });

        let region;
        let regionIcon;
        if (message.guild.region === "russia") {
            region = 'Russia'
            regionIcon = '🇷🇺'
        } else if (message.guild.region === 'hongkong') {
            region = "Hong Kong"
            regionIcon = "🇭🇰"
        } else if (message.guild.region === "brazil") {
            region = 'Brazil'
            regionIcon = '🇧🇷'
        } else if (message.guild.region === "europe") {
            region = 'Europe'
            regionIcon = '🇪🇺'
        } else if (message.guild.region === "sydney") {
            region = 'Sydney'
            regionIcon = '🇸'
        } else if (message.guild.region === "southafrica") {
            region = 'South Africa'
            regionIcon = '🇿🇦'
        } else if (message.guild.region === "singapore") {
            region = "Singapore"
            regionIcon = "🇸🇬"
        } else if (message.guild.region === "us-south") {
            region = "US South"
            regionIcon = '🇺🇸'
        } else if (message.guild.region === "us-central") {
            region = 'US Central'
            regionIcon = '🇺🇸'
        } else if (message.guild.region === "us-west") {
            region = 'US West'
            regionIcon = '🇺🇸'
        } else if (message.guild.region === "us-east") {
            region = 'US East'
            regionIcon = '🇺🇸'
        } else if (message.guild.region === "india") {
            region = "India"
            regionIcon = "🇮🇳"
        } else if (message.guild.region === "japan") {
            region = 'Japan'
            regionIcon = '🇯🇵'
        };

        let verifLevel;
        if(message.guild.verificationLevel === "NONE") {
            verifLevel = 'None'
        } else if (message.guild.verificationLevel === "LOW") {
            verifLevel = 'Low'
        } else if(message.guild.verificationLevel === "MEDIUM") {
            verifLevel = 'Medium'
        } else if(message.guild.verificationLevel === "HIGH") {
            verifLevel = 'High'
        } else if(message.guild.verificationLevel === "VERY_HIGH") {
            verifLevel = 'Very High'
        };

        const em = new d.MessageEmbed()
        .setAuthor(`${message.guild.name}`, `${message.guild.iconURL({format:`png`,dynamic:true})}`)
        .setColor('RANDOM')
        .addFields(
            {
                name: "**Basic Information**", 
                value: `**Name**: ${message.guild.name}
                **ID**: \`${message.guild.id}\`
                **Member Count**: Human: \`${message.guild.members.cache.filter(mm => !mm.user.bot).size}\` | Bot: \`${message.guild.members.cache.filter(mm => mm.user.bot).size}\`
                **Owner**: <@${message.guild.ownerID}> (\`${message.guild.ownerID}\`)
                **Creation Date**: ${estDate} EST`, 
                inline: true,
            },
            {
                name: "**Other Information**",
                value: `**Verified**: ${message.guild.verified ? "Yes" : "No"}
                **Partnered**: ${message.guild.partnered ? 'Yes': "No"}
                **AFK**: Channel: ${message.guild.afkChannel} | Timeout (in seconds): \`${message.guild.afkTimeout}\`
                **Region**: ${regionIcon} ${region}
                **Verification Level**: ${verifLevel}
                `,
                inline: true
            },
            {
                name: "**Numbers**", 
                value: `**Roles**: \`${message.guild.roles.cache.size}\`
                **Emojis**: \`${message.guild.emojis.cache.size}\`
                **Channels**: Text: \`${message.guild.channels.cache.filter(ch => ch.type === 'text').size}\` | Voice: \`${message.guild.channels.cache.filter(ch => ch.type === "voice").size}\`
                **Boosts**: \`${message.guild.premiumSubscriptionCount}\`
                **Boost Level**: \`Level ${message.guild.premiumTier}\``, 
                inline: true,
            }
        )
        .setThumbnail(`${message.guild.iconURL({format:`png`,dynamic:true})}`)
        message.channel.send(em)
    }
}