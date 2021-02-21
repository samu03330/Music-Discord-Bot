module.exports = (client, message, queue, track) => {
    message.channel.send(`${client.emotes.music} - ${track.title} è stata aggiunta alla lista`);
};