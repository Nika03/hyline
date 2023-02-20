const { Client, EmbedBuilder } = require("discord.js");
/**
 *
 * @param {Client} client
 */
module.exports = (client) => {
	const logs = client.channels.cache.get("1071605291281551370"); // dev-main
	process.on("unhandledRejection", (reason, p) => {

		const newEmbed = new EmbedBuilder()
			.setAuthor({ name: `${reason}` })
			.setDescription(
				`Something went wrong at <t:${Math.floor(
					Date.now() / 1000
				)}> (${Math.floor(Date.now() / 1000)}).`
			)
			.addFields({ name: "Error", value: `\`\`\`${p}\`\`\`` })

		p.catch((p) => {
			logs.send({
				content: "<@!453944662093332490>, an `unhandledRejection` occured.",
				embeds: [newEmbed],
			});
		});
	});
	process.on("uncaughtException", (reason, p) => {

		const newEmbed = new EmbedBuilder()
			.setAuthor({ name: `${reason}` })
			.setDescription(
				`Something went wrong at <t:${Math.floor(
					Date.now() / 1000
				)}> (${Math.floor(Date.now() / 1000)}).`
			)
			.addFields({ name: "Error", value: `\`\`\`${p}\`\`\`` })

		p.catch((p) => {
			logs.send({
				content: "<@!453944662093332490>, an `uncaughtException` occured.",
				embeds: [newEmbed],
			});
		});
	});
};