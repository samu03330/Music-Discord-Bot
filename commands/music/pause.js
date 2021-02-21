module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Musica',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Non sei in nessuna chat vocale !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Il bot è in un altro canale`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nessuna canzone in riproduzione ora !`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - La canzone è già in pausa`);

        client.player.pause(message);

        message.channel.send(`${client.emotes.success} - La canzone ${client.player.getQueue(message).playing.title} è in pausa!`);
    },
};