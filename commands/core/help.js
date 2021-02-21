module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'info',
    utilisation: '{prefix}help <nome del comando>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Info').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Musica').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Pannello di Aiuto' },
                    footer: { text: 'Ideato e sviluppato da Samu_!#0001' },
                    fields: [
                        { name: 'Bot', value: infos },
                        { name: 'Musica', value: music },
                        { name: 'Filtri', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `Per usare il filtro, ${client.config.discord.prefix}filtro (nome del fitro). Per esempio : ${client.config.discord.prefix}filter 8D.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - Non ho trovato questo comando! `);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Pannello di Aiuto' },
                    footer: { text: 'Ideato e sviluppato da Samu_!#0001' },
                    fields: [
                        { name: 'Nome', value: command.name, inline: true },
                        { name: 'Categoria', value: command.category, inline: true },
                        { name: 'Soprannome', value: command.aliases.length < 1 ? 'Nessun soprannome' : command.aliases.join(', '), inline: true },
                        { name: 'Utilizzo', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Informazioni per i vari comandi disponibili',
                }
            });
        };
    },
};