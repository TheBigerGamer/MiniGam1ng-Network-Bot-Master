//This command requires the discord.js package to create embeds
const Discord =require('discord.js');

exports.run = async (client, message, args, tools) => {
	//Check user input
	if (!args[0]) return message.channel.send("Usagem correta: <prefix>poll <questão>");
	
	//Create embed
	const embed = new Discord.MessageEmbed()
		.setColor(0xffffff)
		.setDescription(args.join("  "))
		.setTitle("${message.author.username} disse:");
	   // /say
            //case "say":
                //message.delete()
                    //if (message.content.startsWith("/say")) {
                    //message.channel.sendMessage((message.author.username) + " says: " + (message.content.replace('!say ','')));
                //;
            //break;
			
	//Await send message
	let msg = await message.channel.send(embed);
	
	//delete original message
	message.delete({timeout: 1000})
	
}