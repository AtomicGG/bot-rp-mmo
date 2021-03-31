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
    if (message.content.startsWith(prefix + "Aide)) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(3447003)
            .addField("Bienvenue sur le menu d'aide !", "Vous aurez des informations à propos du RP sur chacunes de ces commandes. Elles sont classées par importance, prenez le temps de les lire !\n\n" +
                ":closed_book:=SAO\n" +
                ":bust_in_silhouette:=Personnage\n" +
                ":diamond_shape_with_a_dot_inside:=Classes\n" +
                ":cyclone:=Compétences\n" +
                ":trident:=Particularités\n" +
                ":hammer:=Améliorations\n" +
                ":dagger:=Armes\n" +
                ":walking:=Trajets\n" +
                ":game_die:=Rolls\n" +
                ":crossed_swords:=Combat\n" +
                ":white_flower:=Etats\n" +
                ":book:=Quêtes\n" +
                ":skull:=Mort\n" +
                ":heartbeat:=Rétablissement\n" +
                ":sparkles:=Niveaux\n" +
                ":100:=Caractéristiques\n" +
                ":globe_with_meridians:=Zones\n" +
                ":japanese_ogre:=Monstres\n" +
                ":scroll:=Liste\n" +
                ":mag_right:=Objets\n" +
                ":tools:=Crafts\n" +
                ":hammer_pick:=Métiers\n" +
                ":large_orange_diamond:=Cristal\n" +
                ":cityscape:=Ville\n" +
                ":sunrise_over_mountains:=Extérieur\n" +
                ":classical_building:=Souterrains\n" +
                ":homes:=Constructions\n" +
                ":loud_sound:=Menus\n" +
                ":bank:=Donjons\n" +
                ":fox:=Familiers\n" +
                ":busts_in_silhouette:=Guilde\n" +
                ":alembic:=Professions\n" +
                ":microphone2:=Dirigeant\n" +
                ":shield:=Garde\n" +
                ":bow_and_arrow:=Mercenaire\n" +
                ":chains:=La prison\n" +
                ":ring:=Mariage\n" +
                ":notes:=Musiques")
            .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
            .setTimestamp()
        message.channel.send({ embed })
    }
});
