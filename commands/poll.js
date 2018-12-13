//This command requires the discord.js package to create embeds
const Discord =require('discord.js');

exports.run = async (client, message, args, tools) => {
	
	//This will contain some extra things
	
	//Role Verification -- This will only run if a user has a certain role (optional)
	if (!message.member.roles.find(r => r.name === 'MASTER')) return message.channel.send("Esta ação requer o rank: MASTER");
	
	//Permission Verification -- This will only run if a user has a certain permission (optional)
	if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Esta ação requer a permissão: Administrador");
	
	//Check user input
	if (!args[0]) return message.channel.send("Usagem correta: <prefix>poll <questão>");
	
	//Create embed
	const embed = new Discord.MessageEmbed()
		.setColor(0xffffff)
		.setFooter("Use os simbolos para votar!")
		.setDescription(args.join("  "))
		.setTitle("Votação criada por: ${message.author.username}");
	
	//Await send message
	let msg = await message.channel.send(embed);
	
	//React to message
	await msg.react("✅"); //using await here will make sure the first one runs before the second
	await msg.react("❌");
	
	//delete original message
	message.delete({timeout: 1000})
	
}