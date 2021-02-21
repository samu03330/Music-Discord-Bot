module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    category: 'Musica',
    utilisation: '{prefix}shuffle',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Non sei in nessuna chat vocale !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Il bot è in un altro canale`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nessuna canzone in riproduzione ora !`);

        client.player.shuffle(message);

        return message.channel.send(`${client.emotes.success} - La coda è stata ripristinata **${client.player.getQueue(message).tracks.length}** canzoni !`);
    },
};