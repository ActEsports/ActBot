import { MessageEmbed } from 'discord.js';

const fraggifs = [
	"https://thumbs.gfycat.com/LivelyNearAnkole-size_restricted.gif",
	"https://c.tenor.com/fgdSAjVlR5kAAAAM/the-simpsons-throw.gif",
	"http://i.imgur.com/kZ0S1RS.gif",
    "https://c.tenor.com/QgnGuUnfChQAAAAd/thinking-grenades.gif",
    
];

export const name = 'frag';
export const description = 'frag a user!';
export const args = 1;
export const usage = '<member>';
export const execute = (message) => {

	if (message.mentions.members.first()) {
		const member = message.mentions.members.first();

		const embed = new MessageEmbed()
			.setDescription(`${message.author} frags ${member}!`)
			.setColor('RANDOM')
			.setImage(`${fraggifs[Math.floor(Math.random() * [fraggifs.length])]}`)
			.setTimestamp();
		message.channel.send({ embeds: [embed] });
	}
	else {
		message.channel.send({ content: "Please provide a user mention to frag!" });
	}

}