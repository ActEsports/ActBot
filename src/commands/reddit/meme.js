import { MessageEmbed } from 'discord.js';
import got from 'got';

export const name = "meme";
export const aliases = ["memepic", "memepics"];
export const description = 'View meme made from other people in r/meme!';
export const args = 0;
export const execute = (message) => {

	got('https://www.reddit.com/r/meme/random/.json').then(response => {
		const content = JSON.parse(response.body);

		const embed = new MessageEmbed()
			.setTitle(`${content[0].data.children[0].data.title}`)
			.setURL(`https://reddit.com${content[0].data.children[0].data.permalink}`)
			.setColor('RANDOM')
			.setImage(`${content[0].data.children[0].data.url}`)
			.setFooter(`👍 ${content[0].data.children[0].data.ups} 💬 ${content[0].data.children[0].data.num_comments}`);

		message.channel.send({ embeds: [embed] });

	});
}