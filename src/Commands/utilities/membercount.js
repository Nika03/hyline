const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
	name: "membercount",
	data: new SlashCommandBuilder()
	.setName("membercount")
	.setDescription("The number of member in this server."),
	/**
	 * @param {ChatInputCommandInteraction} interaction
	 */
	execute(interaction) {

		// random colors from one dark color palette
		const colors = ['#282C34', '#E06C75', '#98C379', '#E5C07b', '#61AFEF', '#C678DD', '#56B6C2', '#ABB2BF', '#6B859E', '#3890E9', '#A359ED', '#EC5252', '#C97016', '#5DA713', '#13AFAF'];
		const color = Math.floor(Math.random() * colors.length);
		const resColor = colors[color];
		// end of the color randomization

		const newEmbed = new EmbedBuilder()
			.setTitle("Total members")
			.setColor(resColor)
			.setDescription(`There are **${interaction.guild.memberCount}** members in this server.`)
			.setFooter({ text: `Requested by ${interaction.user.tag}` })
			.setTimestamp()

		interaction.reply({ embeds: [newEmbed]});
	}
}
