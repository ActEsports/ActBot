import { createRequire } from "module";
const require = createRequire(import.meta.url)
const prefix = "*"
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const Discord = require('discord.js');
const client = new Discord.Client({
	intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_WEBHOOKS'],
});

client.snipes = new Discord.Collection();
client.text_commands = new Discord.Collection();

const fs = require('fs');

(async () => {
	const categories = fs.readdirSync(`${__dirname}/commands/`);
	for (const category of categories) {
		const commandFiles = fs.readdirSync(`${__dirname}/commands/${category}`).filter(File => File.endsWith('.js'));
		for (const file of commandFiles) {

			const command = await import(`./commands/${category}/${file}`);
			client.text_commands.set(command.name, command);
		}
	}

	const eventFiles = fs.readdirSync(`${__dirname}/events`).filter(file => file.endsWith('.js'));
	for (const file of eventFiles) {

		const { name, once, execute } = await import(`./events/${file}`);
		if (once) { client.once(name, (...args) => execute(...args, client)); }
		else { client.on(name, (...args) => execute(...args, client)); }
	}
})();

client.login(process.env['Token']);
