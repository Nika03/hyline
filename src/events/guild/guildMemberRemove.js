const { EmbedBuilder, GuildMember } = require("discord.js");
//const Schema = require("../../schemas/goodbye");

module.exports = {
	name: "guildMemberRemove",
	/**
	 * @param {GuildMember} member
	 */
	async execute(member) {

		// random colors from one dark color palette 
		const colors = ['#282C34', '#E06C75', '#98C379', '#E5C07b', '#61AFEF', '#C678DD', '#56B6C2', '#ABB2BF', '#6B859E', '#3890E9', '#A359ED', '#EC5252', '#C97016', '#5DA713', '#13AFAF'];
		const color = Math.floor(Math.random() * colors.length);
		const resColor = colors[color];
		// end of the color randomization

		const { user, guild } = member;

		

	}
}
