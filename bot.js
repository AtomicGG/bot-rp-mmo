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
            .addField("Bienvenue sur LastHour !", "Il suffit d'écrire `=[Commande]` pour afficher les informations !\n\n\n" +
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
                ":notes: Pause RP : `=Pause RP`\n\n")
            .setImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a461352f-9217-4718-98b6-56700f406514/de286t9-7f1cc313-fce6-4cb6-9f2f-501debc991ad.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTQ2MTM1MmYtOTIxNy00NzE4LTk4YjYtNTY3MDBmNDA2NTE0XC9kZTI4NnQ5LTdmMWNjMzEzLWZjZTYtNGNiNi05ZjJmLTUwMWRlYmM5OTFhZC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.s-fEMEmjkOt1P5LxQlx5UrOyjqjbvI5l4Fq5m7YfnnI")
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
            .addField("Contexte de LastHour, partie 1 :", "C'est dans la région d'Agwall sur le continent, étant remplis de monstres en tous genres et de magie, que l'on entend des histoires étranges voir effrayantes concernant une certaine ville se situant très loin de la capital.\n\n'La ville la plus dangereuse et difficile d'y survivre' d'après certains, d'autres disent 'La justice n'existe pas là bas, seulement corruption et désespoir... fuiyez cette ville'.\n\nAinsi, la ville que l'on nomme 'LastHour' a une réputation qui ferait fuir même les plus courageux, mais il y a bien des raisons pour laquelle certains y vont et même s'y installer...\n\nElle porte bien son nom, celui-ci signifie plus communément 'La dernière heure' car on ne saura jamais si l'on survivra la prochaine heure que ce soit à l'intérieur ou à l'extérieur de la ville...\n\nEffectivement, bien que la sécurité à l'intérieur de la ville soit assuré par les gardes, celle-ci n'est pas totalement honnête et vous vous en rendrez compte bien assez bon.\n\n")
            .addField("Contexte de LastHour, partie 2 :", "Quoi qu'il en soit, LastHour reste l'endroit le plus protégé où il faut être comparé à l'extérieur qui depuis quelques temps, commence à se faire envahir de monstres de plus en plus féroces, trop s'aventurer à l'extérieur est une mort certaine...\n\nL'uns des meilleurs gardes de la ville s'étant aventuré trop loin et seul aurait aperçus un cerbère avant de fuir, vous savez ces créatures mythologiques qui ne sont que des légendes ?\n\nLes ressources à l'extérieur deviennent de plus en plus dur à trouver et le commerce ainsi que l'économie de la ville commence peu à peu à sombrer, entraînant ainsi une vague de personnes essayant d'en profiter que ce soit d'une manière positive en y travaillant, ou d'une manière négatif en volant et pillant les maisons et habitants...\n\nLe roi qui gouverne la ville n'est jamais fixe, et il arrive parfois qu'avant la fin du mois de son service, il se fasse executer ou même disparaît sans aucunes traces...\n\n")
            .addField("Contexte de LastHour, partie 3 :", "Ainsi, LastHour est qualifié de ville fantôme et son autre petit surnom d'après certains anciens est 'Le purgatoire', et c'est ici que votre histoire débute, du moins c'est ce que vous avez choisis... Non ?\n\nQu'allez vous apporter en rejoignant cette ville, une vague d'espoir, de désespoir, ou vos intentions et objectifs sont d'une tout autres natures bien plus profondes et mystérieuses... ?\n\nFaites attention à qui faire confiance, et n'allez pas défier les ténèbres qui se trouve loin de la ville.\n\nEt une dernière chose, en arrivant dans cette ville en étant un étranger pour la première fois, tous vos objets et équipements seront confisqués par les gardes !")
            .setImage("https://static.wikia.nocookie.net/fairytailfanon/images/7/7a/Wanderers_of_a_poor_town_by_edwinjang-d687t39.png/revision/latest?cb=20161117182628.png")
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
            .addField("Création de votre personnage :", "Voici la fiche à copier coller et à remplir avant de la mettre dans un des salons 'Fiche en attente' !\n\n```Nom : [A remplir]\n\nPrénom : [A remplir]\n\nSexe : [A remplir]\n\nÂge : [A remplir]\n\nDescription physique : [A remplir, 250 mots minimum]\n\nDescription de la personnalité : [A remplir, 250 mots minimum]\n\nPourquoi et/ou comment êtes vous arriver à LastHour : [A remplir, 500 mots minimum]\n\nVotre histoire : [A remplir, 500 mots]\n\n▲▼▲▼▲▼▲▼▲▼\n\nNiveau : 1\n\n0/100 points d'expériences\n\n▲▼▲▼▲▼▲▼▲▼\n\nStatitstiques [175 points à répartir, minimum 30 et maximum 70 par stat]:\n\nForce : [A remplir]\n\nIntelligence : [A remplir]\n\nSocial : [A remplir]\n\nChance : [A remplir]\n\n▲▼▲▼▲▼▲▼▲▼\n\nMétier : [A remplir une fois que vous en aurez un]\n\n▲▼▲▼▲▼▲▼▲▼\n\nVotre inventaire : [A remplir lors de l'acquisition d'objets]```")
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