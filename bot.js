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
                ":book: Contexte : `=Contexte`\n" +
                ":page_facing_up: Création de personnage : `=Personnage`\n" +   
                ":books: Informations : `=Informations`\n" +    
                ":chart_with_upwards_trend: Niveau : `=Niveau`\n" +    
                ":muscle: Rolls : `=Roll`\n" +
                ":syringe: Santé : `=Santé`\n" +
                ":poultry_leg: Faim : `=Faim`\n" +
                ":droplet: Soif : `=Soif`\n" +
                ":hot_face: Fatigue : `=Fatigue`\n" +
                ":crossed_swords: Combats : `=Combat`\n" +
                ":mag: Fouille : `=Fouille`\n" +
                ":wood: Récolte : `=Récolte`\n" +
                ":hammer: Métiers : `=Métiers 1`\n" +
                ":money_with_wings: Taxes : `=Taxes`\n" +
                ":chains: Prison : `=Prison`\n" +
                ":person_running: Trajets : `=Trajets`\n" +
                ":horse: Montures : `=Monture`\n" +
                ":gear: Système de craft : `=Craft`\n" +
                ":coin: Banque : `=Banque`\n" +
                ":lock: Entrepôt : `=Entrepôt`\n" +
                ":fist: Tournois : `=Tournois`\n" +
                ":magic_wand: Magie : `=Magie`\n" +
                ":bricks: Objets : `=Objets`\n" +
                ":moneybag: Magasin : `=Magasin`\n" +
                ":handbag: Inventaire : `=Inventaire`\n" +
                ":ghost: Monstres : `=Monstres`\n" +
                ":sunrise_over_mountains: Zones : `=Zones`\n" +
                ":x: Pause RP : `=Pause RP`\n\n\n")
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
            .addField("Contexte de LastHour, partie 3 :", "Ainsi, LastHour est qualifié de ville fantôme et son autre petit surnom d'après certains anciens est 'Le purgatoire', et c'est ici que votre histoire débute, du moins c'est ce que vous avez choisis... Non ?\n\nQu'allez vous apporter en rejoignant cette ville, une vague d'espoir, de désespoir, ou vos intentions et objectifs sont d'une tout autres natures bien plus profondes et mystérieuses... ?\n\nFaites attention à qui faire confiance, et n'allez pas défier les ténèbres qui se trouve loin de la ville.\n\nEt une dernière chose, en arrivant dans cette ville en étant un étranger pour la première fois, tous vos objets et équipements seront confisqués par les gardes, mais ils vous donneront 100 écus (écus = argent) !")
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
            .addField("Création de votre personnage :", "Une fois remplis, il faudra la mettre dans #〘📝〙fiche-en-attente.\n\n\n```Nom : [A remplir]\n\nPrénom : [A remplir]\n\nSexe : [A remplir]\n\nÂge : [A remplir]\n\nDescription physique : [A remplir, 250 mots minimum, pas d'armure seulement des vêtements]\n\nDescription de la personnalité : [A remplir, 250 mots minimum]\n\nPourquoi et/ou comment êtes vous arriver à LastHour : [A remplir, 500 mots minimum]\n\nVotre histoire : [A remplir, 500 mots]\n\n▲▼▲▼▲▼▲▼▲▼\n\nNiveau : 1\n\n0/100 points d'expériences\n\nArme équipée : [Aucune]\n\nCasque équipé : [Aucun]\n\nArmure équipée : [Aucune]\n\nJambières équipées : [Aucunes]\n\nBottes équipées : [Aucunes]\n\nAmulette : [Aucune]\n\nAnneau : [Aucun]\n\nSac : [Aucun]\n\nMonture : [Aucune]\n\n▲▼▲▼▲▼▲▼▲▼\n\nStatitstiques [130 points à répartir]:\n\nForce : [A remplir, minimum 30 maximum 70]\n\nMental : [A remplir, minimum 30 maximum 70]\n\nSocial : [A remplir, minimum 30 maximum 70]\n\nEndurance : 20\n\nChance : 20\n\n▲▼▲▼▲▼▲▼▲▼\n\nMétier : [Aucun]\n\n▲▼▲▼▲▼▲▼▲▼\n\nVotre inventaire : 100 écus```")
            .setImage("https://i.pinimg.com/originals/6d/2d/73/6d2d7316f0c043d73228ad9c2d36f75d.png")
            .setTimestamp()
        message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Informations")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Informations, partie 1 :", "x")
            .addField("Informations, partie 2 :", "X")
            .addField("Informations, partie 3 :", "X")
            .setImage("https://static.wikia.nocookie.net/fairytailfanon/images/7/7a/Wanderers_of_a_poor_town_by_edwinjang-d687t39.png/revision/latest?cb=20161117182628.png")
            .setTimestamp()
        message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Niveau")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Système de niveau :", "X")
            .setImage("https://static.wikia.nocookie.net/fairytailfanon/images/7/7a/Wanderers_of_a_poor_town_by_edwinjang-d687t39.png/revision/latest?cb=20161117182628.png")
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
            .addField("Système de roll, partie 1 :", "Un roll est un nombre aléatoire de 1 à 100 déterminant la réussite d'une action ou l'échec de celle-ci.\n\nPour effectuer un roll de 1 à 100, la commande est la suivante : `roll 1d100`\n\nPour qu'une action soit une réussite, il faut que le roll soit égale ou inférieur à votre stat.\n\nPar exemple si je décide d'escalader un mur, de frapper quelqu'un, ou d'effectuer une esquive, je fait un `roll 1d100` et le résultat tombe sur 54, si j'ai 50 dans la stat physique alors j'échoue.. si j'ai 55 alors je réussis !\n\nChaques actions qui nécessite un effort physique conséquent (soyez fairplay) surtout visant un autre joueur de manière positive ou négatif, sera un roll basé sur la stat physique.\n\nChaques actions qui nécessite un effort mental conséquent comme par exemple, garder son sang froid, ne pas changer d'état d'esprit, essayer d'entendre un bruit ou se concentrer visuellement pour chercher quelqu'un, sera un roll basé sur la stat mentale\n\n")
            .addField("Système de roll, partie 1 :", "Chaques actions qui nécessite un effort de social, comme par exemple négocier, corrompre ou manipuler quelqu'un, séduire ou intimider quelqu'un, sera un roll basé sur la stat sociale\n\nLa stat chance déterminera si vous réussisez vos crafts ou de trouver des objets bonus lors de fouilles et d'autres choses encore.\n\nLe fairplay est le mot d'ordre, vous n'avez pas droit d'arriver dans la même zone qu'un joueur sans une bonne raison, ne pas faire de roll et le voir par exemple, vous devrez obligatoirement faire un roll sauf si vos actions futures ou votre comportement (du personnage) n'est pas hostile envers la personne.\n\nSi par exemple vous désirez aller voir un amis dans le RP, vous devrez le chercher mais pas besoin de roll comme vous n'avez rien de d'hostile à son égard.\n\nCertaines blessures/maladie ou autres états peuvent parfois vous donner des malus à vos rolls dans certaines stats.\n\nSoyez cohérent sur les actions et les roll selon la stat le plus possible.")
            .setImage("https://avatars.githubusercontent.com/u/11000499?s=400&v=4.png")
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
            .addField("Système de santé, partie 1 !", "Ce RP n'utilise pas un système de point de vie à la manière d'un MMO vus que nous voulons garder l'esprit du RP majoritaire et bien plus importante que l'aspect MMO.\n\nAinsi, nous utilisons un système de 'Blessure' qui détermine si vous êtes mal au point ou non.\n\nVoici la liste des différentes blessures dans l'ordre croissant :\n\n\n`Aucune blessure`\n`Blessure infime`\n`Blessure légère`\n`Blessure modérée`\n`Blessure avancée`\n`Blessure grave`\n`Blessure mortelle`\n\n\nAprès la blessure mortelle, si vous en subissez une nouvelle c'est la mort instantanément.\n\nSi lors d'une expédition à l'extérieur pour combattre, vous subissez par malchance l'attaque d'un loup qui vous blesse et que vous subissez deux rangs de blessures, cela signifie que si vous étiez à 'Aucune blessure' vous passez à 'Blessure légère' et si vous étiez déjà à la 'Blessure légère' alors vous serez à la 'Blessure avancée'.\n\nC'est un ordre logique, si les blessures s'accumulent alors vous serez de plus en plus mal au point\n\n")
            .addField("Système de santé, partie 2 !", "C'est à vous dans le salon #〘≡〙roles-du-rp de changer votre santé selon ce système, et n'essayez pas de tricher car le staff surveillera, et surtout vous n'êtes pas là pour tricher mais bien pour RP et assumer les conséquences de vos actions, ou de votre malchance.\n\nVos blessures se soignent avec le temps en dormant de manière naturel seulement si c'est une 'Blessure légère' ou 'Blessure infime', votre blessure se soignera d'un cran par jour (à partir de 00 H) si vous dormez au moins IRP 1 H.\n\nLes autres blessures ne se soigne qu'avec des bandages ou des potions ou encore d'autres méthodes de guérison à découvrir.\n\nSi vous êtes au stade de la 'Blessure modérée' et plus, il faudra rapidement vous soigner sinon votre blessure s'aggravera et augmentera d'un cran le jour prochain (tous les jours à partir de 00 H), le staff surveillera là aussi si vous jouez bien le jeu sur ce niveau là.\n\nIl y aura dans le futur des blessures permanente sur des membres voir des organes selon la difficulté et l'activité du RP !\n\n")
            .addField("Système de santé, partie 3 !", "A partir d'un certain rang de blessure, vous aurez des malus sur vos roll qui sont les suivants :\n\n\n`Blessure modérée` : Malus de 5 sur la stat physique\n`Blessure avancée` : Malus de 10 sur la stat physique et 5 sur la stat mental\n`Blessure grave` : Malus de 15 sur la stat physique et 5 sur la stat mental et pas possible de sortir de la ville faire des combats ou fouiller/récolter\n`Blessure mortelle` : Malus de 20 sur la stat physique et 10 sur la stat mental et pas possible de sortir de la ville faire des combats ou fouiller/récolter\n\n\nSi par exemple vous avez une blessure mortelle, que vous tenter de fuir et échapper à un joueur qui vous pourchasse avec 55 dans la stat physique, vous devrez réussir un roll de 35 ou moins (car 55-20 de malus).")
            .setImage("https://i.pinimg.com/originals/4a/7d/f0/4a7df095e2f8c7bbe07722411e4b30fc.jpg")
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
            .addField("Système de faim", "Comme la santé, la faim fonctionne par rang croissant qui sont les suivants :\n\n\n`Aucune faim`\n`Faim`\n`Très faim`\n`Famine`\n\n\nVotre niveau de faim baisse une fois par jour (à partir de 00 h) et il faudra vous nourrir en achetant de la nourriture, ou en la trouvant et en la cuisinant, par exemple grâce à la chasse et aux combats extérieurs.\n\nCertaines nourritures vont vous nourrir plus que d'autres.\n\nA partir d'un certain rang de faim, vous aurez des malus sur vos roll qui sont les suivants :\n\n\n`Très faim` : Malus de 5 sur la stat physique\n`Famine` : Malus de 10 sur la stat physique\n\n\nManger plusieurs fois est possible et baissera donc votre faim de plusieurs rangs selon la nourriture en question, par exemple manger 2 fois de la viandes de loup qui baissera votre faim encore plus.")
            .setImage("https://i.pinimg.com/originals/14/63/22/1463229446fb62d9a0be1472be93a846.jpg")
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
            .addField("Système de soif", "Comme la faim et la santé, la soif fonctionne par rang croissant qui sont les suivants :\n\n\n`Aucune soif`\n`Soif`\n`Très soif`\n`Assoiffé`\n\n\nVotre niveau de soif baisse une fois par jour (à partir de 00 h) et il faudra boire en achetant ou trouvant de l'eau.\n\nA partir d'un certain rang de soif, vous aurez des malus sur vos roll qui sont les suivants :\n\n\n`Très soif` : Malus de 5 sur la stat physique et mentale\n`Assoiffé` : Malus de 10 sur la stat physique et mentale\n\nBoire plusieurs fois est possible et baissera donc votre soif de plusieurs rangs, par exemple boire 2 fois de suite de l'eau qui baissera votre soif encore plus.\n\nSi vous ne buvez pas de l'eau rapidement en étant `Assoiffé` alors vous allez mourir le jour prochain (à partir de 00 h)\n\nRemplir une gourde d'eau et la boire permet de pouvoir garder la gourde et la remplir à nouveau une prochaine fois lorsque vous trouverez à nouveau de l'eau potable")
            .setImage("https://cdn.pixabay.com/photo/2013/07/12/12/22/well-145660_960_720.png")
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
            .addField("Système de fatigue, partie 1", "Comme la soif la faim et la santé, la soif fonctionne par rang croissant qui sont les suivants :\n\n\n`Aucune fatigue`\n`Légère fatigue`\n`Fatigue`\n`Fatigue extrême`\n\n\nVotre niveau de fatigue baisse une fois par jour (à partir de 00 h) et il faudra dormir pour ne plus être fatigué.\n\nA partir d'un certain rang de fatigue, vous aurez des malus sur vos roll qui sont les suivants :\n\n\n`Fatigue` : Malus de 5 sur la stat physique et sociale\n`Fatigue extrême` : Malus de 10 sur la stat physique et sociale\n\nVotre niveau de fatigue baisse selon le nombre d'heures que vous allez dormir chaques jours (une fois par jour seulement) :\n\n\n`1 à 5 H` : La fatigue baisse d'un rang.\n`6 à 10 H` : La fatigue baisse de deux rangs.\n`11 H et plus` : La fatigue baisse complètement.\n\n")
            .addField("Système de fatigue, partie 2", "Pour éviter des abus du type 'Je dors 1 H je me réveille puis je redors 1 H pour baisser de 2 rangs' seulement la première sieste/premier endormissement vous fera baisser votre fatigue, si vous dormez 3 H avant de vous réveiller alors votre fatigue baissera d'un rang et votre prochain dodo ne réduira pas votre fatigue (seulement à partir du jour suivant, à partir de 00 h\n\nVotre niveau de fatigue a une chance d'augmenter aussi lorsque vous effectuer votre métier pour gagner de l'argent, ou que vous allez en extérieur pour combattre/fouiller/récolter selon la zone et d'autres facteurs.")
            .setImage("https://s3.amazonaws.com/files.d20.io/marketplace/947467/dTWq0t88yJp4FwXbsPDvYw/med.png?1575777025689.png")
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
            .addField("Système de combat, partie 1 :", "Sur le RP il existe deux types de combats, ceux entre joueurs et contre des monstres/PNJ/boss durant des events que le staff organisera de temps à autres, et ceux à l'extérieur de la ville lors d'une fouille parfois.\n\nLe premier système de combat est donc assez manuel, si vous décidez de vous battre contre un joueur sa sera du tour par tour (les joueurs avant les monstres) avec des roll physique pour réussir à frapper l'adversaire.\n\nVous avez droit quand un ou plusieurs ennemis vous frappe de faire un roll sur la stat physique pour esquiver ou contrer.\n\nL'esquive se base sur votre stat physique, si vous avez 60 sur cette stat, il faudra faire 60 ou moins sur votre roll pour esquiver l'attaque ennemis.\n\nLe contre se base aussi sur la stat physique mais il sera plus difficile à réaliser, si vous réusissez un contre alors vous esquive l'attaque ennemis et vous pouvez l'attaquer en même temps (sans que ce soit votre tour ou vous pourrez l'attaquer de nouveau).\n\n")
            .addField("Système de combat, partie 2 :", "Pour réussir un contre, il faut réussir un roll sur la stat physique avec un malus de 30 sur le roll, si j'ai 60 sur la stat physique et que je tente un contre alors je dois faire 30 ou moins pour esquiver son coup et mettre gratuite qui le touche obligatoirement derrière.\n\nLe contre est impossible contre plusieurs ennemis, du moins par pour les débutants...\n\nLes boucliers augmentent très légèrement les chances de contre, selon le bouclier.\n\nLe système de blessure sur les monstres/boss lors d'events du staff (combat manuel) si par exemple ils envahissent la ville, il sera comme pour les joueurs c'est à dire que les monstres ont leur roll à faire, leur rang de blessure avant de mourir selon leur dangerosité, leur attaques et aussi leur loots et points d'expérience que le staff en question peux décider que ce soit par le hasard avec un roll, ou de manière fixe !")
            .addField("Système de combat, partie 3 :", "Concernant les combats en extérieur, selon votre niveau et selon la zone, vous aurez plus ou moins de chances de tomber sur des monstres et de subir plus ou moins de blessures importantes.\n\nLes commandes concernant les combats sont à écrire dans #〘≡〙combats !\n\nPendant les combats manuel, les commandes d'attaque une fois que votre roll physique a réussis et que l'ennemis n'esquive ou contre pas, sont écrites sur les armes, comme par exemple `=Attaque : dague brisée`.\n\nIl est possible de réduire le rang d'une blessure selon votre roll sur la stat de l'endurance, par exemple un coup de dague d'un joueur vous touche et vous inflige 2 rangs de blessure, si votre endurance est égal à 20 et que votre roll est égal à 17 alors vous réduisez de un rang la blessure.\n\n")
            .addField("Système de combat, partie 4 :", "Il est possible qu'à long terme, un équipement très résistant vous permettent en plus de pouvoir effectuer un nouveau roll sur votre endurance pour réduire un rang de blessure une nouvelle fois\n\nVous ne pouvez pas aller combattre à l'extérieur au début de votre aventure tant que vous n'avez pas une arme.\n\nIl existe des armes à deux mains mais aussi des armes à une main, vous permettant d'en équiper une dans chaques mains et effectuer deux attaques si votre roll d'attaque réussis et que l'esquive ou contre attaque de l'ennemis échoue (les armes à une main et à deux mains seront équilibrés le plus possible).\n\nLes monstres n'ont pas de roll à faire basé sur leur endurance lorsqu'ils reçoivent un coup, ils prendront toujours le maximum de rang de blessure que vous aurez mis avec votre coup.\n\nPour définir quand sera le tour d'un jour pendant un combat entre joueurs que ce soit à deux ou plus, vous pouvez utiliser un roll et selon les roll définir la position de chacuns\n\n")
            .addField("Système de combat, partie 5 :", "Pour résumé, dans un combat manuel autant contre un joueur qu'un monstre, il y aura toujours un système de tour par tour, avec une attaque et esquive/contre qui se détermine selon votre roll et votre stat en physique, et vos blessures peuvent se réduire grâce à un roll basé sur votre endurance augmenté grâce aux équipements !\n\nVous pouvez décider durant un combat de ne pas attaquer et essayer de fuir ou faire une tout autre action à la place, mais vous ne pouvez pas faire une action puis attaque, il faudra choisir.\n\nMalgré cette aspect MMO, veuillez à chaques actions et roll à décrire un minimum vos actions RP durant le combat, rendez les combats bien plus intéressants qu'une simple bataille de roll, ils sont là uniquement pour déterminés qui gagne, qui perd.\n\nLors d'un combat en extérieur qui vous a mené à une blessure, vous devrez faire un roll d'endurance savoir si vous réduisez ou non le rang de cette blessure.")
            .setImage("https://i.pinimg.com/originals/58/fe/16/58fe169e33bb3174c567fbed972fa7fc.jpg")
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
            .addField("Système de fouille :", "En sortant de la ville en extérieur, vous pourrez essayer de fouiller les environs dans une zone et essayer de trouver des objets et des coffres, ou même qui sait des zones secrètes et des richesses enfouis... Mais il reste un risque de tomber sur des monstres plus ou moins dangereux lors de vos expéditions, alors attention !\n\nLes commandes concernant la fouille sont à faire dans #〘≡〙fouille et décrivez le RP.\n\nIl est possible qu'en étant dans une zone, de RP avec un autre joueur/PNJ dans la zone le temps que vous finissez votre fouille\n\nSelon votre niveau, vous aurez plus ou moins de chances de tomber sur des richesses.")
            .setImage("https://wallpaperaccess.com/full/3336927.jpg")
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
            .addField("Système de récolte :", "Comme le système de fouille, vous pourrez à la place passer votre temps dans une zone à récolter des ressources comme par exemple du bois, des minerais, des fibres, du poissons, du cuir, de la viande d'animaux et d'autres possibilités encore selon la zone !\n\nLes commandes concernant la fouille sont à faire dans #〘≡〙récolte et décrivez le RP.\n\nIl est possible qu'en étant dans une zone, de RP avec un autre joueur/PNJ dans la zone le temps que vous finissez votre récolte.\n\nSelon votre niveau et si vous avez les bon outils, vous aurez plus ou moins de chances de récolter encore plus et des matériaux plus précieux.")
            .setImage("https://images3.alphacoders.com/186/186057.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Métiers 1")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Système de métier, partie 1 :", "Ce système aura pas mal de chance d'être vivant, d'être modifié, que certains métiers et certaines méchaniques par rapport à ça seront rajoutés.\n\nVoici la liste des différents métiers basiques possibles :\n\n\n`Couturier`\n`Tisserand`\n`Maroquinier`\n`Forgeron`\n`Chasseur`\n`Boulanger`\n`Cuisinier`\n`Marchand`\n`Transporteur`\n`Paysan`\n`Boucher`\n`Pêcheur`\n`Bûcheron`\n`Mineur`\n`Joaillier`\n`Charpentier`\n`Femme de joie`\n`Aubergiste`\n`Serveur`\n`Alchimiste`\n\n\nVoici la liste des métiers un peu plus dur d'accès :\n\n\n`Roi`\n`Chef des gardes`\n`Espion du roi`\n`Assassin du roi`\n`Garde`\n`Garde du roi`\n`Banquier du roi`\n`Geôlier`\n`Bourreau`\n\n\nChaque métiers a sa façon de gagner des écus, selon le nombre d'heures investis pour certains, que d'autres qui seront différents.\n\nVous ne pouvez faire qu'un seul métier à la fois, et les métiers difficiles d'accès ne sont possibles qu'en se présentant au roi ou au chef des gardes.\n\n\n")
            .addField("Système de métier, partie 2 :", "Voici la façon dont gagne des écus chaques métiers :\n\n\n`Couturier` : Gagne des écus en utilisant du tissu pour fabriquer des vêtements et des objets nécessitant du tissu.\n\n`Tisserand` : Gagne des écus en créant le tissu grâce aux fibres venant de l'extérieur.\n\n`Maroquinier` : Gagne des écus en créant des sacs et vêtements de cuir pour les habitants\n\n`Forgeron` : Gagne des écus en forgeant des armes et armures grâce aux métaux extérieurs\n\n`Chasseur` : Gagne des écus en sortant de la ville en partant chasser des animaux.\n\n`Boulanger` : Gagne des écus en créant le pain pour alimenter la ville.\n\n`Cuisinier` : Gagne des écus en cuisinant tous ce qui est possible à cuisiner grâce à ce qu'il y aura à disposition.\n\n`Marchand` : Gagne des écus en vendant ou en essayant, ce que les autres marchands veulent vendre\n\n`Transporteur` : Gagne des écus ou transportant des objets d'un point A à un point B, en ville ou en extérieur\n\n`Paysan` : Gagne des écus en récoltant les champs en ville\n\n")
            .addField("Système de métier, partie 3 :", "`Boucher` : Gagne des écus en travaillant la viande qui sera utilisé par les cuisiniers.\n\n`Pêcheur` : Gagne des écus en ramenant du poisson que ce soit depuis les lacs de la ville ou ceux extérieur.\n\n`Bûcheron` : Gagne des écus en coupant les arbres en ville comme en extérieur.\n\n`Mineur` : Gagne des écus en récoltant des minerais dans la mine publique de la ville ou en extérieur.\n\n`Joaillier` : Gagne des écus en fabriquant des amulettes et anneaux grâce aux pierres précieuses.\n\n`Charpentier` Gagne des écus en s'occupant de fabriquer des objets, réparer des bâtiments etc.\n\n`Femme de joie` : Gagne des écus en s'occupant du plaisir des hommes (voir les règles concernant le ERP).\n\n`Aubergiste` : Gagne des écus en servant les habitants niveau alcool et nourriture et en nettoyant l'auberge.\n\n`Serveur` : Gagne des écus en apportant ce dont a besoin les habitants qui viennent se ressourcer à l'auberge.\n\n`Alchimiste` : Gagne des écus en fabriquant des potions et d'autres mélanges.\n\n")
            .addField("Système de métier, partie 4 :", "`Roi` : Il ne gagne aucun écus fixe, il en gagne selon les taxes récoltés ainsi que de bien d'autres façons.\n`Chef des gardes/Garde du Roi/Garde/Espion du roi/Assassin du roi/Banquier du roi/Geôlier/Bourreau` : Gagne des écus selon la bonne humeur du roi, il donne les écus au chef des gardes qui ensuite distribue à ses gardes de manière équitable ou pour les plus efficaces.\n\nLe salaire de ces métiers en rapport au roi peuvent autant être payer par jour que par semaine selon son envie.\n\nChaques métiers doit travailler dans sa zone, seulement 8 H par jours maximum sont récompensés pour les métiers basiques (sauf femme de joie qui gagne des écus selon les prix qu'elle fixe).\n\nLes métiers en rapport au roi n'ont pas d'obligation de travailler tous les jours de manière acharné, les gardes protègent les habitants, les gardes du roi protègent le roi, le chef des gardes s'occupe de l'organisation, Le banquier du roi gère l'argent du roi.\n\n")
            .addField("Système de métier, partie 5 :", "Si vous faites mal votre travail, ou que vous êtes trop dissident, peux importe si c'est un travail proche du roi ou non, vous pourrez vous faire renvoyer de celui-ci que ce soit temporairement ou définitivement.\n\nLes travails fonctionnent par heures (8 H max par jour), chaques métiers basique possède une commandes qu'il faudra écrire dans #〘≡〙travail au bout d'au moins une heure de travail avec une preuve que IRP vous êtes bien dans la bonne zone, avec un minimum de description RP, si par exemple vous êtes partis pour pêcher, alors diriger vous vers un lac en ville/extérieur et décrivez la scène et ce que vous allez faire.\n\nSelon le nombre d'heure passé à travailler dans les métiers basiques, vous serez mieux payer comme par exemple un bûcheron qui coupe des arbres depuis 8 H sera mieux payé que celui qui a mis que 3 H.\n\nVous pouvez aller au dessus de 8 H de travail, mais le maximum par jour avec les commandes qui récompense les métiers basiques est limité à 8 H.")
            .addField("Système de métier, partie 6 :", "Par exemple prenons l'exemple d'un bûcheron qui travail 6 H, une fois finis il pourra faire dans le #〘≡〙travail la commande :\n\n`=Récompenses bûcheron : 6`\n\n Et il verra ce qu'il aura gagner.\n\nIl pourra de nouveau travailler 2 H et faire :\n\n`=Récompenses bûcheron : 2`\n\nMais s'il travail une nouvelle fois encore dans la même journée, ces heures supplémentaires ne seront pas récompensés (reset à partir de 00 H chaques jours, max 8 H).\n\nLe salon #〘≡〙salaire-métier est fait pour que le roi et le chef des gardes puissent notifier la paye des métiers qui sont en rapport à lui (en n'oubliant pas de déduire cette somme au compte en banque du roi, ce que le banquier du roi devra bien gérer).\n\nPour rejoindre un métier basique, il faudra s'adresser aux différents PNJ en ville qui les gère dans les bonne zones/bâtiments de manière RP, alors que pour devenir garde il faudra s'adresser au chef des gardes, pour devenir garde du roi sa sera au roi, le bourreau aussi etc.\n\n`=Métiers 2`")
            .setImage("https://i.pinimg.com/originals/9a/82/8d/9a828d0fc00a2540d35339e3aba5bfcc.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Métiers 2")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Système de métier, partie 7 :", "Comme pour les combats, les commandes sont là que pour simplifier le RP, donner un peu d'aspect MMO, récompenser les joueurs actifs ou prenant des risques, mais lors d'un combat autant que lors d'un travail, le RP reste prioritaire et obligatoire alors n'oubliez pas de décrire votre actions, vous êtes libre d'inventer il n'y a que les écus gagnés qui sont fixés par le bot pour les métiers basiques !\n\nVous pouvez quitter votre travail avant qu'il soit finis si vous devez par exemple fuir ou faire quelque chose ailleurs d'urgence, dans ce cas si vous avez travaillé par exemple 3 H 30, seulement 3 H seront prises en compte dans la commande, il y a exception si vous avez au moins travaillé 3 H 45 par exemple, vous pourrez arrondir à 4 H\n\nIl existe le métier de `Mercenaire` ainsi que même `Chef des mercenaires` qui ne sont pas payés, qui sont entre des criminels et des gardes, c'est à dire qu'ils font leur loi et vivent comme bon leur semble en groupe sans pour autant être des criminels.")
            .addField("Système de métier, partie 8 :", "Voici la liste des commandes pour reçevoir les écus selon le métier et le nombre d'heures passé :\n\n\n`=Récompenses couturier : [Heures]`\n`=Récompenses tisserand : [Heures]`\n`=Récompenses maroquinier : [Heures]`\n`=Récompenses forgeron : [Heures]`\n`=Récompenses chasseur : [Heures]`\n`=Récompenses boulanger : [Heures]`\n`=Récompenses cuisinier : [Heures]`\n`=Récompenses marchand : [Heures]`\n`=Récompenses transporteur : [Heures]`\n`=Récompenses paysan : [Heures]`\n`=Récompenses boucher : [Heures]`\n`=Récompenses pêcheur : [Heures]`\n`=Récompenses bûcheron : [Heures]`\n`=Récompenses mineur : [Heures]`\n`=Récompenses joaillier : [Heures]`\n`=Récompenses charpentier : [Heures]`\n`=Récompenses aubergiste : [Heures]`\n`=Récompenses serveur : [Heures]`\n`=Récompenses alchimiste : [Heures]`\n\n\nCes commandes sont à faire pour rappel dans #〘≡〙travail avec une preuve que vous avez bien travaillé tant d'heures IRP + description\n\nVous pouvez faire travailler votre personnage et revenir plus heures après.")
            .addField("Système de métier, partie 9 :", "Il arrivera parfois que suite à un évènement, les écus gagnés dans certains métiers vont être augmentés, par exemple si la ville est en pénurie d'arme ou d'armure alors les forgerons auront de meilleurs revenus.\n\nIl est possible de changer de métier seulement 3 fois par semaines maximum (reset à 00 H chaques lundi).")
            .setImage("https://i.pinimg.com/originals/9a/82/8d/9a828d0fc00a2540d35339e3aba5bfcc.jpg")
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
            .addField("Système de taxes :", "Une fois par semaine, le banquier du roi ou le chef des gardes s'occupera de récolter la taxe qu'il aura instaurer, il peux très bien ne pas mettre de taxe mais le roi ne gagnera quasiment pas d'écus, pas assez non plus pour payer ses gardes et donc la possibilité que les gardes ne travaillent plus...\n\nTous dépendra du roi ainsi que de sa personnalité et de sa façon de gouverner.\n\nSi vous refusez de payer, vous serez sur la liste des criminels et vous devrez payer une amende en plus si on vous attrape, voir la prison si le garde en question juge que vous êtes désobéissant.\n\nUn rôle HRP sera donné pour toutes les personnes qui ont payés la taxe qu'on se repère facilement, et il sera retiré à chaques début de semaine.")
            .setImage("https://pro-or.be/wp-content/uploads/2019/07/pieces_or-1.jpg")
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
            .addField("Système de prison :", "La prison se situe dans le château du roi, qui est très gardé et qui permet d'enfermer les criminels, les personnes dangereuses, ou même pour torturer les personnes ayant des informations compromettantes ou ce genre de choses...\n\nLe roi décide ou non s'il doit éxecuter la personne en question ce qui fera donc appel au bourreau publiquement, il a les pleins pouvoirs de vie ou de mort car nous sommes dans LastHour...")
            .setImage("https://wp.unil.ch/allezsavoir/files/2006/06/chillon.jpg")
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
            .addField("Système de trajets :", "Se déplacer en ville d'un point de vue RP ne demande pas de mettre plusieurs minutes, attendez au moins quelques instants et soyez fairplay, mais le déplacement en ville est très rapide\n\nCependant, le déplacement à l'extérieur de la ville mettra du temps entre les différentes zones, voici les différents temps à respecter :\n\n\n(à faire)\n\n\nVous cumuler les minutes de trajets que ce soit à aller comme au retour selon votre position, si par exemple je suis en ville, que je veux aller dans XXX alors je mettrais XX minutes, et au retour pareil.\n\nLes montures permettent de réduire les temps de trajets selon la monture.")
            .setImage("https://static.wikia.nocookie.net/contrevent-jdr/images/e/ea/Map.jpg/revision/latest/scale-to-width-down/340?cb=20130614151641&path-prefix=fr.png")
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
            .addField("Système de monture :", "Les montures permettent d'aller plus vite à l'extérieur de la ville selon sa rapidité et son prix évidemment.\n\nPour consulter la liste actuel des montures en ventes à l'écurie : `=Liste des montures` (très prochainement)")
            .setImage("https://cdn.pixabay.com/photo/2017/01/06/14/32/horse-1957859_960_720.png")
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
            .addField("Système de craft :", "Pour fabriquer/craft un objet, il vous faudra les matériaux en question pour réaliser l'objet en question.\n\nVoici les différents craft possibles par catégories :\n\n\n`=XXXX`\n`=XXXX`\n`=XXXX`\n`=XXXX`\n`=XXXX`\n`=XXXX`")
            .setImage("https://i.skyrock.net/7971/44677971/pics/2954722815_1_3_lMyhQoIN.jpg")
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
            .addField("Système de banque :", "Si vous avez des écus sur vous, il faut surtout aller la stocker à la banque de la ville afin d'éviter de vous la faire voler.\n\nLa banque permet de garder vos écus sécurisé comme l'entrepôt, avec pas mal de gardes qui surveille afin d'éviter tous vol.\n\nSi un ou plusieurs criminels arrivent à pénétrer dans la banque et voler les richesses, ils ne pourront que voler 25 % des écus total de chaques habitants (les écus ont un poids, et ils ne peuvent pas transporter des tonnes).")
            .setImage("https://static.teteamodeler.com/media/cache/thumb_400/histoire-et-origines-de-la-banque-tete-a-modeler.jpeg")
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
            .addField("Système d'entrepôt :", "Mise appart gagner assez d'argent pour se payer une maison voir plus et pouvoir stocker à l'intérieur de manière assez sécurisé, il est possible de stocker vos objets dans l'entrepôt de la ville qui est bien gardé !\n\nIl faudra payer cependant pour les entreposer et garder bien précieusement jusqu'à que vous venez les chercher.\n\nLes gardes fouillent les habitants qui rentre et sort afin d'éviter les vols, vous n'aurez d'ailleurs pas droit d'avoir votre arme sur vous à l'entrée, vous la récupérez en sortant.")
            .setImage("https://us.123rf.com/450wm/jordi2r/jordi2r1712/jordi2r171200065/92154447-picerie-dans-les-sacs-et-les-barils-dans-un-entrep%C3%B4t-m%C3%A9di%C3%A9val-en-europe.jpg?ver=6")
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
            .addField("Système de tournois", "Parfois, il est possible que le roi ou d'autres personnes sans des fonctions importantes dans la ville, organisent des tournois que ce soit de créativité ou de jeux, le plus souvent ce sera des tournois dans l'arène en ville !\n\nDurant un tournois à l'arène, vous n'aurez droit qu'à des armes en bois et le premier à mettre KO son adversaire gagne, ou selon le nombre de coup mis à l'adversaire qui touche !\n\nLes règles dépendent de la personne qui organise, cependant il est possible qu'un roi organise des combats à morts avec de lourdes récompenses à la clef pour les personnes qui veulent tenter le diable et qui veulent gloire et richesse...\n\nEn dehors de ce genre de tournois à mort, il est interdit de s'entretuer et seulement le roi ayant les pleins pouvoirs peut faire ceci de manière légal.")
            .setImage("https://lh3.googleusercontent.com/proxy/ic8tGV6U_yPvzhQ7O-pxNxIi9FEIYCnkLkruKIDh4ygCvWP620rE8cEH23Cn4suVeH6Rr-rQe2sIhS8PDaonJkFuB8xjUJmSkZK8COLebuUdmMCxD4ctRfoW7Pql5f7MWu52XBU.png")
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
            .addField("Système de magie :", "La magie sera expliqué et deviendra accessible arrivé à un stade du RP et selon l'activité de celui-ci !")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Objets")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Les objets :", "Voici la liste des différentes catégories d'objets qui existe dans le RP :\n\n\n`=XXXX\n`=XXXX`\n`=XXXX`\n`=XXXX`\n`=XXXX`\n`=XXXX``")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Magasin")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Système de magasin :", "Il existe plusieurs magasins en ville (un salon) qui permet d'acheter des objets à l'intérieur de manière illimités, mais il arrivera parfois que les prix d'achat/reventre change d'un objet à l'autre, d'un jour à l'autre.\n\nIl arrivera parfois aussi que certains objets en quantité limités se retrouve en vente qui seront assez cher mais puissants ou utiles !")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Inventaire")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Système d'inventaire :", "Sans aucun sac d'équipé, votre inventaire est limité à 20 objets maximum et 5000 écus.\n\nIl vous faudra acheter ou craft un sac avec des ressources afin de pouvoir porter plus d'écus et d'objets sur vous.\n\nVous pouvez stocker vos objets dans l'entrepôt de la ville, ou même chez vous si vous avez réussis à acheter une propriété en ville ! (Arrivera prochainement)")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Monstres")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Les monstres :", "Voici la liste des monstres, leur stats, leur commandes lors de combats manuel :\n\n\nXXXX : `=XXXX`\nXXXX : `=XXXX`\nXXXX : `=XXXX`\nXXXX : `=XXXX`\nXXXX : `=XXXX`\nXXXX : `=XXXX`")
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
            .addField("Système de zones :", "Il suffit d'écrire `=[Commande]` pour afficher les informations d'un zone et ce qu'on peux y faire et trouver !\n\nVoici la liste des différentes zones actuellement découvertes :\n\n\n`=Landgrave`")
            .setImage("https://images.squarespace-cdn.com/content/v1/55d7c74ae4b07cfd7eb4732d/1440782614604-ELUDEHPSO65EA10YXU2F/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/fantasy-scenery-wallpaper-full-hd-lp7olc55b1.jpg?format=2500w.png")
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
            .addField("Système de pause RP !", "Si vous décidez que vous n'allez pas RP pendant un bon moment sur le serveur, ou que vous ne pourrez pas être assez actif sachant qu'il faut boire et manger, vous avez droit de vous mettre en 'Pause RP' !\n\nCela signifie que lorsque vous voulez (maximum 1 seul fois par semaine), informez le staff que vous voulez vous mettre en pause, et votre personnage n'aura plus besoin de boire ni manger jusqu'à votre retour où la 'Pause RP' sera enlever (vos états resteront les même, comme un freeze dans le temps).\n\nAvec votre accord, un amis peut jouer votre personnage du moment qu'il ne l'utilise pas pour attaquer d'autres joueurs ou faire des actions criminelles/négatives.\n\nPour commencer cette fameuse pause RP, il faut obligatoirement être en dehors d'une scène RP importante, si vous êtes pris en otage par un groupe de criminels alors vous ne pouvez pas vous mettre en pause RP tous de suite...")
            .setImage("https://lh3.googleusercontent.com/proxy/vZ9JA6U-kgSFzEHHa_3wctA_V7Na4VhJFlSK1_ZBLppaIxv_A4eRmMmRQb_Sc8cqvHXD-MzizBXiHW3YBd42_OG2SwxAip5KY4zM3mCH7mgNTf_DggUtFDE.png")
            .setTimestamp()
        message.channel.send({ embed })
    }
});















































///////////Métiers






bot.on('message', message => {
    if (message.content.startsWith(prefix + "Récompenses couturier :")) {
        let cont = message.content.slice(prefix.length).split(" ");
        const h = cont.slice(3);
        const X = Math.floor(21 * Math.random() + 30)
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(10038562)
                .addField("Métier couturier :", "Grâce à vos efforts, vous venez de remporter `" + X*h + " écus` !\n\nContinuez ainsi et vous serez sûrement récompensés de mieux en mieux") 
                .setTimestamp()
                message.channel.send({ embed })
        }
    });

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Récompenses tisserand :")) {
        let cont = message.content.slice(prefix.length).split(" ");
    const h = cont.slice(3);
    const X = Math.floor(21 * Math.random() + 30)
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Métier tisserand :", "Grâce à vos efforts, vous venez de remporter `" + X*h + " écus` !\n\nContinuez ainsi et vous serez sûrement récompensés de mieux en mieux") 
            .setTimestamp()
            message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Récompenses maroquinier :")) {
        let cont = message.content.slice(prefix.length).split(" ");
    const h = cont.slice(3);
    const X = Math.floor(21 * Math.random() + 30)
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Métier maroquinier :", "Grâce à vos efforts, vous venez de remporter `" + X*h + " écus` !\n\nContinuez ainsi et vous serez sûrement récompensés de mieux en mieux") 
            .setTimestamp()
            message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Récompenses forgeron :")) {
        let cont = message.content.slice(prefix.length).split(" ");
    const h = cont.slice(3);
    const X = Math.floor(21 * Math.random() + 30)
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Métier forgeron :", "Grâce à vos efforts, vous venez de remporter `" + X*h + " écus` !\n\nContinuez ainsi et vous serez sûrement récompensés de mieux en mieux") 
            .setTimestamp()
            message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Récompenses chasseur :")) {
        let cont = message.content.slice(prefix.length).split(" ");
    const h = cont.slice(3);
    const X = Math.floor(41 * Math.random() + 20)
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Métier chasseur :", "Grâce à vos efforts, vous venez de remporter `" + X*h + " écus` !\n\nContinuez ainsi et vous serez sûrement récompensés de mieux en mieux") 
            .setTimestamp()
            message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Récompenses boulanger :")) {
        let cont = message.content.slice(prefix.length).split(" ");
    const h = cont.slice(3);
    const X = Math.floor(41 * Math.random() + 20)
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Métier boulanger :", "Grâce à vos efforts, vous venez de remporter `" + X*h + " écus` !\n\nContinuez ainsi et vous serez sûrement récompensés de mieux en mieux") 
            .setTimestamp()
            message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Récompenses cuisinier :")) {
        let cont = message.content.slice(prefix.length).split(" ");
    const h = cont.slice(3);
    const X = Math.floor(41 * Math.random() + 20)
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Métier cuisinier :", "Grâce à vos efforts, vous venez de remporter `" + X*h + " écus` !\n\nContinuez ainsi et vous serez sûrement récompensés de mieux en mieux") 
            .setTimestamp()
            message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Récompenses marchand :")) {
        let cont = message.content.slice(prefix.length).split(" ");
    const h = cont.slice(3);
    const X = Math.floor(81 * Math.random() + 1)
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Métier marchand :", "Grâce à vos efforts, vous venez de remporter `" + X*h + " écus` !\n\nContinuez ainsi et vous serez sûrement récompensés de mieux en mieux") 
            .setTimestamp()
            message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Récompenses transporteur :")) {
        let cont = message.content.slice(prefix.length).split(" ");
    const h = cont.slice(3);
    const X = Math.floor(41 * Math.random() + 20)
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Métier transporteur :", "Grâce à vos efforts, vous venez de remporter `" + X*h + " écus` !\n\nContinuez ainsi et vous serez sûrement récompensés de mieux en mieux") 
            .setTimestamp()
            message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Récompenses paysan :")) {
        let cont = message.content.slice(prefix.length).split(" ");
    const h = cont.slice(3);
    const X = Math.floor(21 * Math.random() + 30)
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Métier paysan :", "Grâce à vos efforts, vous venez de remporter `" + X*h + " écus` !\n\nContinuez ainsi et vous serez sûrement récompensés de mieux en mieux") 
            .setTimestamp()
            message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Récompenses boucher :")) {
        let cont = message.content.slice(prefix.length).split(" ");
    const h = cont.slice(3);
    const X = Math.floor(41 * Math.random() + 20)
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Métier boucher :", "Grâce à vos efforts, vous venez de remporter `" + X*h + " écus` !\n\nContinuez ainsi et vous serez sûrement récompensés de mieux en mieux") 
            .setTimestamp()
            message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Récompenses pêcheur :")) {
        let cont = message.content.slice(prefix.length).split(" ");
    const h = cont.slice(3);
    const X = Math.floor(61 * Math.random() + 10)
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Métier pêcheur :", "Grâce à vos efforts, vous venez de remporter `" + X*h + " écus` !\n\nContinuez ainsi et vous serez sûrement récompensés de mieux en mieux") 
            .setTimestamp()
            message.channel.send({ embed })
    }
});




bot.on('message', message => {
    if (message.content.startsWith(prefix + "Récompenses bûcheron :")) {
        let cont = message.content.slice(prefix.length).split(" ");
    const h = cont.slice(3);
    const X = Math.floor(41 * Math.random() + 20)
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Métier bûcheron :", "Grâce à vos efforts, vous venez de remporter `" + X*h + " écus` !\n\nContinuez ainsi et vous serez sûrement récompensés de mieux en mieux") 
            .setTimestamp()
            message.channel.send({ embed })
    }
});


bot.on('message', message => {
    if (message.content.startsWith(prefix + "Récompenses mineur :")) {
        let cont = message.content.slice(prefix.length).split(" ");
    const h = cont.slice(3);
    const X = Math.floor(41 * Math.random() + 20)
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Métier mineur :", "Grâce à vos efforts, vous venez de remporter `" + X*h + " écus` !\n\nContinuez ainsi et vous serez sûrement récompensés de mieux en mieux") 
            .setTimestamp()
            message.channel.send({ embed })
    }
});


bot.on('message', message => {
    if (message.content.startsWith(prefix + "Récompenses joaillier :")) {
        let cont = message.content.slice(prefix.length).split(" ");
    const h = cont.slice(3);
    const X = Math.floor(61 * Math.random() + 10)
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Métier joaillier :", "Grâce à vos efforts, vous venez de remporter `" + X*h + " écus` !\n\nContinuez ainsi et vous serez sûrement récompensés de mieux en mieux") 
            .setTimestamp()
            message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Récompenses charpentier :")) {
        let cont = message.content.slice(prefix.length).split(" ");
    const h = cont.slice(3);
    const X = Math.floor(21 * Math.random() + 30)
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Métier charpentier :", "Grâce à vos efforts, vous venez de remporter `" + X*h + " écus` !\n\nContinuez ainsi et vous serez sûrement récompensés de mieux en mieux") 
            .setTimestamp()
            message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Récompenses aubergiste :")) {
        let cont = message.content.slice(prefix.length).split(" ");
    const h = cont.slice(3);
    const X = Math.floor(21 * Math.random() + 30)
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Métier aubergiste :", "Grâce à vos efforts, vous venez de remporter `" + X*h + " écus` !\n\nContinuez ainsi et vous serez sûrement récompensés de mieux en mieux") 
            .setTimestamp()
            message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Récompenses serveur :")) {
        let cont = message.content.slice(prefix.length).split(" ");
    const h = cont.slice(3);
    const X = Math.floor(21 * Math.random() + 30)
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Métier serveur :", "Grâce à vos efforts, vous venez de remporter `" + X*h + " écus` !\n\nContinuez ainsi et vous serez sûrement récompensés de mieux en mieux") 
            .setTimestamp()
            message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Récompenses alchimiste :")) {
        let cont = message.content.slice(prefix.length).split(" ");
    const h = cont.slice(3);
    const X = Math.floor(61 * Math.random() + 10)
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Métier alchimiste :", "Grâce à vos efforts, vous venez de remporter `" + X*h + " écus` !\n\nContinuez ainsi et vous serez sûrement récompensés de mieux en mieux") 
            .setTimestamp()
            message.channel.send({ embed })
    }
});




















































/////////////////Arme et attaque


bot.on('message', message => {
    if (message.content.startsWith(prefix + "Attaque : dague brisée")) {
        const Blessure = Math.floor(Math.random() * 100) + 1;
        if (Blessure < 90) {
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Dague brisée:", "Vous venez d'attaquer votre adversaire et il subira : `1 rang de blessure` !")
            .setTimestamp()
            message.channel.send({ embed })
        }
        if (Blessure > 91) {
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Dague brisée :", "Vous venez d'attaquer votre adversaire et il subira : `2 rangs de blessure` !")
            .setTimestamp()
            message.channel.send({ embed })
        }
    }
});





////////////////////////////////////Landgrave Zone///////////////////

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Landgrave")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『LastHour [RP/ERP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(10038562)
            .addField("Landgrave :", "Ce que l'on nomme Landgrave est tous simplement le contour de la ville ravagé par les combats et par les désastres qui s'est produit auparavant...\n\nVous ne trouverez pas grand chose à moins que vous réussissez à trouver des objets sur les cadavres de monstres ou d'humains enfouis sous cette boue terriblement noir et immonde...\n\nCependant, il reste quelques arbres ainsi que des minerais de médiocres qualités et même quelques points d'eau avec des poissons étranges, pour tenter d'y rapporter quelque chose !\n\n:blowfish:Pour pêcher ici :\n`=Landgrave pêcheur : [Heure(s)]`\n\n:wood:Pour récolter du bois :\n`=Landgrave bûcheron : [Heure(s)]`\n\n:gem:Pour récolter des minerais :\n`=Landgrave mineur : [Heure(s)]`\n\n:mag:Pour fouiller les environs :\n`=Landgrave fouille : [Heure(s)]`\n\n:crossed_swords:Pour combattre des monstres : `=Landgrave combat : [Niveau]`")
            .setImage("https://pbs.twimg.com/media/DnDXc0WXcAAA8po.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});