module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - La tua canzone è stata **cancellata** !`);
    } else message.channel.send(`${client.emotes.error} - Seleziona un numero valido da **1** a **${tracks.length}** !`);
};