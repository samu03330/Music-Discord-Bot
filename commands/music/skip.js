module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Musica',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Non sei in nessuna chat vocale !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Il bot è in un altro canale`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nessuna canzone in riproduzione ora !`);

        client.player.skip(message);

        message.channel.send(`${client.emotes.success} - La seguente canzone è stata **skippata** !`);
    },
};