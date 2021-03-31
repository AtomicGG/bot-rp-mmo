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
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
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
                ":notes: Zones : `=Zones`\n\n" +
                ":notes: Pause RP : `=Pause RP`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});


bot.on('message', message => {
    if (message.content.startsWith(prefix + "Contexte")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Bienvenue sur XXXX !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
                ":book: Contexte : `=Contexte`\n\n" + 
                ":notes: Zones : `=Zones`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});


bot.on('message', message => {
    if (message.content.startsWith(prefix + "Personnage")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Bienvenue sur XXXX !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
                ":book: Contexte : `=Contexte`\n\n" + 
                ":notes: Zones : `=Zones`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Roll")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Bienvenue sur XXXX !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
                ":book: Contexte : `=Contexte`\n\n" + 
                ":notes: Zones : `=Zones`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});


bot.on('message', message => {
    if (message.content.startsWith(prefix + "Santé")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Bienvenue sur XXXX !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
                ":book: Contexte : `=Contexte`\n\n" + 
                ":notes: Zones : `=Zones`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});


bot.on('message', message => {
    if (message.content.startsWith(prefix + "Faim")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Bienvenue sur XXXX !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
                ":book: Contexte : `=Contexte`\n\n" + 
                ":notes: Zones : `=Zones`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});


bot.on('message', message => {
    if (message.content.startsWith(prefix + "Soif")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Bienvenue sur XXXX !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
                ":book: Contexte : `=Contexte`\n\n" + 
                ":notes: Zones : `=Zones`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});


bot.on('message', message => {
    if (message.content.startsWith(prefix + "Fatigue")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Bienvenue sur XXXX !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
                ":book: Contexte : `=Contexte`\n\n" + 
                ":notes: Zones : `=Zones`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Combat")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Bienvenue sur XXXX !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
                ":book: Contexte : `=Contexte`\n\n" + 
                ":notes: Zones : `=Zones`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});


bot.on('message', message => {
    if (message.content.startsWith(prefix + "Fouille")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Bienvenue sur XXXX !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
                ":book: Contexte : `=Contexte`\n\n" + 
                ":notes: Zones : `=Zones`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Récolte")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Bienvenue sur XXXX !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
                ":book: Contexte : `=Contexte`\n\n" + 
                ":notes: Zones : `=Zones`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Métiers")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Bienvenue sur XXXX !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
                ":book: Contexte : `=Contexte`\n\n" + 
                ":notes: Zones : `=Zones`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Taxes")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Bienvenue sur XXXX !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
                ":book: Contexte : `=Contexte`\n\n" + 
                ":notes: Zones : `=Zones`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Prison")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Bienvenue sur XXXX !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
                ":book: Contexte : `=Contexte`\n\n" + 
                ":notes: Zones : `=Zones`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Trajets")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Bienvenue sur XXXX !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
                ":book: Contexte : `=Contexte`\n\n" + 
                ":notes: Zones : `=Zones`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Monture")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Bienvenue sur XXXX !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
                ":book: Contexte : `=Contexte`\n\n" + 
                ":notes: Zones : `=Zones`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Craft")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Bienvenue sur XXXX !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
                ":book: Contexte : `=Contexte`\n\n" + 
                ":notes: Zones : `=Zones`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Banque")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Bienvenue sur XXXX !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
                ":book: Contexte : `=Contexte`\n\n" + 
                ":notes: Zones : `=Zones`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Entrepôt")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Bienvenue sur XXXX !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
                ":book: Contexte : `=Contexte`\n\n" + 
                ":notes: Zones : `=Zones`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});


bot.on('message', message => {
    if (message.content.startsWith(prefix + "Tournois")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Bienvenue sur XXXX !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
                ":book: Contexte : `=Contexte`\n\n" + 
                ":notes: Zones : `=Zones`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});


bot.on('message', message => {
    if (message.content.startsWith(prefix + "Magie")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Bienvenue sur XXXX !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
                ":book: Contexte : `=Contexte`\n\n" + 
                ":notes: Zones : `=Zones`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Zones")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Bienvenue sur XXXX !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
                ":book: Contexte : `=Contexte`\n\n" + 
                ":notes: Zones : `=Zones`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});


bot.on('message', message => {
    if (message.content.startsWith(prefix + "Pause RP")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Bienvenue sur XXXX !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
                ":book: Contexte : `=Contexte`\n\n" + 
                ":notes: Zones : `=Zones`\n")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});