module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} la playlist seguente è stata aggiunta alla lista (**${playlist.tracks.length}** canzone) !`);
};