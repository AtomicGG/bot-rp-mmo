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
                ":book: Le contexte : `=Contexte`\n\n" +
                ":notes: La création de personnage : `=Personnage`\n\n" +       
                ":notes: Les rolls : `=Roll`\n\n" +
                ":notes: La santé : `=Santé`\n\n" +
                ":notes: La faim : `=Faim`\n\n" +
                ":notes: La soif : `=Soif`\n\n" +
                ":notes: La fatigue : `=Fatigue`\n\n" +
                ":notes: Les combats : `=Combat`\n\n" +
                ":notes: La fouille : `=Fouille`\n\n" +
                ":notes: La récolte : `=Récolte`\n\n" +
                ":notes: Les différents métiers : `=Métiers`\n\n" +
                ":notes: Les taxes en ville : `=Taxes`\n\n" +
                ":notes: La prison : `=Prison`\n\n" +
                ":notes: Les trajets : `=Trajets`\n\n" +
                ":notes: Les montures : `=Monture`\n\n" +
                ":notes: Le système de craft : `=Craft`\n\n" +
                ":notes: La banque : `=Banque`\n\n" +
                ":notes: L'entrepôt : `=Entrepôt`\n\n" +
                ":notes: Les tournois : `=Tournois`\n\n" +
                ":notes: La magie : `=Magie`\n\n" +
                ":notes: Les pauses RP : `=Pause RP`\n\n" +
                ":notes: Les différentes zones : `=Zones`")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});


