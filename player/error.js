module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Nessuna canzone è avviata in questo server`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Non sei connesso a nessuna chat vocale`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Non riesco ad accedere la tuo canale controlla i miei permessi`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Qualcosa di insolito con l'errore : ${error}`);
    };
};
