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



bot.on('message', message => {
    if (message.content.startsWith(prefix + "Aide")) {
        const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『XXXXX [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(3447003)
            .addField("Voici toutes les informations concernant XXX !", "Il vous suffit d'écrire =[Nom de commande] dans le salon des commandes pour afficher les informations concernant les différentes parties.\n\n" +
                ":book: Concernant le contexte : `=Contexte`\n\n" +
                ":notes: Concernant la création de personnage : `=Personnage`\n\n" +       
                ":notes: Concernant les rolls : `=Roll`\n\n" +
                ":notes: Concernant la santé : `=Santé`\n\n" +
                ":notes: Concernant la faim : `=Faim`\n\n" +
                ":notes: Concernant la soif : `=Soif`\n\n" +
                ":notes: Concernant la fatigue : `=Fatigue`\n\n" +
                ":notes: Concernant les combats : `=Combat`\n\n" +
                ":notes: Concernant la fouille : `=Fouille`\n\n" +
                ":notes: Concernant la récolte : `=Récolte`\n\n" +
                ":notes: Concernant les différents métiers : `=Métiers`\n\n" +
                ":notes: Concernant les taxes en ville : `=Taxes`\n\n" +
                ":notes: Concernant la prison : `=Prison`\n\n" +
                ":notes: Concernant les trajets entre ville/éxtérieur : `=Trajets`\n\n" +
                ":notes: Concernant les montures : `=Monture`\n\n" +
                ":notes: Concernant le système de craft : `=Craft`\n\n" +
                ":notes: Concernant la banque : `=Banque`\n\n" +
                ":notes: Concernant l'entrepôt : `=Entrepôt`\n\n" +
                ":notes: Concernant Les tournois de poker et d'arène : `=Tournois`\n\n" +
                ":notes: Concernant la magie : `=Magie`\n\n" +
                ":notes: Concernant les pauses RP : `=Pause RP`\n\n" +
                ":notes: Concernant les différentes zones du RP : `=Zones`")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});


