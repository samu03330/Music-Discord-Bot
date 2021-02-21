module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Musica',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Non sei in nessuna chat vocale !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Il bot è in un altro canale`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nessuna canzone in riproduzione ora !`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: 'Ideato e sviluppato da Samu_!#0001' },
                fields: [
                    { name: 'Canale', value: track.author, inline: true },
                    { name: 'Richiesta da', value: track.requestedBy.username, inline: true },
                    { name: 'Dalla PlayList', value: track.fromPlaylist ? 'Si' : 'No', inline: true },

                    { name: 'Visualizzazioni', value: track.views, inline: true },
                    { name: 'Durata', value: track.duration, inline: true },
                    { name: 'Filtro attivato', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Volume', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Loop attivo', value: client.player.getQueue(message).repeatMode ? 'Si' : 'No', inline: true },
                    { name: 'Pausa', value: client.player.getQueue(message).paused ? 'Si' : 'No', inline: true },

                    { name: 'Progress bar', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};