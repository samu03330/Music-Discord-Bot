module.exports = {
    name: 'debug',
    aliases: [],
    category: 'Info',
    utilisation: '{prefix}debug',

    execute(client, message) {
        message.channel.send(`${client.emotes.success} - ${client.user.username} connesso in **${client.voice.connections.size}** canali !`);
    },
};