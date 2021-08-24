import fetch from "node-fetch";
import { MessageEmbed } from 'discord.js';

const prefix = '*';
const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const name = 'messageCreate';
const execute = async (message, client) => {

	if (message.author.bot || message.guild === null) { return; }

	const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
	if (prefixRegex.test(message.content)) {

		const [, matchedPrefix] = message.content.toLowerCase().match(prefixRegex);
		const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
		const commandName = args.shift().toLowerCase();

		if (commandName.length !== 0) {
			const cmd = client.text_commands.get(commandName)
				|| client.text_commands.find(file => file.aliases && file.aliases.includes(commandName));

			if (cmd) {
				let allowed = true;

				if (cmd.permissions && allowed === true) {
					for (const permission of cmd.permissions) {
						if (allowed === true
							&& !message.member.permissions.has(permission.trim().toUpperCase().replace(" ", "_"))
							&& !message.member.permissions.has('ADMINISTRATOR')) {

							await message.channel.send({ content: `You do not have permission to use this command.` });
							allowed = false;
						}
					}
				}

				if (cmd.args && allowed === true) {
					const number = cmd.args;
					if (number >= 1) {
						if (!args[number - 1]) {
							await message.channel.send({ content: `Incorrect usage, make sure it follows the format: \`${prefix}${cmd.name} ${cmd.usage}\`` });
							allowed = false;
						}
					}
				}

				if (allowed == true) {
					cmd.execute(message, args, prefix, client);
				}
			}
		}
	}
}

export { name, execute };