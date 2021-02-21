module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Le canzoni nella coda sono finite, hai intenzione di aggiungerne altre ?`);
};