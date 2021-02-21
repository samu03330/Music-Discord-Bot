module.exports = (client, message, query, tracks) => {
    message.channel.send(`${client.emotes.error} - Non ho trovato nulla per la tua ricerca, riprova`);
};