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
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『XXXXX [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(3447003)
            .addField("Bienvenue sur XXXX !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
                ":book: Contexte : `=Contexte`\n\n" +
                ":notes: Création de personnage : `=Personnage`\n\n" +       
                ":notes: Rolls : `=Roll`\n\n" +
                ":notes: Santé : `=Santé`\n\n" +
                ":notes: Faim : `=Faim`\n\n" +
                ":notes: Soif : `=Soif`\n\n" +
                ":notes: Fatigue : `=Fatigue`\n\n" +
                ":notes: Combats : `=Combat`\n\n" +
                ":notes: Fouille : `=Fouille`\n\n" +
                ":notes: Récolte : `=Récolte`\n\n" +
                ":notes: Métiers : `=Métiers`\n\n" +
                ":notes: Taxes en ville : `=Taxes`\n\n" +
                ":notes: Prison : `=Prison`\n\n" +
                ":notes: Trajets : `=Trajets`\n\n" +
                ":notes: Montures : `=Monture`\n\n" +
                ":notes: Système de craft : `=Craft`\n\n" +
                ":notes: Banque : `=Banque`\n\n" +
                ":notes: Entrepôt : `=Entrepôt`\n\n" +
                ":notes: Tournois : `=Tournois`\n\n" +
                ":notes: Magie : `=Magie`\n\n" +
                ":notes: Pauses RP : `=Pause RP`\n\n" +
                ":notes: Zones : `=Zones`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});


