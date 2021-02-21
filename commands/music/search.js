module.exports = {
    name: 'search',
    aliases: ['sr'],
    category: 'Musica',
    utilisation: '{prefix}search [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Non sei in nessuna chat vocale !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Il bot è in un altro canale`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Indica il titola della canzone che desideri`);

        client.player.play(message, args.join(" "));
    },
};