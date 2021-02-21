module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Musica',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Non sei in nessuna chat vocale !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Il bot è in un altro canale!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nessuna canzone in riproduzione ora !`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - Nella coda è presente solo una canzone`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - Le canzoni sono state **rimosse** !`);
    },
};