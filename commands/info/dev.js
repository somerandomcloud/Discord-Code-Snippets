const Discord = require('discord.js');
const { botColour } = require('../../config.json');

module.exports = {
	name: 'dev',
	description: 'Info on the dev',
	category: 'Info',
	execute(message, client) {
		const embed = new Discord.MessageEmbed()
			.setColor(botColour)
			.setTitle('Hey š! I\'m Samu')
			.setDescription(`- š­ Iām currently working on **my secret ++++++!**

            - š± Iām currently learning **Javascript, and plan to learn PHPs framework laravel**
            
            - š¬ Ask me about **Javascript or Linux!**
            
            - š« How to reach me **ICodeInAssembly#7117 on Discord**
            
            - ā” Fun fact **I made my first npm package 15/07/2021!**
			
			- š„ļø I can make a custom bot for you! **DM me!** `)
			.setTimestamp()
			.setFooter(
				`${client.user.username} || ${message.guild.name}`,
				client.user.displayAvatarURL(),
			);

		message.channel.send(embed);
	},
};