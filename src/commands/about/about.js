import { MessageEmbed } from 'discord.js';

export const name = 'about';
export const description = 'Description about the bot';
export const args = 0;
export const execute = (message, args, prefix, client) => {

	const uptime = `${Math.floor(client.uptime / 86400000)}d ${Math.floor(client.uptime / 3600000) % 24}h ${Math.floor(client.uptime / 60000) % 60}m ${Math.floor(client.uptime / 1000) % 60}s`;

	const embed = new MessageEmbed()
		.setTitle("My Information")
		.setColor('#FF0000')
		.setDescription(`Hello I am Act bot! My prefix is: *`)
		.setThumbnail('https://cdn.discordapp.com/attachments/816399685128028173/880059925068410990/ACT1080EXT.png')
        .addFields(
			{ name: `**Version:**`, value: `1.2.0`, inline: true },
			{ name: `**Developers:**`, value: `**[Bagel#1475](https://github.com/bagelwastaken)`, inline: true },
			{ name: `**Uptime:**`, value: `${uptime}`, inline: true },
		)
		.setFooter(`Do '${prefix}help' to get started`);

	message.channel.send({ embeds: [embed] });

}