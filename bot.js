const Discord = require('discord.js');
const bot = new Discord.Client();
const talkedRecently = new Set();
const prefix = "=";

bot.on('ready', () => {
    bot.user.setGame('=Aide')
})

bot.on('ready', function () {
    console.log("Je suis connecté !")
});


bot.on('message', message => {
    if (message.content === 'ping') {
        message.reply('Le **BOT** a mis: ' + `[ **${msg.createdTimestamp - message.createdTimestamp}**` + ' **Ms** ] pour repondre.\nEt l\'**API** a mis: ' + `[ **${Math.round(client.ping)}**` + ' **Ms** ] pour repondre')
    }
});

bot.login(process.env.BOT_TOKEN)

bot.on("message", (message) => {
    if (!message.content.startsWith(prefix)) return;
    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("pong!");
    } else
        if (message.content.startsWith(prefix + "foo")) {
            message.channel.send("bar!");
        }
});

// Menus | Menu SAO





bot.on('message', message => {
    if (message.content.startsWith(prefix + "Aide")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(3447003)
            .addField("Voici toutes les informations concernant XXX !", "Il vous suffit d'écrire =[Nom de commande] dans le salon des commandes pour afficher les informations concernant les différentes parties.\n\n" +
                ":book:=Contexte                        :notes:=Personnage                        :notes:=Roll\n" +
                ":notes:=Santé                                       :notes:=Faim                                              :notes:=Soif\n" +       
                ":notes:=Fatigue\n" +
                ":notes:=Combat\n" +
                ":notes:=Fouille\n" +
                ":notes:=Récolte\n" +
                ":notes:=Métiers\n" +
                ":notes:=Taxes\n" +
                ":notes:=Prison\n" +
                ":notes:=Amendes\n" +
                ":notes:=Trajets\n" +
                ":notes:=Monture\n" +
                ":notes:=Craft\n" +
                ":notes:=Banque\n" +
                ":notes:=Entrepôt\n" +
                ":notes:=Tournois\n" +
                ":notes:=Magie\n" +
                ":notes:=Pause RP\n" +
                ":notes:=Zones")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});