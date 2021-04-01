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
            .addField("Création de votre personnage :", "Voici la fiche à copier coller et à remplir avant de la mettre dans un des salons 'Fiche en attente' !\n\n```Nom : [A remplir]\n\nPrénom : [A remplir]\n\nSexe : [A remplir]\n\nÂge : [A remplir]\n\nDescription physique : [A remplir, 250 mots minimum]\n\nDescription de la personnalité : [A remplir, 250 mots minimum]\n\nPourquoi et/ou comment êtes vous arriver à LastHour : [A remplir, 500 mots minimum]\n\nVotre histoire : [A remplir, 500 mots]\n\n▲▼▲▼▲▼▲▼▲▼\n\nNiveau : 1\n\n0/100 points d'expériences\n\nArme équipée : [Aucune]\n\nCasque équipé : [Aucun]\n\nArmure équipée : [Aucune]\n\nJambières équipées : [Aucunes]\n\nBottes équipées : [Aucunes]\n\n▲▼▲▼▲▼▲▼▲▼\n\nStatitstiques [225 points à répartir]:\n\nForce : [A remplir, minimum 25 maximum 75]\n\nMental : [A remplir, minimum 25 maximum 75]\n\nSocial : [A remplir, minimum 25 maximum 75]\n\nEndurance : [A remplir, minimum 20 maximum 40]\n\nChance : [A remplir, minimum 20 maximum 40]\n\n▲▼▲▼▲▼▲▼▲▼\n\nMétier : [A remplir une fois que vous en aurez un]\n\n▲▼▲▼▲▼▲▼▲▼\n\nVotre inventaire : [A remplir lors de l'acquisition d'objets]```")
            .setImage("https://i.pinimg.com/originals/6d/2d/73/6d2d7316f0c043d73228ad9c2d36f75d.png")
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
            .addField("Système de combat, partie 1 :", "Sur le RP il existe deux types de combats, ceux entre joueurs et contre des monstres/PNJ/boss durant des events que le staff organisera de temps à autres, et ceux à l'extérieur de la ville.\n\nLe premier système de combat est donc assez manuel, si vous décidez de vous battre contre un joueur sa sera du tour par tour avec des roll physique pour frapper.\n\nVous avez droit quand un ou plusieurs ennemis vous frappe de faire un roll sur la stat physique pour esquiver ou contrer.\n\nL'esquive se base sur votre stat physique, si vous avez 60 sur cette stat, il faudra faire 60 ou moins sur votre roll pour esquiver l'attaque ennemis.\n\nLe contre se base aussi sur la stat physique mais il sera plus difficile à réaliser, si vous réusissez un contre alors vous esquive l'attaque ennemis et vous pouvez l'attaquer en même temps (sans que ce soit votre tour ou vous pourrez l'attaquer de nouveau).\n\n")
            .addField("Système de combat, partie 2 :", "Pour réussir un contre, il faut réussir un roll sur la stat physique avec un malus de 30 sur le roll, si j'ai 60 sur la stat physique et que je tente un contre alors je dois faire 30 ou moins pour esquiver son coup et mettre gratuite qui le touche obligatoirement derrière.\n\nLe contre est impossible contre plusieurs ennemis, du moins par pour les débutants...\n\nLes boucliers augmentent très légèrement les chances de contre, selon le bouclier.\n\nLe système de blessure sur des monstres est différentes des joueurs/PNJ, lorsque le staff organise un combat contre des monstres, il décide de la façon dont les monstres perdent de la santé, que ce soit par système de blessure (classique) ou par HP (différent), il décide aussi des objets que tous le monde gagne sur la fin du combat, les points d'expériences etc.")
            .addField("Système de combat, partie 3 :", "Concernant les combats en extérieur, selon votre niveau et selon la zone, vous aurez plus ou moins de chances de tomber sur des monstres et de subir plus ou moins de blessures importantes, ainsi que selon votre défense grâce aux équipements\n\nLorsque vous irez dans une zone pour combattre, il faudra faire les commandes dans #〘≡〙combat seulement pour les combats en extérieur.\n\nPendant les combats manuel, les commandes d'attaque une fois que votre roll physique a réussis et que l'ennemis n'esquive ou contre pas, sont écrites sur les armes.\n\nIl est possible de réduire le rang d'une blessureXXXXVous ne pouvez pas aller combattre à l'extérieur au début de votre aventure tant que vous n'avez pas une arme.")
            .setImage("https://images7.alphacoders.com/897/thumb-1920-897952.jpg")
            .setTimestamp()
        message.channel.send({ embed })
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Attaque : dague brisée")) {
        const Blessure = Math.floor(Math.random() * 100) + 1;
        if (Blessure < 90) {
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(3447003)
            .addField("Dague brisée:", "Vous venez d'attaquer votre adversaire et il subira : `1 rang de blessure` !")
            .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
            .setTimestamp()
        }
        if (Blessure > 91) {
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(3447003)
            .addField("Dague brisée :", "Vous venez d'attaquer votre adversaire et il subira : `2 rangs de blessure` !")
            .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
            .setTimestamp()
        }
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