const { Message, MessageEmbed, Client } = require("discord.js");

module.exports = {
	name: "messageCreate",
	/**
	 * @param {Message} message
	 * @param {Client} client
	 */
	async execute(message, client) {
		if (!message.author.bot) {
			const gifs = ['https://tenor.com/view/whygena-reggie-gif-20262381', 'https://imgur.com/a/c9AyI5a', 'https://media.discordapp.net/attachments/665624930599174154/986280946166796378/B6A6A6F6-0940-4AA0-83EB-B0E0C046180C-1.gif', 'https://tenor.com/view/whygena-whygena-tentacles-reggie-reggie-the-rat-cute-rat-boy-gif-24174715', 'https://tenor.com/view/reggie-mouse-trap-gif-25221480', 'https://media.discordapp.net/attachments/473197954132475907/987137675960131614/FDXskHtVQAMsNM_.gif', 'https://tenor.com/view/meme-reggie-the-rat-berserk-skeleton-gif-25594200', 'https://tenor.com/view/dansen-whygena-reggie-gif-21008024', 'https://tenor.com/view/almic-gif-19160345'];
			const gif = Math.floor(Math.random() * gifs.length);
			const resgif = gifs[gif];

			if (message.channel.id === "1071605349217476638") { // dev-main in nika
				let random_number1 = Math.floor(Math.random() * 100);
				let random_number2 = Math.floor(Math.random() * 100);
				//random_number1 = 1;
				//random_number2 = 1;
				if (random_number1 === random_number2) {
					const ch = "1071605291281551370"; // bot-log
					const channel = client.channels.cache.get(ch);
					message.reply({ content: resgif });
				}
			}
		}
	},
};
