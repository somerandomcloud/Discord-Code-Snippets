const Discord = require('discord.js');
const { botColour } = require('../../config.json');

module.exports = {
	name: 'help',
	usage: 'help <cmd>',
	description: 'Get Help',
	category: 'Info',
	execute(message, client, args) {
		try {
			if (args[0]) {
				const command = client.commands.get(args[0]);
				if (!command) {
					return message.channel.send('Unknown Command: ' + args[0]);
				}
				const embed = new Discord.MessageEmbed()
					.setAuthor(command.name, client.user.displayAvatarURL())
					.addField(
						'Description',
						command.description || 'No Description',
						false,
					)
					.addField('Usage', command.usage || 'Not Provided', false)
					.setThumbnail(client.user.displayAvatarURL())
					.setColor(botColour)
					.setFooter(client.user.username, client.user.displayAvatarURL());
				return message.channel.send(embed);
			}
			else {
				const commands = client.commands;
				const helpem = new Discord.MessageEmbed()
					.setDescription(
						`${client.user.username} | Command Amount: ${client.commands.size}`,
					)
					.setColor(botColour)
					.setFooter(client.user.username, client.user.displayAvatarURL());

				const com = {};

				for (const comm of commands.array()) {
					if (!comm.hidden) {
						const category = comm.category || 'No Category';
						const name = comm.name;

						if (!com[category]) {
							com[category] = [];
						}
						com[category].push(name);
					}
				}

				for (const [key, value] of Object.entries(com)) {
					const category = key;

					const desc = '`' + value.join('`, `') + '`';

					helpem.addField(`${category.toUpperCase()} [${value.length}]`, desc);
				}
				return message.channel.send(helpem);
			}
		}
		catch (err) {
			console.log(err);
			message.reply('There was a error when running the command');
		}
	},
};