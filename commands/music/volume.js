module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Musica',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Non sei in nessuna chat vocale !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Il bot è in un altro canale`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nessuna canzone in riproduzione ora !`);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`${client.emotes.error} - Seleziona un numero`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(`${client.emotes.error} - Scrivi un numero da 1 a 100`);

        client.player.setVolume(message, parseInt(args[0]));

        message.channel.send(`${client.emotes.success} - Volume impostato su **${parseInt(args[0])}%** !`);
    },
};