const Discord = require('discord.js')
const bot = new Discord.Client()


bot.on('ready', function () {
    bot.user.setPresence({ game: { name: '- [?help] être developpé par <Kiwi/>', type:0} })
  console.log("Je suis connecté !")
})

bot.on('message', message => {
    if (message.content === 'Salut'){
        message.reply('Salut à toi et amuse toi bien sur notre serveur, tape ?help pour voir les commandes')
    }

    if (message.content.startsWith('?help')) {
        var help_embed = new Discord.RichEmbed()
            .setColor('#BF7009')
            .addField('?patch' , 'Savoir en quel version je suis !')
            .addField('?ping', 'Savoir ton ping !')
            .setFooter('Amuse-toi bien sur le serveur !')
        message.channel.sendEmbed(help_embed);
    }

    if (message.content.startsWith('?patch')) {
        message.reply('Je suis en version 0.5.0 !')
    }

    if(message.content.startsWith('?ping'))
    {
        var ping_embed = new Discord.RichEmbed()
            .setColor('#BF7009')
            .addField('Ping', new Date().getTime() - message.createdTimestamp + ' ms')
        message.channel.sendEmbed(ping_embed)
    }

    if (message.content.startsWith('?credit')) {
        var credit_embed = new Discord.RichEmbed()
            .setColor('#BF7009')
            .addField('Mes Développeurs', 'Nxriu et Kiwi !')
            message.channel.sendEmbed(credit_embed)
    }

})

bot.on('guildMemberAdd', member =>{
    member.guild.channels.find('name', 'chat-general').send(':warning: ${member.user.username} viens de rejoindre le serveur !')
})



bot.login('NDEwODQ0Nzc3NjUxNzY1MjU4.DWAYbQ.HwH-XHPFR2zr2Tcs4-AkNon0qJQ')
