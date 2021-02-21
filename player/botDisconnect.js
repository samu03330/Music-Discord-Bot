module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - La canzone è stata interrotta e mi sono disconnesso dal canale`);
};