import { MessageEmbed } from 'discord.js';

export const name = 'help';
export const description = '';
export const args = 0;
export const usage = '[category]';
export const execute = (message, args) => {

    const help = new MessageEmbed()
        .setTitle('Our commands')
        .setFooter('Pick a category then do *help <category>')
        .setColor('RANDOM')
        .addFields(
            { name: 'info', value: '*help info', inline: true, },
            { name: 'Pickers', value: '*help pickers', inline: true, },
        );

    const pickers = new MessageEmbed()
        .setTitle('Picker commands!')
        .setColor('RANDOM')
        .addFields(
            { name: '*agent', value: 'Picks a random Valorant agent for your next game!', inline: true, },
            { name: '*legend', value: 'Picks a random Valorant agent for your next game"', inline: true, },
        );


    const info = new MessageEmbed()
        .setTitle('Here are the moderation commands.')
        .setColor('RANDOM')
        .addFields(
            { name: 'about', value: 'Gives info about the bot', inline: true, },
            { name: 'help', value: 'Basically this command)', inline: true },

        );

    if (!args[0]) { return message.channel.send({ embeds: [help] }); }

    else if (args[0] == 'pickers') {
        return message.channel.send({ embeds: [pickers] });
    }
    else if (args[0] == 'info') {
        return message.channel.send({ embeds: [info] });

    }
}