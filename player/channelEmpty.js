module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - La canzone si è fermato perchè non ci sono più membri della la chat vocale !`);
};