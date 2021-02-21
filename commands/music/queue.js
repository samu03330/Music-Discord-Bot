module.exports = {
    name: 'queue',
    aliases: [],
    category: 'Musica',
    utilisation: '{prefix}queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Non sei in nessuna chat vocale !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Il bot è in un altro canale`);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nessuna canzone in riproduzione ora`);

        message.channel.send(`**Coda canzoni - ${message.guild.name} ${client.emotes.queue} ${client.player.getQueue(message).loopMode ? '(continuata)' : ''}**\nCanzone attuale : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${track.author} (Richiesta da : ${track.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `E **${queue.tracks.length - 5}** altre canzoni...` : `Nella playList **${queue.tracks.length}** canzoni...`}`));
    },
};