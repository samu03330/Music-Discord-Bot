module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Sto riproducendo ${track.title} nel canale ${message.member.voice.channel.name} ...`);
};