const { EmbedBuilder, GuildMember } = require("discord.js");

module.exports = {
	name: "guildMemberAdd",
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

		const regex = new RegExp(/^[a-z\s]*$/gi)
		const x = user.username.match(/[-_?+*:0-9]/g)

		if (((x && x.length != user.username.length) && regex.test(user.username)) == false) {
			// the function that generates the numbers
			const randomID = length => Math.floor(Math.random() * Math.pow(10, length));
			// replace 3 with how many characters you want
			randomID(3) // return example: 581
			const newnick = randomID(5)
	
			const reason = "Your nickname has been changed because it contains invalid characters"
	
			const embed = new EmbedBuilder()
				.setColor(resColor)
				.setTitle(`Your nickname on \`${guild.name}\`has been changed!`)
				.setDescription(`It has been change to: \`Moderated Nickname ${newnick}\`.\nReason: \`\`\`${reason}\`\`\``)
				.setTimestamp()
	
			try {
				user.setNickname("Moderated Nickname " + newnick);
			} catch (err) {
				console.log(`I wasn't able to change the mebers nickname.`)
			}
			try {
				user.send({
					content: `${user}`,
					embeds: [embed]
				});
			} catch (err) {
				console.log(`I wasnt able to send the message to the user.`)
			}

		}
		//if ((regex.test(user.username) && user.username.match(/[-_?+*:0-9]/g)?.length != user.username.length) == false) {
		//}

	}
}
