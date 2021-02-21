module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Non ho trovato nulla su Youtube per la canzone : ${query} !`);
};